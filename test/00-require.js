var assert = require( 'assert' )
	, chai   = require( 'chai' )

it( 'require/syntax check', function () {
	var rlt = require( '../lib/riak-list-thing' );
	assert( rlt, 'returned object is truthy' );
	assert( (typeof rlt) == 'function', 'returned object is a function' );

	var list = new rlt();

	assert( list.hasOwnProperty( 'push' ), 'rlt has a push' );
	assert( list.hasOwnProperty( 'pop' ), 'rlt has a shift' );
	assert( list.hasOwnProperty( 'length' ), 'rlt has a length' );
} );
