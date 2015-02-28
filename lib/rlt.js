// riak-list-thing
//   it looks and smells like a list but actually refers to a bucket in riak

'use strict;'

var riak  = require( 'riak-dc' )
	, xit   = require( 'xact-id-tiny' )
	, lists = { }
	, q     = require( 'q' )

function spawn (bucketid) {
	if (bucketid == undefined) {
		// create a new bucketid
		//
		// 1. create a bucketid
		// 2. return an empty rlt object
		var xact = new xit.xact()
			, list = new rltlist();

		xit.add( xact );

		lists[ xact.serial ] = list;
		return list;
	}
	else {
		// refers to a bucket in riak
		//
		// 1. get_keys for that bucket, populate the list
		// 2. return the rlt object
		var list = new rltlist()
			, xact = new xit.xact( );

		return riak.get_keys( bucketid ).then( function (keys) {
			list.keys = keys;
			return list;
		} );
	}
}

module.exports = {
	spawn: spawn,
}

// NOTHING BELOW THIS LINE EXPORTED
//

xit.start();

// let me give you a thing
function rltpush () {
	var bucket  = Object.prototype.constructor( this ).bucketid
		, keys    = Object.prototype.constructor( this ).keys

	for (var idx in arguments) {
		var deferred = q.defer();
		riak.put_tuple( bucket, arguments[idx] ).then( function (serial) {
			deferred.resolve( serial );
		} );
		deferred.promise.then( function (serial) {
			keys.push( serial );
		} );
	};
	return keys.length;
}

// give me a thing
function rltshift () {
}

// how many keys in our bucket?
function rltlength () {
}

// return all the things (but don't delete them) in the bucket
function rltall () {
}

function rltlist () {
	return {
		keys:     [ ],
		bucketid: null,
		push:     rltpush,
		shift:    rltshift,
		pop:      rltshift,  // note, it doesn't matter whether it's front or back in rlt

		each:     rltall,
		length:   rltlength
	}
}

// @janearc 🐙👾 // jane@cpan.org // vim:tw=80:ts=2:noet
