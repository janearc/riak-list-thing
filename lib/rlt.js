// riak-list-thing
//   it looks and smells like a list but actually refers to a bucket in riak

'use strict;'

var riak  = require( 'riak-dc' )
	, lists = { };

function spawn (bucketid) {
	if (bucketid == undefined) {
		// create a new bucketid
		//
		// 1. create a bucketid
		// 2. return an empty rlt object
	}
	else {
		// refers to a bucket in riak
		//
		// 1. get_keys for that bucket, populate the list
		// 2. return the rlt object
	}
}


module.exports = spawn;
spawn.push     = rltpush;
spawn.shift    = rltshift;
spawn.length   = rltlength;

// NOTHING BELOW THIS LINE EXPORTED
//

function rltlist () {
	return {
		keys:     [ ],
		bucketid: undefined
	}
}

// jane@cpan.org // vim:tw=79:ts=2:noet
