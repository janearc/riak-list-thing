// riak-list-thing
//   it looks and smells like a list but actually refers to a bucket in riak

'use strict;'

var riak  = require( 'riak-dc' )
	, xit   = require( 'xact-id-tiny' )
	, lists = { };

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
			, xact = new xit.xact( bucketid );

		list.bucketid = bucketid;
		lists[ bucketid ] = list;

		return riak.get_keys( bucketid ).then( function (keys) {
			list.keys = keys;
			return list;
		} );
	}
}


module.exports = {
	spawn: spawn,

}

spawn.push     = rltpush;
spawn.shift    = rltshift;
spawn.pop      = rltshift;


spawn.length   = rltlength;

// NOTHING BELOW THIS LINE EXPORTED
//

xit.start();

function rltpush () {
	// how do we get the serial of the object that we are calling this from?
}

function rltlist () {
	return {
		keys:     [ ],
		bucketid: undefined
	}
}

// jane@cpan.org // vim:tw=79:ts=2:noet
