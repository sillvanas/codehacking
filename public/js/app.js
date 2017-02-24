/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
  }var n = {};return e.m = t, e.c = n, e.i = function (t) {
    return t;
  }, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(n, "a", n), n;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "./", e(e.s = 38);
}([function (t, e, n) {
  "use strict";
  function r(t) {
    return "[object Array]" === C.call(t);
  }function i(t) {
    return "[object ArrayBuffer]" === C.call(t);
  }function o(t) {
    return "undefined" != typeof FormData && t instanceof FormData;
  }function a(t) {
    var e;return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
  }function s(t) {
    return "string" == typeof t;
  }function u(t) {
    return "number" == typeof t;
  }function c(t) {
    return "undefined" == typeof t;
  }function l(t) {
    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
  }function f(t) {
    return "[object Date]" === C.call(t);
  }function p(t) {
    return "[object File]" === C.call(t);
  }function d(t) {
    return "[object Blob]" === C.call(t);
  }function h(t) {
    return "[object Function]" === C.call(t);
  }function v(t) {
    return l(t) && h(t.pipe);
  }function g(t) {
    return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
  }function m(t) {
    return t.replace(/^\s*/, "").replace(/\s*$/, "");
  }function y() {
    return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement;
  }function b(t, e) {
    if (null !== t && "undefined" != typeof t) if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || r(t) || (t = [t]), r(t)) for (var n = 0, i = t.length; n < i; n++) {
      e.call(null, t[n], n, t);
    } else for (var o in t) {
      Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t);
    }
  }function _() {
    function t(t, n) {
      "object" == _typeof(e[n]) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e[n] = _(e[n], t) : e[n] = t;
    }for (var e = {}, n = 0, r = arguments.length; n < r; n++) {
      b(arguments[n], t);
    }return e;
  }function w(t, e, n) {
    return b(e, function (e, r) {
      n && "function" == typeof e ? t[r] = x(e, n) : t[r] = e;
    }), t;
  }var x = n(6),
      C = Object.prototype.toString;t.exports = { isArray: r, isArrayBuffer: i, isFormData: o, isArrayBufferView: a, isString: s, isNumber: u, isObject: l, isUndefined: c, isDate: f, isFile: p, isBlob: d, isFunction: h, isStream: v, isURLSearchParams: g, isStandardBrowserEnv: y, forEach: b, merge: _, extend: w, trim: m };
}, function (t, e, n) {
  "use strict";
  (function (e) {
    function r(t, e) {
      !o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
    }function i() {
      var t;return "undefined" != typeof XMLHttpRequest ? t = n(2) : "undefined" != typeof e && (t = n(2)), t;
    }var o = n(0),
        a = n(26),
        s = /^\)\]\}',?\n/,
        u = { "Content-Type": "application/x-www-form-urlencoded" },
        c = { adapter: i(), transformRequest: [function (t, e) {
        return a(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t;
      }], transformResponse: [function (t) {
        if ("string" == typeof t) {
          t = t.replace(s, "");try {
            t = JSON.parse(t);
          } catch (t) {}
        }return t;
      }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function validateStatus(t) {
        return t >= 200 && t < 300;
      } };c.headers = { common: { Accept: "application/json, text/plain, */*" } }, o.forEach(["delete", "get", "head"], function (t) {
      c.headers[t] = {};
    }), o.forEach(["post", "put", "patch"], function (t) {
      c.headers[t] = o.merge(u);
    }), t.exports = c;
  }).call(e, n(33));
}, function (t, e, n) {
  "use strict";
  var r = n(0),
      i = n(18),
      o = n(21),
      a = n(27),
      s = n(25),
      u = n(5),
      c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(20);t.exports = function (t) {
    return new Promise(function (e, l) {
      var f = t.data,
          p = t.headers;r.isFormData(f) && delete p["Content-Type"];var d = new XMLHttpRequest(),
          h = "onreadystatechange",
          v = !1;if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || s(t.url) || (d = new window.XDomainRequest(), h = "onload", v = !0, d.onprogress = function () {}, d.ontimeout = function () {}), t.auth) {
        var g = t.auth.username || "",
            m = t.auth.password || "";p.Authorization = "Basic " + c(g + ":" + m);
      }if (d.open(t.method.toUpperCase(), o(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d[h] = function () {
        if (d && (4 === d.readyState || v) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
          var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
              r = t.responseType && "text" !== t.responseType ? d.response : d.responseText,
              o = { data: r, status: 1223 === d.status ? 204 : d.status, statusText: 1223 === d.status ? "No Content" : d.statusText, headers: n, config: t, request: d };i(e, l, o), d = null;
        }
      }, d.onerror = function () {
        l(u("Network Error", t)), d = null;
      }, d.ontimeout = function () {
        l(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED")), d = null;
      }, r.isStandardBrowserEnv()) {
        var y = n(23),
            b = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : void 0;b && (p[t.xsrfHeaderName] = b);
      }if ("setRequestHeader" in d && r.forEach(p, function (t, e) {
        "undefined" == typeof f && "content-type" === e.toLowerCase() ? delete p[e] : d.setRequestHeader(e, t);
      }), t.withCredentials && (d.withCredentials = !0), t.responseType) try {
        d.responseType = t.responseType;
      } catch (t) {
        if ("json" !== d.responseType) throw t;
      }"function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) {
        d && (d.abort(), l(t), d = null);
      }), void 0 === f && (f = null), d.send(f);
    });
  };
}, function (t, e, n) {
  "use strict";
  function r(t) {
    this.message = t;
  }r.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, r.prototype.__CANCEL__ = !0, t.exports = r;
}, function (t, e, n) {
  "use strict";
  t.exports = function (t) {
    return !(!t || !t.__CANCEL__);
  };
}, function (t, e, n) {
  "use strict";
  var r = n(17);t.exports = function (t, e, n, i) {
    var o = new Error(t);return r(o, e, n, i);
  };
}, function (t, e, n) {
  "use strict";
  t.exports = function (t, e) {
    return function () {
      for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
        n[r] = arguments[r];
      }return t.apply(e, n);
    };
  };
}, function (t, e, n) {
  var r, i; /*!
            * jQuery JavaScript Library v3.1.1
            * https://jquery.com/
            *
            * Includes Sizzle.js
            * https://sizzlejs.com/
            *
            * Copyright jQuery Foundation and other contributors
            * Released under the MIT license
            * https://jquery.org/license
            *
            * Date: 2016-09-22T22:30Z
            */
  !function (e, n) {
    "use strict";
    "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "object" == _typeof(t.exports) ? t.exports = e.document ? n(e, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");return n(t);
    } : n(e);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";
    function a(t, e) {
      e = e || ot;var n = e.createElement("script");n.text = t, e.head.appendChild(n).parentNode.removeChild(n);
    }function s(t) {
      var e = !!t && "length" in t && t.length,
          n = yt.type(t);return "function" !== n && !yt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }function u(t, e, n) {
      return yt.isFunction(e) ? yt.grep(t, function (t, r) {
        return !!e.call(t, r, t) !== n;
      }) : e.nodeType ? yt.grep(t, function (t) {
        return t === e !== n;
      }) : "string" != typeof e ? yt.grep(t, function (t) {
        return lt.call(e, t) > -1 !== n;
      }) : Et.test(e) ? yt.filter(e, t, n) : (e = yt.filter(e, t), yt.grep(t, function (t) {
        return lt.call(e, t) > -1 !== n && 1 === t.nodeType;
      }));
    }function c(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType;) {}return t;
    }function l(t) {
      var e = {};return yt.each(t.match(It) || [], function (t, n) {
        e[n] = !0;
      }), e;
    }function f(t) {
      return t;
    }function p(t) {
      throw t;
    }function d(t, e, n) {
      var r;try {
        t && yt.isFunction(r = t.promise) ? r.call(t).done(e).fail(n) : t && yt.isFunction(r = t.then) ? r.call(t, e, n) : e.call(void 0, t);
      } catch (t) {
        n.call(void 0, t);
      }
    }function h() {
      ot.removeEventListener("DOMContentLoaded", h), n.removeEventListener("load", h), yt.ready();
    }function v() {
      this.expando = yt.expando + v.uid++;
    }function g(t) {
      return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ht.test(t) ? JSON.parse(t) : t);
    }function m(t, e, n) {
      var r;if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(Bt, "-$&").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
        try {
          n = g(n);
        } catch (t) {}Mt.set(t, e, n);
      } else n = void 0;return n;
    }function y(t, e, n, r) {
      var i,
          o = 1,
          a = 20,
          s = r ? function () {
        return r.cur();
      } : function () {
        return yt.css(t, e, "");
      },
          u = s(),
          c = n && n[3] || (yt.cssNumber[e] ? "" : "px"),
          l = (yt.cssNumber[e] || "px" !== c && +u) && Wt.exec(yt.css(t, e));if (l && l[3] !== c) {
        c = c || l[3], n = n || [], l = +u || 1;do {
          o = o || ".5", l /= o, yt.style(t, e, l + c);
        } while (o !== (o = s() / u) && 1 !== o && --a);
      }return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i;
    }function b(t) {
      var e,
          n = t.ownerDocument,
          r = t.nodeName,
          i = Kt[r];return i ? i : (e = n.body.appendChild(n.createElement(r)), i = yt.css(e, "display"), e.parentNode.removeChild(e), "none" === i && (i = "block"), Kt[r] = i, i);
    }function _(t, e) {
      for (var n, r, i = [], o = 0, a = t.length; o < a; o++) {
        r = t[o], r.style && (n = r.style.display, e ? ("none" === n && (i[o] = qt.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Vt(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none", qt.set(r, "display", n)));
      }for (o = 0; o < a; o++) {
        null != i[o] && (t[o].style.display = i[o]);
      }return t;
    }function w(t, e) {
      var n;return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && yt.nodeName(t, e) ? yt.merge([t], n) : n;
    }function x(t, e) {
      for (var n = 0, r = t.length; n < r; n++) {
        qt.set(t[n], "globalEval", !e || qt.get(e[n], "globalEval"));
      }
    }function C(t, e, n, r, i) {
      for (var o, a, s, u, c, l, f = e.createDocumentFragment(), p = [], d = 0, h = t.length; d < h; d++) {
        if (o = t[d], o || 0 === o) if ("object" === yt.type(o)) yt.merge(p, o.nodeType ? [o] : o);else if (Qt.test(o)) {
          for (a = a || f.appendChild(e.createElement("div")), s = (Gt.exec(o) || ["", ""])[1].toLowerCase(), u = Yt[s] || Yt._default, a.innerHTML = u[1] + yt.htmlPrefilter(o) + u[2], l = u[0]; l--;) {
            a = a.lastChild;
          }yt.merge(p, a.childNodes), a = f.firstChild, a.textContent = "";
        } else p.push(e.createTextNode(o));
      }for (f.textContent = "", d = 0; o = p[d++];) {
        if (r && yt.inArray(o, r) > -1) i && i.push(o);else if (c = yt.contains(o.ownerDocument, o), a = w(f.appendChild(o), "script"), c && x(a), n) for (l = 0; o = a[l++];) {
          Zt.test(o.type || "") && n.push(o);
        }
      }return f;
    }function T() {
      return !0;
    }function $() {
      return !1;
    }function k() {
      try {
        return ot.activeElement;
      } catch (t) {}
    }function A(t, e, n, r, i, o) {
      var a, s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        "string" != typeof n && (r = r || n, n = void 0);for (s in e) {
          A(t, s, n, r, e[s], o);
        }return t;
      }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = $;else if (!i) return t;return 1 === o && (a = i, i = function i(t) {
        return yt().off(t), a.apply(this, arguments);
      }, i.guid = a.guid || (a.guid = yt.guid++)), t.each(function () {
        yt.event.add(this, e, i, r, n);
      });
    }function E(t, e) {
      return yt.nodeName(t, "table") && yt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t;
    }function S(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }function O(t) {
      var e = se.exec(t.type);return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }function j(t, e) {
      var n, r, i, o, a, s, u, c;if (1 === e.nodeType) {
        if (qt.hasData(t) && (o = qt.access(t), a = qt.set(e, o), c = o.events)) {
          delete a.handle, a.events = {};for (i in c) {
            for (n = 0, r = c[i].length; n < r; n++) {
              yt.event.add(e, i, c[i][n]);
            }
          }
        }Mt.hasData(t) && (s = Mt.access(t), u = yt.extend({}, s), Mt.set(e, u));
      }
    }function N(t, e) {
      var n = e.nodeName.toLowerCase();"input" === n && Jt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
    }function D(t, e, n, r) {
      e = ut.apply([], e);var i,
          o,
          s,
          u,
          c,
          l,
          f = 0,
          p = t.length,
          d = p - 1,
          h = e[0],
          v = yt.isFunction(h);if (v || p > 1 && "string" == typeof h && !gt.checkClone && ae.test(h)) return t.each(function (i) {
        var o = t.eq(i);v && (e[0] = h.call(this, i, o.html())), D(o, e, n, r);
      });if (p && (i = C(e, t[0].ownerDocument, !1, t, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (s = yt.map(w(i, "script"), S), u = s.length; f < p; f++) {
          c = i, f !== d && (c = yt.clone(c, !0, !0), u && yt.merge(s, w(c, "script"))), n.call(t[f], c, f);
        }if (u) for (l = s[s.length - 1].ownerDocument, yt.map(s, O), f = 0; f < u; f++) {
          c = s[f], Zt.test(c.type || "") && !qt.access(c, "globalEval") && yt.contains(l, c) && (c.src ? yt._evalUrl && yt._evalUrl(c.src) : a(c.textContent.replace(ue, ""), l));
        }
      }return t;
    }function I(t, e, n) {
      for (var r, i = e ? yt.filter(e, t) : t, o = 0; null != (r = i[o]); o++) {
        n || 1 !== r.nodeType || yt.cleanData(w(r)), r.parentNode && (n && yt.contains(r.ownerDocument, r) && x(w(r, "script")), r.parentNode.removeChild(r));
      }return t;
    }function R(t, e, n) {
      var r,
          i,
          o,
          a,
          s = t.style;return n = n || fe(t), n && (a = n.getPropertyValue(e) || n[e], "" !== a || yt.contains(t.ownerDocument, t) || (a = yt.style(t, e)), !gt.pixelMarginRight() && le.test(a) && ce.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }function L(t, e) {
      return { get: function get() {
          return t() ? void delete this.get : (this.get = e).apply(this, arguments);
        } };
    }function P(t) {
      if (t in ge) return t;for (var e = t[0].toUpperCase() + t.slice(1), n = ve.length; n--;) {
        if (t = ve[n] + e, t in ge) return t;
      }
    }function F(t, e, n) {
      var r = Wt.exec(e);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
    }function q(t, e, n, r, i) {
      var o,
          a = 0;for (o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) {
        "margin" === n && (a += yt.css(t, n + zt[o], !0, i)), r ? ("content" === n && (a -= yt.css(t, "padding" + zt[o], !0, i)), "margin" !== n && (a -= yt.css(t, "border" + zt[o] + "Width", !0, i))) : (a += yt.css(t, "padding" + zt[o], !0, i), "padding" !== n && (a += yt.css(t, "border" + zt[o] + "Width", !0, i)));
      }return a;
    }function M(t, e, n) {
      var r,
          i = !0,
          o = fe(t),
          a = "border-box" === yt.css(t, "boxSizing", !1, o);if (t.getClientRects().length && (r = t.getBoundingClientRect()[e]), r <= 0 || null == r) {
        if (r = R(t, e, o), (r < 0 || null == r) && (r = t.style[e]), le.test(r)) return r;i = a && (gt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0;
      }return r + q(t, e, n || (a ? "border" : "content"), i, o) + "px";
    }function H(t, e, n, r, i) {
      return new H.prototype.init(t, e, n, r, i);
    }function B() {
      ye && (n.requestAnimationFrame(B), yt.fx.tick());
    }function U() {
      return n.setTimeout(function () {
        me = void 0;
      }), me = yt.now();
    }function W(t, e) {
      var n,
          r = 0,
          i = { height: t };for (e = e ? 1 : 0; r < 4; r += 2 - e) {
        n = zt[r], i["margin" + n] = i["padding" + n] = t;
      }return e && (i.opacity = i.width = t), i;
    }function z(t, e, n) {
      for (var r, i = (K.tweeners[e] || []).concat(K.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
        if (r = i[o].call(n, e, t)) return r;
      }
    }function V(t, e, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          f = "width" in e || "height" in e,
          p = this,
          d = {},
          h = t.style,
          v = t.nodeType && Vt(t),
          g = qt.get(t, "fxshow");n.queue || (a = yt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, yt.queue(t, "fx").length || a.empty.fire();
        });
      }));for (r in e) {
        if (i = e[r], be.test(i)) {
          if (delete e[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
            if ("show" !== i || !g || void 0 === g[r]) continue;v = !0;
          }d[r] = g && g[r] || yt.style(t, r);
        }
      }if (u = !yt.isEmptyObject(e), u || !yt.isEmptyObject(d)) {
        f && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = g && g.display, null == c && (c = qt.get(t, "display")), l = yt.css(t, "display"), "none" === l && (c ? l = c : (_([t], !0), c = t.style.display || c, l = yt.css(t, "display"), _([t]))), ("inline" === l || "inline-block" === l && null != c) && "none" === yt.css(t, "float") && (u || (p.done(function () {
          h.display = c;
        }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), u = !1;for (r in d) {
          u || (g ? "hidden" in g && (v = g.hidden) : g = qt.access(t, "fxshow", { display: c }), o && (g.hidden = !v), v && _([t], !0), p.done(function () {
            v || _([t]), qt.remove(t, "fxshow");for (r in d) {
              yt.style(t, r, d[r]);
            }
          })), u = z(v ? g[r] : 0, r, p), r in g || (g[r] = u.start, v && (u.end = u.start, u.start = 0));
        }
      }
    }function X(t, e) {
      var n, r, i, o, a;for (n in t) {
        if (r = yt.camelCase(n), i = e[r], o = t[n], yt.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = yt.cssHooks[r], a && "expand" in a) {
          o = a.expand(o), delete t[r];for (n in o) {
            n in t || (t[n] = o[n], e[n] = i);
          }
        } else e[r] = i;
      }
    }function K(t, e, n) {
      var r,
          i,
          o = 0,
          a = K.prefilters.length,
          s = yt.Deferred().always(function () {
        delete u.elem;
      }),
          u = function u() {
        if (i) return !1;for (var e = me || U(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) {
          c.tweens[a].run(o);
        }return s.notifyWith(t, [c, o, n]), o < 1 && u ? n : (s.resolveWith(t, [c]), !1);
      },
          c = s.promise({ elem: t, props: yt.extend({}, e), opts: yt.extend(!0, { specialEasing: {}, easing: yt.easing._default }, n), originalProperties: e, originalOptions: n, startTime: me || U(), duration: n.duration, tweens: [], createTween: function createTween(e, n) {
          var r = yt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);return c.tweens.push(r), r;
        }, stop: function stop(e) {
          var n = 0,
              r = e ? c.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
            c.tweens[n].run(1);
          }return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this;
        } }),
          l = c.props;for (X(l, c.opts.specialEasing); o < a; o++) {
        if (r = K.prefilters[o].call(c, t, l, c.opts)) return yt.isFunction(r.stop) && (yt._queueHooks(c.elem, c.opts.queue).stop = yt.proxy(r.stop, r)), r;
      }return yt.map(l, z, c), yt.isFunction(c.opts.start) && c.opts.start.call(t, c), yt.fx.timer(yt.extend(u, { elem: t, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }function J(t) {
      var e = t.match(It) || [];return e.join(" ");
    }function G(t) {
      return t.getAttribute && t.getAttribute("class") || "";
    }function Z(t, e, n, r) {
      var i;if (yt.isArray(e)) yt.each(e, function (e, i) {
        n || Oe.test(t) ? r(t, i) : Z(t + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? e : "") + "]", i, n, r);
      });else if (n || "object" !== yt.type(e)) r(t, e);else for (i in e) {
        Z(t + "[" + i + "]", e[i], n, r);
      }
    }function Y(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");var r,
            i = 0,
            o = e.toLowerCase().match(It) || [];if (yt.isFunction(n)) for (; r = o[i++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n);
        }
      };
    }function Q(t, e, n, r) {
      function i(s) {
        var u;return o[s] = !0, yt.each(t[s] || [], function (t, s) {
          var c = s(e, n, r);return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1);
        }), u;
      }var o = {},
          a = t === Be;return i(e.dataTypes[0]) || !o["*"] && i("*");
    }function tt(t, e) {
      var n,
          r,
          i = yt.ajaxSettings.flatOptions || {};for (n in e) {
        void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
      }return r && yt.extend(!0, t, r), t;
    }function et(t, e, n) {
      for (var r, i, o, a, s = t.contents, u = t.dataTypes; "*" === u[0];) {
        u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
      }if (r) for (i in s) {
        if (s[i] && s[i].test(r)) {
          u.unshift(i);break;
        }
      }if (u[0] in n) o = u[0];else {
        for (i in n) {
          if (!u[0] || t.converters[i + " " + u[0]]) {
            o = i;break;
          }a || (a = i);
        }o = o || a;
      }if (o) return o !== u[0] && u.unshift(o), n[o];
    }function nt(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          c = {},
          l = t.dataTypes.slice();if (l[1]) for (a in t.converters) {
        c[a.toLowerCase()] = t.converters[a];
      }for (o = l.shift(); o;) {
        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
          if (a = c[u + " " + o] || c["* " + o], !a) for (i in c) {
            if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
              a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));break;
            }
          }if (a !== !0) if (a && t.throws) e = a(e);else try {
            e = a(e);
          } catch (t) {
            return { state: "parsererror", error: a ? t : "No conversion from " + u + " to " + o };
          }
        }
      }return { state: "success", data: e };
    }function rt(t) {
      return yt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }var it = [],
        ot = n.document,
        at = Object.getPrototypeOf,
        st = it.slice,
        ut = it.concat,
        ct = it.push,
        lt = it.indexOf,
        ft = {},
        pt = ft.toString,
        dt = ft.hasOwnProperty,
        ht = dt.toString,
        vt = ht.call(Object),
        gt = {},
        mt = "3.1.1",
        yt = function yt(t, e) {
      return new yt.fn.init(t, e);
    },
        bt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        _t = /^-ms-/,
        wt = /-([a-z])/g,
        xt = function xt(t, e) {
      return e.toUpperCase();
    };yt.fn = yt.prototype = { jquery: mt, constructor: yt, length: 0, toArray: function toArray() {
        return st.call(this);
      }, get: function get(t) {
        return null == t ? st.call(this) : t < 0 ? this[t + this.length] : this[t];
      }, pushStack: function pushStack(t) {
        var e = yt.merge(this.constructor(), t);return e.prevObject = this, e;
      }, each: function each(t) {
        return yt.each(this, t);
      }, map: function map(t) {
        return this.pushStack(yt.map(this, function (e, n) {
          return t.call(e, n, e);
        }));
      }, slice: function slice() {
        return this.pushStack(st.apply(this, arguments));
      }, first: function first() {
        return this.eq(0);
      }, last: function last() {
        return this.eq(-1);
      }, eq: function eq(t) {
        var e = this.length,
            n = +t + (t < 0 ? e : 0);return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
      }, end: function end() {
        return this.prevObject || this.constructor();
      }, push: ct, sort: it.sort, splice: it.splice }, yt.extend = yt.fn.extend = function () {
      var t,
          e,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || yt.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
        if (null != (t = arguments[s])) for (e in t) {
          n = a[e], r = t[e], a !== r && (c && r && (yt.isPlainObject(r) || (i = yt.isArray(r))) ? (i ? (i = !1, o = n && yt.isArray(n) ? n : []) : o = n && yt.isPlainObject(n) ? n : {}, a[e] = yt.extend(c, o, r)) : void 0 !== r && (a[e] = r));
        }
      }return a;
    }, yt.extend({ expando: "jQuery" + (mt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(t) {
        throw new Error(t);
      }, noop: function noop() {}, isFunction: function isFunction(t) {
        return "function" === yt.type(t);
      }, isArray: Array.isArray, isWindow: function isWindow(t) {
        return null != t && t === t.window;
      }, isNumeric: function isNumeric(t) {
        var e = yt.type(t);return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      }, isPlainObject: function isPlainObject(t) {
        var e, n;return !(!t || "[object Object]" !== pt.call(t)) && (!(e = at(t)) || (n = dt.call(e, "constructor") && e.constructor, "function" == typeof n && ht.call(n) === vt));
      }, isEmptyObject: function isEmptyObject(t) {
        var e;for (e in t) {
          return !1;
        }return !0;
      }, type: function type(t) {
        return null == t ? t + "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t ? ft[pt.call(t)] || "object" : typeof t === "undefined" ? "undefined" : _typeof(t);
      }, globalEval: function globalEval(t) {
        a(t);
      }, camelCase: function camelCase(t) {
        return t.replace(_t, "ms-").replace(wt, xt);
      }, nodeName: function nodeName(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }, each: function each(t, e) {
        var n,
            r = 0;if (s(t)) for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++) {} else for (r in t) {
          if (e.call(t[r], r, t[r]) === !1) break;
        }return t;
      }, trim: function trim(t) {
        return null == t ? "" : (t + "").replace(bt, "");
      }, makeArray: function makeArray(t, e) {
        var n = e || [];return null != t && (s(Object(t)) ? yt.merge(n, "string" == typeof t ? [t] : t) : ct.call(n, t)), n;
      }, inArray: function inArray(t, e, n) {
        return null == e ? -1 : lt.call(e, t, n);
      }, merge: function merge(t, e) {
        for (var n = +e.length, r = 0, i = t.length; r < n; r++) {
          t[i++] = e[r];
        }return t.length = i, t;
      }, grep: function grep(t, e, n) {
        for (var r, i = [], o = 0, a = t.length, s = !n; o < a; o++) {
          r = !e(t[o], o), r !== s && i.push(t[o]);
        }return i;
      }, map: function map(t, e, n) {
        var r,
            i,
            o = 0,
            a = [];if (s(t)) for (r = t.length; o < r; o++) {
          i = e(t[o], o, n), null != i && a.push(i);
        } else for (o in t) {
          i = e(t[o], o, n), null != i && a.push(i);
        }return ut.apply([], a);
      }, guid: 1, proxy: function proxy(t, e) {
        var n, r, i;if ("string" == typeof e && (n = t[e], e = t, t = n), yt.isFunction(t)) return r = st.call(arguments, 2), i = function i() {
          return t.apply(e || this, r.concat(st.call(arguments)));
        }, i.guid = t.guid = t.guid || yt.guid++, i;
      }, now: Date.now, support: gt }), "function" == typeof Symbol && (yt.fn[Symbol.iterator] = it[Symbol.iterator]), yt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      ft["[object " + e + "]"] = e.toLowerCase();
    });var Ct = /*!
                * Sizzle CSS Selector Engine v2.3.3
                * https://sizzlejs.com/
                *
                * Copyright jQuery Foundation and other contributors
                * Released under the MIT license
                * http://jquery.org/license
                *
                * Date: 2016-08-08
                */
    function (t) {
      function e(t, e, n, r) {
        var i,
            o,
            a,
            s,
            u,
            c,
            l,
            p = e && e.ownerDocument,
            h = e ? e.nodeType : 9;if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;if (!r && ((e ? e.ownerDocument || e : H) !== D && N(e), e = e || D, R)) {
          if (11 !== h && (u = mt.exec(t))) if (i = u[1]) {
            if (9 === h) {
              if (!(a = e.getElementById(i))) return n;if (a.id === i) return n.push(a), n;
            } else if (p && (a = p.getElementById(i)) && q(e, a) && a.id === i) return n.push(a), n;
          } else {
            if (u[2]) return Y.apply(n, e.getElementsByTagName(t)), n;if ((i = u[3]) && x.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(i)), n;
          }if (x.qsa && !V[t + " "] && (!L || !L.test(t))) {
            if (1 !== h) p = e, l = t;else if ("object" !== e.nodeName.toLowerCase()) {
              for ((s = e.getAttribute("id")) ? s = s.replace(wt, xt) : e.setAttribute("id", s = M), c = k(t), o = c.length; o--;) {
                c[o] = "#" + s + " " + d(c[o]);
              }l = c.join(","), p = yt.test(t) && f(e.parentNode) || e;
            }if (l) try {
              return Y.apply(n, p.querySelectorAll(l)), n;
            } catch (t) {} finally {
              s === M && e.removeAttribute("id");
            }
          }
        }return E(t.replace(st, "$1"), e, n, r);
      }function n() {
        function t(n, r) {
          return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = r;
        }var e = [];return t;
      }function r(t) {
        return t[M] = !0, t;
      }function i(t) {
        var e = D.createElement("fieldset");try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null;
        }
      }function o(t, e) {
        for (var n = t.split("|"), r = n.length; r--;) {
          C.attrHandle[n[r]] = e;
        }
      }function a(t, e) {
        var n = e && t,
            r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;if (r) return r;if (n) for (; n = n.nextSibling;) {
          if (n === e) return -1;
        }return t ? 1 : -1;
      }function s(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();return "input" === n && e.type === t;
        };
      }function u(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();return ("input" === n || "button" === n) && e.type === t;
        };
      }function c(t) {
        return function (e) {
          return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }function l(t) {
        return r(function (e) {
          return e = +e, r(function (n, r) {
            for (var i, o = t([], n.length, e), a = o.length; a--;) {
              n[i = o[a]] && (n[i] = !(r[i] = n[i]));
            }
          });
        });
      }function f(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t;
      }function p() {}function d(t) {
        for (var e = 0, n = t.length, r = ""; e < n; e++) {
          r += t[e].value;
        }return r;
      }function h(t, e, n) {
        var r = e.dir,
            i = e.next,
            o = i || r,
            a = n && "parentNode" === o,
            s = U++;return e.first ? function (e, n, i) {
          for (; e = e[r];) {
            if (1 === e.nodeType || a) return t(e, n, i);
          }return !1;
        } : function (e, n, u) {
          var c,
              l,
              f,
              p = [B, s];if (u) {
            for (; e = e[r];) {
              if ((1 === e.nodeType || a) && t(e, n, u)) return !0;
            }
          } else for (; e = e[r];) {
            if (1 === e.nodeType || a) if (f = e[M] || (e[M] = {}), l = f[e.uniqueID] || (f[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e;else {
              if ((c = l[o]) && c[0] === B && c[1] === s) return p[2] = c[2];if (l[o] = p, p[2] = t(e, n, u)) return !0;
            }
          }return !1;
        };
      }function v(t) {
        return t.length > 1 ? function (e, n, r) {
          for (var i = t.length; i--;) {
            if (!t[i](e, n, r)) return !1;
          }return !0;
        } : t[0];
      }function g(t, n, r) {
        for (var i = 0, o = n.length; i < o; i++) {
          e(t, n[i], r);
        }return r;
      }function m(t, e, n, r, i) {
        for (var o, a = [], s = 0, u = t.length, c = null != e; s < u; s++) {
          (o = t[s]) && (n && !n(o, r, i) || (a.push(o), c && e.push(s)));
        }return a;
      }function y(t, e, n, i, o, a) {
        return i && !i[M] && (i = y(i)), o && !o[M] && (o = y(o, a)), r(function (r, a, s, u) {
          var c,
              l,
              f,
              p = [],
              d = [],
              h = a.length,
              v = r || g(e || "*", s.nodeType ? [s] : s, []),
              y = !t || !r && e ? v : m(v, p, t, s, u),
              b = n ? o || (r ? t : h || i) ? [] : a : y;if (n && n(y, b, s, u), i) for (c = m(b, d), i(c, [], s, u), l = c.length; l--;) {
            (f = c[l]) && (b[d[l]] = !(y[d[l]] = f));
          }if (r) {
            if (o || t) {
              if (o) {
                for (c = [], l = b.length; l--;) {
                  (f = b[l]) && c.push(y[l] = f);
                }o(null, b = [], c, u);
              }for (l = b.length; l--;) {
                (f = b[l]) && (c = o ? tt(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f));
              }
            }
          } else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Y.apply(a, b);
        });
      }function b(t) {
        for (var e, n, r, i = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function (t) {
          return t === e;
        }, a, !0), c = h(function (t) {
          return tt(e, t) > -1;
        }, a, !0), l = [function (t, n, r) {
          var i = !o && (r || n !== S) || ((e = n).nodeType ? u(t, n, r) : c(t, n, r));return e = null, i;
        }]; s < i; s++) {
          if (n = C.relative[t[s].type]) l = [h(v(l), n)];else {
            if (n = C.filter[t[s].type].apply(null, t[s].matches), n[M]) {
              for (r = ++s; r < i && !C.relative[t[r].type]; r++) {}return y(s > 1 && v(l), s > 1 && d(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(st, "$1"), n, s < r && b(t.slice(s, r)), r < i && b(t = t.slice(r)), r < i && d(t));
            }l.push(n);
          }
        }return v(l);
      }function _(t, n) {
        var i = n.length > 0,
            o = t.length > 0,
            a = function a(r, _a2, s, u, c) {
          var l,
              f,
              p,
              d = 0,
              h = "0",
              v = r && [],
              g = [],
              y = S,
              b = r || o && C.find.TAG("*", c),
              _ = B += null == y ? 1 : Math.random() || .1,
              w = b.length;for (c && (S = _a2 === D || _a2 || c); h !== w && null != (l = b[h]); h++) {
            if (o && l) {
              for (f = 0, _a2 || l.ownerDocument === D || (N(l), s = !R); p = t[f++];) {
                if (p(l, _a2 || D, s)) {
                  u.push(l);break;
                }
              }c && (B = _);
            }i && ((l = !p && l) && d--, r && v.push(l));
          }if (d += h, i && h !== d) {
            for (f = 0; p = n[f++];) {
              p(v, g, _a2, s);
            }if (r) {
              if (d > 0) for (; h--;) {
                v[h] || g[h] || (g[h] = G.call(u));
              }g = m(g);
            }Y.apply(u, g), c && !r && g.length > 0 && d + n.length > 1 && e.uniqueSort(u);
          }return c && (B = _, S = y), v;
        };return i ? r(a) : a;
      }var w,
          x,
          C,
          T,
          $,
          k,
          A,
          E,
          S,
          O,
          j,
          N,
          D,
          I,
          R,
          L,
          P,
          F,
          q,
          M = "sizzle" + 1 * new Date(),
          H = t.document,
          B = 0,
          U = 0,
          W = n(),
          z = n(),
          V = n(),
          X = function X(t, e) {
        return t === e && (j = !0), 0;
      },
          K = {}.hasOwnProperty,
          J = [],
          G = J.pop,
          Z = J.push,
          Y = J.push,
          Q = J.slice,
          tt = function tt(t, e) {
        for (var n = 0, r = t.length; n < r; n++) {
          if (t[n] === e) return n;
        }return -1;
      },
          et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          nt = "[\\x20\\t\\r\\n\\f]",
          rt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
          ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
          at = new RegExp(nt + "+", "g"),
          st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
          ut = new RegExp("^" + nt + "*," + nt + "*"),
          ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
          lt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
          ft = new RegExp(ot),
          pt = new RegExp("^" + rt + "$"),
          dt = { ID: new RegExp("^#(" + rt + ")"), CLASS: new RegExp("^\\.(" + rt + ")"), TAG: new RegExp("^(" + rt + "|[*])"), ATTR: new RegExp("^" + it), PSEUDO: new RegExp("^" + ot), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"), bool: new RegExp("^(?:" + et + ")$", "i"), needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i") },
          ht = /^(?:input|select|textarea|button)$/i,
          vt = /^h\d$/i,
          gt = /^[^{]+\{\s*\[native \w/,
          mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          yt = /[+~]/,
          bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
          _t = function _t(t, e, n) {
        var r = "0x" + e - 65536;return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          xt = function xt(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
      },
          Ct = function Ct() {
        N();
      },
          Tt = h(function (t) {
        return t.disabled === !0 && ("form" in t || "label" in t);
      }, { dir: "parentNode", next: "legend" });try {
        Y.apply(J = Q.call(H.childNodes), H.childNodes), J[H.childNodes.length].nodeType;
      } catch (t) {
        Y = { apply: J.length ? function (t, e) {
            Z.apply(t, Q.call(e));
          } : function (t, e) {
            for (var n = t.length, r = 0; t[n++] = e[r++];) {}t.length = n - 1;
          } };
      }x = e.support = {}, $ = e.isXML = function (t) {
        var e = t && (t.ownerDocument || t).documentElement;return !!e && "HTML" !== e.nodeName;
      }, N = e.setDocument = function (t) {
        var e,
            n,
            r = t ? t.ownerDocument || t : H;return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, I = D.documentElement, R = !$(D), H !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), x.attributes = i(function (t) {
          return t.className = "i", !t.getAttribute("className");
        }), x.getElementsByTagName = i(function (t) {
          return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length;
        }), x.getElementsByClassName = gt.test(D.getElementsByClassName), x.getById = i(function (t) {
          return I.appendChild(t).id = M, !D.getElementsByName || !D.getElementsByName(M).length;
        }), x.getById ? (C.filter.ID = function (t) {
          var e = t.replace(bt, _t);return function (t) {
            return t.getAttribute("id") === e;
          };
        }, C.find.ID = function (t, e) {
          if ("undefined" != typeof e.getElementById && R) {
            var n = e.getElementById(t);return n ? [n] : [];
          }
        }) : (C.filter.ID = function (t) {
          var e = t.replace(bt, _t);return function (t) {
            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");return n && n.value === e;
          };
        }, C.find.ID = function (t, e) {
          if ("undefined" != typeof e.getElementById && R) {
            var n,
                r,
                i,
                o = e.getElementById(t);if (o) {
              if (n = o.getAttributeNode("id"), n && n.value === t) return [o];for (i = e.getElementsByName(t), r = 0; o = i[r++];) {
                if (n = o.getAttributeNode("id"), n && n.value === t) return [o];
              }
            }return [];
          }
        }), C.find.TAG = x.getElementsByTagName ? function (t, e) {
          return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0;
        } : function (t, e) {
          var n,
              r = [],
              i = 0,
              o = e.getElementsByTagName(t);if ("*" === t) {
            for (; n = o[i++];) {
              1 === n.nodeType && r.push(n);
            }return r;
          }return o;
        }, C.find.CLASS = x.getElementsByClassName && function (t, e) {
          if ("undefined" != typeof e.getElementsByClassName && R) return e.getElementsByClassName(t);
        }, P = [], L = [], (x.qsa = gt.test(D.querySelectorAll)) && (i(function (t) {
          I.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + M + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || L.push(".#.+[+~]");
        }), i(function (t) {
          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e = D.createElement("input");e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), I.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:");
        })), (x.matchesSelector = gt.test(F = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && i(function (t) {
          x.disconnectedMatch = F.call(t, "*"), F.call(t, "[s!='']:x"), P.push("!=", ot);
        }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), e = gt.test(I.compareDocumentPosition), q = e || gt.test(I.contains) ? function (t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t,
              r = e && e.parentNode;return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)));
        } : function (t, e) {
          if (e) for (; e = e.parentNode;) {
            if (e === t) return !0;
          }return !1;
        }, X = e ? function (t, e) {
          if (t === e) return j = !0, 0;var n = !t.compareDocumentPosition - !e.compareDocumentPosition;return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === H && q(H, t) ? -1 : e === D || e.ownerDocument === H && q(H, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & n ? -1 : 1);
        } : function (t, e) {
          if (t === e) return j = !0, 0;var n,
              r = 0,
              i = t.parentNode,
              o = e.parentNode,
              s = [t],
              u = [e];if (!i || !o) return t === D ? -1 : e === D ? 1 : i ? -1 : o ? 1 : O ? tt(O, t) - tt(O, e) : 0;if (i === o) return a(t, e);for (n = t; n = n.parentNode;) {
            s.unshift(n);
          }for (n = e; n = n.parentNode;) {
            u.unshift(n);
          }for (; s[r] === u[r];) {
            r++;
          }return r ? a(s[r], u[r]) : s[r] === H ? -1 : u[r] === H ? 1 : 0;
        }, D) : D;
      }, e.matches = function (t, n) {
        return e(t, null, null, n);
      }, e.matchesSelector = function (t, n) {
        if ((t.ownerDocument || t) !== D && N(t), n = n.replace(lt, "='$1']"), x.matchesSelector && R && !V[n + " "] && (!P || !P.test(n)) && (!L || !L.test(n))) try {
          var r = F.call(t, n);if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r;
        } catch (t) {}return e(n, D, null, [t]).length > 0;
      }, e.contains = function (t, e) {
        return (t.ownerDocument || t) !== D && N(t), q(t, e);
      }, e.attr = function (t, e) {
        (t.ownerDocument || t) !== D && N(t);var n = C.attrHandle[e.toLowerCase()],
            r = n && K.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;return void 0 !== r ? r : x.attributes || !R ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
      }, e.escape = function (t) {
        return (t + "").replace(wt, xt);
      }, e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }, e.uniqueSort = function (t) {
        var e,
            n = [],
            r = 0,
            i = 0;if (j = !x.detectDuplicates, O = !x.sortStable && t.slice(0), t.sort(X), j) {
          for (; e = t[i++];) {
            e === t[i] && (r = n.push(i));
          }for (; r--;) {
            t.splice(n[r], 1);
          }
        }return O = null, t;
      }, T = e.getText = function (t) {
        var e,
            n = "",
            r = 0,
            i = t.nodeType;if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof t.textContent) return t.textContent;for (t = t.firstChild; t; t = t.nextSibling) {
              n += T(t);
            }
          } else if (3 === i || 4 === i) return t.nodeValue;
        } else for (; e = t[r++];) {
          n += T(e);
        }return n;
      }, C = e.selectors = { cacheLength: 50, createPseudo: r, match: dt, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(t) {
            return t[1] = t[1].replace(bt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
          }, CHILD: function CHILD(t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t;
          }, PSEUDO: function PSEUDO(t) {
            var e,
                n = !t[6] && t[2];return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
          } }, filter: { TAG: function TAG(t) {
            var e = t.replace(bt, _t).toLowerCase();return "*" === t ? function () {
              return !0;
            } : function (t) {
              return t.nodeName && t.nodeName.toLowerCase() === e;
            };
          }, CLASS: function CLASS(t) {
            var e = W[t + " "];return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function (t) {
              return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "");
            });
          }, ATTR: function ATTR(t, n, r) {
            return function (i) {
              var o = e.attr(i, t);return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
            };
          }, CHILD: function CHILD(t, e, n, r, i) {
            var o = "nth" !== t.slice(0, 3),
                a = "last" !== t.slice(-4),
                s = "of-type" === e;return 1 === r && 0 === i ? function (t) {
              return !!t.parentNode;
            } : function (e, n, u) {
              var c,
                  l,
                  f,
                  p,
                  d,
                  h,
                  v = o !== a ? "nextSibling" : "previousSibling",
                  g = e.parentNode,
                  m = s && e.nodeName.toLowerCase(),
                  y = !u && !s,
                  b = !1;if (g) {
                if (o) {
                  for (; v;) {
                    for (p = e; p = p[v];) {
                      if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                    }h = v = "only" === t && !h && "nextSibling";
                  }return !0;
                }if (h = [a ? g.firstChild : g.lastChild], a && y) {
                  for (p = g, f = p[M] || (p[M] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[t] || [], d = c[0] === B && c[1], b = d && c[2], p = d && g.childNodes[d]; p = ++d && p && p[v] || (b = d = 0) || h.pop();) {
                    if (1 === p.nodeType && ++b && p === e) {
                      l[t] = [B, d, b];break;
                    }
                  }
                } else if (y && (p = e, f = p[M] || (p[M] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[t] || [], d = c[0] === B && c[1], b = d), b === !1) for (; (p = ++d && p && p[v] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && (f = p[M] || (p[M] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), l[t] = [B, b]), p !== e));) {}return b -= i, b === r || b % r === 0 && b / r >= 0;
              }
            };
          }, PSEUDO: function PSEUDO(t, n) {
            var i,
                o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);return o[M] ? o(n) : o.length > 1 ? (i = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
              for (var r, i = o(t, n), a = i.length; a--;) {
                r = tt(t, i[a]), t[r] = !(e[r] = i[a]);
              }
            }) : function (t) {
              return o(t, 0, i);
            }) : o;
          } }, pseudos: { not: r(function (t) {
            var e = [],
                n = [],
                i = A(t.replace(st, "$1"));return i[M] ? r(function (t, e, n, r) {
              for (var o, a = i(t, null, r, []), s = t.length; s--;) {
                (o = a[s]) && (t[s] = !(e[s] = o));
              }
            }) : function (t, r, o) {
              return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop();
            };
          }), has: r(function (t) {
            return function (n) {
              return e(t, n).length > 0;
            };
          }), contains: r(function (t) {
            return t = t.replace(bt, _t), function (e) {
              return (e.textContent || e.innerText || T(e)).indexOf(t) > -1;
            };
          }), lang: r(function (t) {
            return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, _t).toLowerCase(), function (e) {
              var n;do {
                if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
              } while ((e = e.parentNode) && 1 === e.nodeType);return !1;
            };
          }), target: function target(e) {
            var n = t.location && t.location.hash;return n && n.slice(1) === e.id;
          }, root: function root(t) {
            return t === I;
          }, focus: function focus(t) {
            return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
          }, enabled: c(!1), disabled: c(!0), checked: function checked(t) {
            var e = t.nodeName.toLowerCase();return "input" === e && !!t.checked || "option" === e && !!t.selected;
          }, selected: function selected(t) {
            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
          }, empty: function empty(t) {
            for (t = t.firstChild; t; t = t.nextSibling) {
              if (t.nodeType < 6) return !1;
            }return !0;
          }, parent: function parent(t) {
            return !C.pseudos.empty(t);
          }, header: function header(t) {
            return vt.test(t.nodeName);
          }, input: function input(t) {
            return ht.test(t.nodeName);
          }, button: function button(t) {
            var e = t.nodeName.toLowerCase();return "input" === e && "button" === t.type || "button" === e;
          }, text: function text(t) {
            var e;return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
          }, first: l(function () {
            return [0];
          }), last: l(function (t, e) {
            return [e - 1];
          }), eq: l(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }), even: l(function (t, e) {
            for (var n = 0; n < e; n += 2) {
              t.push(n);
            }return t;
          }), odd: l(function (t, e) {
            for (var n = 1; n < e; n += 2) {
              t.push(n);
            }return t;
          }), lt: l(function (t, e, n) {
            for (var r = n < 0 ? n + e : n; --r >= 0;) {
              t.push(r);
            }return t;
          }), gt: l(function (t, e, n) {
            for (var r = n < 0 ? n + e : n; ++r < e;) {
              t.push(r);
            }return t;
          }) } }, C.pseudos.nth = C.pseudos.eq;for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
        C.pseudos[w] = s(w);
      }for (w in { submit: !0, reset: !0 }) {
        C.pseudos[w] = u(w);
      }return p.prototype = C.filters = C.pseudos, C.setFilters = new p(), k = e.tokenize = function (t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = z[t + " "];if (l) return n ? 0 : l.slice(0);for (s = t, u = [], c = C.preFilter; s;) {
          r && !(i = ut.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(st, " ") }), s = s.slice(r.length));for (a in C.filter) {
            !(i = dt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
          }if (!r) break;
        }return n ? s.length : s ? e.error(t) : z(t, u).slice(0);
      }, A = e.compile = function (t, e) {
        var n,
            r = [],
            i = [],
            o = V[t + " "];if (!o) {
          for (e || (e = k(t)), n = e.length; n--;) {
            o = b(e[n]), o[M] ? r.push(o) : i.push(o);
          }o = V(t, _(i, r)), o.selector = t;
        }return o;
      }, E = e.select = function (t, e, n, r) {
        var i,
            o,
            a,
            s,
            u,
            c = "function" == typeof t && t,
            l = !r && k(t = c.selector || t);if (n = n || [], 1 === l.length) {
          if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === e.nodeType && R && C.relative[o[1].type]) {
            if (e = (C.find.ID(a.matches[0].replace(bt, _t), e) || [])[0], !e) return n;c && (e = e.parentNode), t = t.slice(o.shift().value.length);
          }for (i = dt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);) {
            if ((u = C.find[s]) && (r = u(a.matches[0].replace(bt, _t), yt.test(o[0].type) && f(e.parentNode) || e))) {
              if (o.splice(i, 1), t = r.length && d(o), !t) return Y.apply(n, r), n;break;
            }
          }
        }return (c || A(t, l))(r, e, !R, n, !e || yt.test(t) && f(e.parentNode) || e), n;
      }, x.sortStable = M.split("").sort(X).join("") === M, x.detectDuplicates = !!j, N(), x.sortDetached = i(function (t) {
        return 1 & t.compareDocumentPosition(D.createElement("fieldset"));
      }), i(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
      }) || o("type|href|height|width", function (t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
      }), x.attributes && i(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
      }) || o("value", function (t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
      }), i(function (t) {
        return null == t.getAttribute("disabled");
      }) || o(et, function (t, e, n) {
        var r;if (!n) return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
      }), e;
    }(n);yt.find = Ct, yt.expr = Ct.selectors, yt.expr[":"] = yt.expr.pseudos, yt.uniqueSort = yt.unique = Ct.uniqueSort, yt.text = Ct.getText, yt.isXMLDoc = Ct.isXML, yt.contains = Ct.contains, yt.escapeSelector = Ct.escape;var Tt = function Tt(t, e, n) {
      for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
        if (1 === t.nodeType) {
          if (i && yt(t).is(n)) break;r.push(t);
        }
      }return r;
    },
        $t = function $t(t, e) {
      for (var n = []; t; t = t.nextSibling) {
        1 === t.nodeType && t !== e && n.push(t);
      }return n;
    },
        kt = yt.expr.match.needsContext,
        At = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Et = /^.[^:#\[\.,]*$/;yt.filter = function (t, e, n) {
      var r = e[0];return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? yt.find.matchesSelector(r, t) ? [r] : [] : yt.find.matches(t, yt.grep(e, function (t) {
        return 1 === t.nodeType;
      }));
    }, yt.fn.extend({ find: function find(t) {
        var e,
            n,
            r = this.length,
            i = this;if ("string" != typeof t) return this.pushStack(yt(t).filter(function () {
          for (e = 0; e < r; e++) {
            if (yt.contains(i[e], this)) return !0;
          }
        }));for (n = this.pushStack([]), e = 0; e < r; e++) {
          yt.find(t, i[e], n);
        }return r > 1 ? yt.uniqueSort(n) : n;
      }, filter: function filter(t) {
        return this.pushStack(u(this, t || [], !1));
      }, not: function not(t) {
        return this.pushStack(u(this, t || [], !0));
      }, is: function is(t) {
        return !!u(this, "string" == typeof t && kt.test(t) ? yt(t) : t || [], !1).length;
      } });var St,
        Ot = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        jt = yt.fn.init = function (t, e, n) {
      var r, i;if (!t) return this;if (n = n || St, "string" == typeof t) {
        if (r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ot.exec(t), !r || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);if (r[1]) {
          if (e = e instanceof yt ? e[0] : e, yt.merge(this, yt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : ot, !0)), At.test(r[1]) && yt.isPlainObject(e)) for (r in e) {
            yt.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
          }return this;
        }return i = ot.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
      }return t.nodeType ? (this[0] = t, this.length = 1, this) : yt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(yt) : yt.makeArray(t, this);
    };jt.prototype = yt.fn, St = yt(ot);var Nt = /^(?:parents|prev(?:Until|All))/,
        Dt = { children: !0, contents: !0, next: !0, prev: !0 };yt.fn.extend({ has: function has(t) {
        var e = yt(t, this),
            n = e.length;return this.filter(function () {
          for (var t = 0; t < n; t++) {
            if (yt.contains(this, e[t])) return !0;
          }
        });
      }, closest: function closest(t, e) {
        var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof t && yt(t);if (!kt.test(t)) for (; r < i; r++) {
          for (n = this[r]; n && n !== e; n = n.parentNode) {
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && yt.find.matchesSelector(n, t))) {
              o.push(n);break;
            }
          }
        }return this.pushStack(o.length > 1 ? yt.uniqueSort(o) : o);
      }, index: function index(t) {
        return t ? "string" == typeof t ? lt.call(yt(t), this[0]) : lt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function add(t, e) {
        return this.pushStack(yt.uniqueSort(yt.merge(this.get(), yt(t, e))));
      }, addBack: function addBack(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      } }), yt.each({ parent: function parent(t) {
        var e = t.parentNode;return e && 11 !== e.nodeType ? e : null;
      }, parents: function parents(t) {
        return Tt(t, "parentNode");
      }, parentsUntil: function parentsUntil(t, e, n) {
        return Tt(t, "parentNode", n);
      }, next: function next(t) {
        return c(t, "nextSibling");
      }, prev: function prev(t) {
        return c(t, "previousSibling");
      }, nextAll: function nextAll(t) {
        return Tt(t, "nextSibling");
      }, prevAll: function prevAll(t) {
        return Tt(t, "previousSibling");
      }, nextUntil: function nextUntil(t, e, n) {
        return Tt(t, "nextSibling", n);
      }, prevUntil: function prevUntil(t, e, n) {
        return Tt(t, "previousSibling", n);
      }, siblings: function siblings(t) {
        return $t((t.parentNode || {}).firstChild, t);
      }, children: function children(t) {
        return $t(t.firstChild);
      }, contents: function contents(t) {
        return t.contentDocument || yt.merge([], t.childNodes);
      } }, function (t, e) {
      yt.fn[t] = function (n, r) {
        var i = yt.map(this, e, n);return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = yt.filter(r, i)), this.length > 1 && (Dt[t] || yt.uniqueSort(i), Nt.test(t) && i.reverse()), this.pushStack(i);
      };
    });var It = /[^\x20\t\r\n\f]+/g;yt.Callbacks = function (t) {
      t = "string" == typeof t ? l(t) : yt.extend({}, t);var e,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function u() {
        for (i = t.once, r = e = !0; a.length; s = -1) {
          for (n = a.shift(); ++s < o.length;) {
            o[s].apply(n[0], n[1]) === !1 && t.stopOnFalse && (s = o.length, n = !1);
          }
        }t.memory || (n = !1), e = !1, i && (o = n ? [] : "");
      },
          c = { add: function add() {
          return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
            yt.each(n, function (n, r) {
              yt.isFunction(r) ? t.unique && c.has(r) || o.push(r) : r && r.length && "string" !== yt.type(r) && e(r);
            });
          }(arguments), n && !e && u()), this;
        }, remove: function remove() {
          return yt.each(arguments, function (t, e) {
            for (var n; (n = yt.inArray(e, o, n)) > -1;) {
              o.splice(n, 1), n <= s && s--;
            }
          }), this;
        }, has: function has(t) {
          return t ? yt.inArray(t, o) > -1 : o.length > 0;
        }, empty: function empty() {
          return o && (o = []), this;
        }, disable: function disable() {
          return i = a = [], o = n = "", this;
        }, disabled: function disabled() {
          return !o;
        }, lock: function lock() {
          return i = a = [], n || e || (o = n = ""), this;
        }, locked: function locked() {
          return !!i;
        }, fireWith: function fireWith(t, n) {
          return i || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this;
        }, fire: function fire() {
          return c.fireWith(this, arguments), this;
        }, fired: function fired() {
          return !!r;
        } };return c;
    }, yt.extend({ Deferred: function Deferred(t) {
        var e = [["notify", "progress", yt.Callbacks("memory"), yt.Callbacks("memory"), 2], ["resolve", "done", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            i = { state: function state() {
            return r;
          }, always: function always() {
            return o.done(arguments).fail(arguments), this;
          }, catch: function _catch(t) {
            return i.then(null, t);
          }, pipe: function pipe() {
            var t = arguments;return yt.Deferred(function (n) {
              yt.each(e, function (e, r) {
                var i = yt.isFunction(t[r[4]]) && t[r[4]];o[r[1]](function () {
                  var t = i && i.apply(this, arguments);t && yt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [t] : arguments);
                });
              }), t = null;
            }).promise();
          }, then: function then(t, r, i) {
            function o(t, e, r, i) {
              return function () {
                var s = this,
                    u = arguments,
                    c = function c() {
                  var n, c;if (!(t < a)) {
                    if (n = r.apply(s, u), n === e.promise()) throw new TypeError("Thenable self-resolution");c = n && ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n) && n.then, yt.isFunction(c) ? i ? c.call(n, o(a, e, f, i), o(a, e, p, i)) : (a++, c.call(n, o(a, e, f, i), o(a, e, p, i), o(a, e, f, e.notifyWith))) : (r !== f && (s = void 0, u = [n]), (i || e.resolveWith)(s, u));
                  }
                },
                    l = i ? c : function () {
                  try {
                    c();
                  } catch (n) {
                    yt.Deferred.exceptionHook && yt.Deferred.exceptionHook(n, l.stackTrace), t + 1 >= a && (r !== p && (s = void 0, u = [n]), e.rejectWith(s, u));
                  }
                };t ? l() : (yt.Deferred.getStackHook && (l.stackTrace = yt.Deferred.getStackHook()), n.setTimeout(l));
              };
            }var a = 0;return yt.Deferred(function (n) {
              e[0][3].add(o(0, n, yt.isFunction(i) ? i : f, n.notifyWith)), e[1][3].add(o(0, n, yt.isFunction(t) ? t : f)), e[2][3].add(o(0, n, yt.isFunction(r) ? r : p));
            }).promise();
          }, promise: function promise(t) {
            return null != t ? yt.extend(t, i) : i;
          } },
            o = {};return yt.each(e, function (t, n) {
          var a = n[2],
              s = n[5];i[n[1]] = a.add, s && a.add(function () {
            r = s;
          }, e[3 - t][2].disable, e[0][2].lock), a.add(n[3].fire), o[n[0]] = function () {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[n[0] + "With"] = a.fireWith;
        }), i.promise(o), t && t.call(o, o), o;
      }, when: function when(t) {
        var e = arguments.length,
            n = e,
            r = Array(n),
            i = st.call(arguments),
            o = yt.Deferred(),
            a = function a(t) {
          return function (n) {
            r[t] = this, i[t] = arguments.length > 1 ? st.call(arguments) : n, --e || o.resolveWith(r, i);
          };
        };if (e <= 1 && (d(t, o.done(a(n)).resolve, o.reject), "pending" === o.state() || yt.isFunction(i[n] && i[n].then))) return o.then();for (; n--;) {
          d(i[n], a(n), o.reject);
        }return o.promise();
      } });var Rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;yt.Deferred.exceptionHook = function (t, e) {
      n.console && n.console.warn && t && Rt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
    }, yt.readyException = function (t) {
      n.setTimeout(function () {
        throw t;
      });
    };var Lt = yt.Deferred();yt.fn.ready = function (t) {
      return Lt.then(t).catch(function (t) {
        yt.readyException(t);
      }), this;
    }, yt.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(t) {
        t ? yt.readyWait++ : yt.ready(!0);
      }, ready: function ready(t) {
        (t === !0 ? --yt.readyWait : yt.isReady) || (yt.isReady = !0, t !== !0 && --yt.readyWait > 0 || Lt.resolveWith(ot, [yt]));
      } }), yt.ready.then = Lt.then, "complete" === ot.readyState || "loading" !== ot.readyState && !ot.documentElement.doScroll ? n.setTimeout(yt.ready) : (ot.addEventListener("DOMContentLoaded", h), n.addEventListener("load", h));var Pt = function Pt(t, e, n, r, i, o, a) {
      var s = 0,
          u = t.length,
          c = null == n;if ("object" === yt.type(n)) {
        i = !0;for (s in n) {
          Pt(t, e, s, n[s], !0, o, a);
        }
      } else if (void 0 !== r && (i = !0, yt.isFunction(r) || (a = !0), c && (a ? (e.call(t, r), e = null) : (c = e, e = function e(t, _e2, n) {
        return c.call(yt(t), n);
      })), e)) for (; s < u; s++) {
        e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
      }return i ? t : c ? e.call(t) : u ? e(t[0], n) : o;
    },
        Ft = function Ft(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };v.uid = 1, v.prototype = { cache: function cache(t) {
        var e = t[this.expando];return e || (e = {}, Ft(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
      }, set: function set(t, e, n) {
        var r,
            i = this.cache(t);if ("string" == typeof e) i[yt.camelCase(e)] = n;else for (r in e) {
          i[yt.camelCase(r)] = e[r];
        }return i;
      }, get: function get(t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][yt.camelCase(e)];
      }, access: function access(t, e, n) {
        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
      }, remove: function remove(t, e) {
        var n,
            r = t[this.expando];if (void 0 !== r) {
          if (void 0 !== e) {
            yt.isArray(e) ? e = e.map(yt.camelCase) : (e = yt.camelCase(e), e = e in r ? [e] : e.match(It) || []), n = e.length;for (; n--;) {
              delete r[e[n]];
            }
          }(void 0 === e || yt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
        }
      }, hasData: function hasData(t) {
        var e = t[this.expando];return void 0 !== e && !yt.isEmptyObject(e);
      } };var qt = new v(),
        Mt = new v(),
        Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Bt = /[A-Z]/g;yt.extend({ hasData: function hasData(t) {
        return Mt.hasData(t) || qt.hasData(t);
      }, data: function data(t, e, n) {
        return Mt.access(t, e, n);
      }, removeData: function removeData(t, e) {
        Mt.remove(t, e);
      }, _data: function _data(t, e, n) {
        return qt.access(t, e, n);
      }, _removeData: function _removeData(t, e) {
        qt.remove(t, e);
      } }), yt.fn.extend({ data: function data(t, e) {
        var n,
            r,
            i,
            o = this[0],
            a = o && o.attributes;if (void 0 === t) {
          if (this.length && (i = Mt.get(o), 1 === o.nodeType && !qt.get(o, "hasDataAttrs"))) {
            for (n = a.length; n--;) {
              a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = yt.camelCase(r.slice(5)), m(o, r, i[r])));
            }qt.set(o, "hasDataAttrs", !0);
          }return i;
        }return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? this.each(function () {
          Mt.set(this, t);
        }) : Pt(this, function (e) {
          var n;if (o && void 0 === e) {
            if (n = Mt.get(o, t), void 0 !== n) return n;if (n = m(o, t), void 0 !== n) return n;
          } else this.each(function () {
            Mt.set(this, t, e);
          });
        }, null, e, arguments.length > 1, null, !0);
      }, removeData: function removeData(t) {
        return this.each(function () {
          Mt.remove(this, t);
        });
      } }), yt.extend({ queue: function queue(t, e, n) {
        var r;if (t) return e = (e || "fx") + "queue", r = qt.get(t, e), n && (!r || yt.isArray(n) ? r = qt.access(t, e, yt.makeArray(n)) : r.push(n)), r || [];
      }, dequeue: function dequeue(t, e) {
        e = e || "fx";var n = yt.queue(t, e),
            r = n.length,
            i = n.shift(),
            o = yt._queueHooks(t, e),
            a = function a() {
          yt.dequeue(t, e);
        };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire();
      }, _queueHooks: function _queueHooks(t, e) {
        var n = e + "queueHooks";return qt.get(t, n) || qt.access(t, n, { empty: yt.Callbacks("once memory").add(function () {
            qt.remove(t, [e + "queue", n]);
          }) });
      } }), yt.fn.extend({ queue: function queue(t, e) {
        var n = 2;return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? yt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
          var n = yt.queue(this, t, e);yt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && yt.dequeue(this, t);
        });
      }, dequeue: function dequeue(t) {
        return this.each(function () {
          yt.dequeue(this, t);
        });
      }, clearQueue: function clearQueue(t) {
        return this.queue(t || "fx", []);
      }, promise: function promise(t, e) {
        var n,
            r = 1,
            i = yt.Deferred(),
            o = this,
            a = this.length,
            s = function s() {
          --r || i.resolveWith(o, [o]);
        };for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) {
          n = qt.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
        }return s(), i.promise(e);
      } });var Ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Wt = new RegExp("^(?:([+-])=|)(" + Ut + ")([a-z%]*)$", "i"),
        zt = ["Top", "Right", "Bottom", "Left"],
        Vt = function Vt(t, e) {
      return t = e || t, "none" === t.style.display || "" === t.style.display && yt.contains(t.ownerDocument, t) && "none" === yt.css(t, "display");
    },
        Xt = function Xt(t, e, n, r) {
      var i,
          o,
          a = {};for (o in e) {
        a[o] = t.style[o], t.style[o] = e[o];
      }i = n.apply(t, r || []);for (o in e) {
        t.style[o] = a[o];
      }return i;
    },
        Kt = {};yt.fn.extend({ show: function show() {
        return _(this, !0);
      }, hide: function hide() {
        return _(this);
      }, toggle: function toggle(t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          Vt(this) ? yt(this).show() : yt(this).hide();
        });
      } });var Jt = /^(?:checkbox|radio)$/i,
        Gt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Zt = /^$|\/(?:java|ecma)script/i,
        Yt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
    var Qt = /<|&#?\w+;/;!function () {
      var t = ot.createDocumentFragment(),
          e = t.appendChild(ot.createElement("div")),
          n = ot.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), gt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", gt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();var te = ot.documentElement,
        ee = /^key/,
        ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        re = /^([^.]*)(?:\.(.+)|)/;yt.event = { global: {}, add: function add(t, e, n, r, i) {
        var o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            d,
            h,
            v,
            g = qt.get(t);if (g) for (n.handler && (o = n, n = o.handler, i = o.selector), i && yt.find.matchesSelector(te, i), n.guid || (n.guid = yt.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
          return "undefined" != typeof yt && yt.event.triggered !== e.type ? yt.event.dispatch.apply(t, arguments) : void 0;
        }), e = (e || "").match(It) || [""], c = e.length; c--;) {
          s = re.exec(e[c]) || [], d = v = s[1], h = (s[2] || "").split(".").sort(), d && (f = yt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = yt.event.special[d] || {}, l = yt.extend({ type: d, origType: v, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && yt.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, h, a) !== !1 || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), yt.event.global[d] = !0);
        }
      }, remove: function remove(t, e, n, r, i) {
        var o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            d,
            h,
            v,
            g = qt.hasData(t) && qt.get(t);if (g && (u = g.events)) {
          for (e = (e || "").match(It) || [""], c = e.length; c--;) {
            if (s = re.exec(e[c]) || [], d = v = s[1], h = (s[2] || "").split(".").sort(), d) {
              for (f = yt.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
                l = p[o], !i && v !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(t, l));
              }a && !p.length && (f.teardown && f.teardown.call(t, h, g.handle) !== !1 || yt.removeEvent(t, d, g.handle), delete u[d]);
            } else for (d in u) {
              yt.event.remove(t, d + e[c], n, r, !0);
            }
          }yt.isEmptyObject(u) && qt.remove(t, "handle events");
        }
      }, dispatch: function dispatch(t) {
        var e,
            n,
            r,
            i,
            o,
            a,
            s = yt.event.fix(t),
            u = new Array(arguments.length),
            c = (qt.get(this, "events") || {})[s.type] || [],
            l = yt.event.special[s.type] || {};for (u[0] = s, e = 1; e < arguments.length; e++) {
          u[e] = arguments[e];
        }if (s.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, s) !== !1) {
          for (a = yt.event.handlers.call(this, s, c), e = 0; (i = a[e++]) && !s.isPropagationStopped();) {
            for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) {
              s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((yt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
            }
          }return l.postDispatch && l.postDispatch.call(this, s), s.result;
        }
      }, handlers: function handlers(t, e) {
        var n,
            r,
            i,
            o,
            a,
            s = [],
            u = e.delegateCount,
            c = t.target;if (u && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) {
          if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
            for (o = [], a = {}, n = 0; n < u; n++) {
              r = e[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? yt(i, this).index(c) > -1 : yt.find(i, this, null, [c]).length), a[i] && o.push(r);
            }o.length && s.push({ elem: c, handlers: o });
          }
        }return c = this, u < e.length && s.push({ elem: c, handlers: e.slice(u) }), s;
      }, addProp: function addProp(t, e) {
        Object.defineProperty(yt.Event.prototype, t, { enumerable: !0, configurable: !0, get: yt.isFunction(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[t];
          }, set: function set(e) {
            Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
          } });
      }, fix: function fix(t) {
        return t[yt.expando] ? t : new yt.Event(t);
      }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
            if (this !== k() && this.focus) return this.focus(), !1;
          }, delegateType: "focusin" }, blur: { trigger: function trigger() {
            if (this === k() && this.blur) return this.blur(), !1;
          }, delegateType: "focusout" }, click: { trigger: function trigger() {
            if ("checkbox" === this.type && this.click && yt.nodeName(this, "input")) return this.click(), !1;
          }, _default: function _default(t) {
            return yt.nodeName(t.target, "a");
          } }, beforeunload: { postDispatch: function postDispatch(t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
          } } } }, yt.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }, yt.Event = function (t, e) {
      return this instanceof yt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? T : $, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && yt.extend(this, e), this.timeStamp = t && t.timeStamp || yt.now(), void (this[yt.expando] = !0)) : new yt.Event(t, e);
    }, yt.Event.prototype = { constructor: yt.Event, isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, isSimulated: !1, preventDefault: function preventDefault() {
        var t = this.originalEvent;this.isDefaultPrevented = T, t && !this.isSimulated && t.preventDefault();
      }, stopPropagation: function stopPropagation() {
        var t = this.originalEvent;this.isPropagationStopped = T, t && !this.isSimulated && t.stopPropagation();
      }, stopImmediatePropagation: function stopImmediatePropagation() {
        var t = this.originalEvent;this.isImmediatePropagationStopped = T, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
      } }, yt.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(t) {
        var e = t.button;return null == t.which && ee.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ne.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
      } }, yt.event.addProp), yt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
      yt.event.special[t] = { delegateType: e, bindType: e, handle: function handle(t) {
          var n,
              r = this,
              i = t.relatedTarget,
              o = t.handleObj;return i && (i === r || yt.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n;
        } };
    }), yt.fn.extend({ on: function on(t, e, n, r) {
        return A(this, t, e, n, r);
      }, one: function one(t, e, n, r) {
        return A(this, t, e, n, r, 1);
      }, off: function off(t, e, n) {
        var r, i;if (t && t.preventDefault && t.handleObj) return r = t.handleObj, yt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
          for (i in t) {
            this.off(i, e, t[i]);
          }return this;
        }return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = $), this.each(function () {
          yt.event.remove(this, t, n, e);
        });
      } });var ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;yt.extend({ htmlPrefilter: function htmlPrefilter(t) {
        return t.replace(ie, "<$1></$2>");
      }, clone: function clone(t, e, n) {
        var r,
            i,
            o,
            a,
            s = t.cloneNode(!0),
            u = yt.contains(t.ownerDocument, t);if (!(gt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || yt.isXMLDoc(t))) for (a = w(s), o = w(t), r = 0, i = o.length; r < i; r++) {
          N(o[r], a[r]);
        }if (e) if (n) for (o = o || w(t), a = a || w(s), r = 0, i = o.length; r < i; r++) {
          j(o[r], a[r]);
        } else j(t, s);return a = w(s, "script"), a.length > 0 && x(a, !u && w(t, "script")), s;
      }, cleanData: function cleanData(t) {
        for (var e, n, r, i = yt.event.special, o = 0; void 0 !== (n = t[o]); o++) {
          if (Ft(n)) {
            if (e = n[qt.expando]) {
              if (e.events) for (r in e.events) {
                i[r] ? yt.event.remove(n, r) : yt.removeEvent(n, r, e.handle);
              }n[qt.expando] = void 0;
            }n[Mt.expando] && (n[Mt.expando] = void 0);
          }
        }
      } }), yt.fn.extend({ detach: function detach(t) {
        return I(this, t, !0);
      }, remove: function remove(t) {
        return I(this, t);
      }, text: function text(t) {
        return Pt(this, function (t) {
          return void 0 === t ? yt.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
          });
        }, null, t, arguments.length);
      }, append: function append() {
        return D(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = E(this, t);e.appendChild(t);
          }
        });
      }, prepend: function prepend() {
        return D(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = E(this, t);e.insertBefore(t, e.firstChild);
          }
        });
      }, before: function before() {
        return D(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      }, after: function after() {
        return D(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      }, empty: function empty() {
        for (var t, e = 0; null != (t = this[e]); e++) {
          1 === t.nodeType && (yt.cleanData(w(t, !1)), t.textContent = "");
        }return this;
      }, clone: function clone(t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function () {
          return yt.clone(this, t, e);
        });
      }, html: function html(t) {
        return Pt(this, function (t) {
          var e = this[0] || {},
              n = 0,
              r = this.length;if (void 0 === t && 1 === e.nodeType) return e.innerHTML;if ("string" == typeof t && !oe.test(t) && !Yt[(Gt.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = yt.htmlPrefilter(t);try {
              for (; n < r; n++) {
                e = this[n] || {}, 1 === e.nodeType && (yt.cleanData(w(e, !1)), e.innerHTML = t);
              }e = 0;
            } catch (t) {}
          }e && this.empty().append(t);
        }, null, t, arguments.length);
      }, replaceWith: function replaceWith() {
        var t = [];return D(this, arguments, function (e) {
          var n = this.parentNode;yt.inArray(this, t) < 0 && (yt.cleanData(w(this)), n && n.replaceChild(e, this));
        }, t);
      } }), yt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
      yt.fn[t] = function (t) {
        for (var n, r = [], i = yt(t), o = i.length - 1, a = 0; a <= o; a++) {
          n = a === o ? this : this.clone(!0), yt(i[a])[e](n), ct.apply(r, n.get());
        }return this.pushStack(r);
      };
    });var ce = /^margin/,
        le = new RegExp("^(" + Ut + ")(?!px)[a-z%]+$", "i"),
        fe = function fe(t) {
      var e = t.ownerDocument.defaultView;return e && e.opener || (e = n), e.getComputedStyle(t);
    };!function () {
      function t() {
        if (s) {
          s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", te.appendChild(a);var t = n.getComputedStyle(s);e = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, te.removeChild(a), s = null;
        }
      }var e,
          r,
          i,
          o,
          a = ot.createElement("div"),
          s = ot.createElement("div");s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", gt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), yt.extend(gt, { pixelPosition: function pixelPosition() {
          return t(), e;
        }, boxSizingReliable: function boxSizingReliable() {
          return t(), r;
        }, pixelMarginRight: function pixelMarginRight() {
          return t(), i;
        }, reliableMarginLeft: function reliableMarginLeft() {
          return t(), o;
        } }));
    }();var pe = /^(none|table(?!-c[ea]).+)/,
        de = { position: "absolute", visibility: "hidden", display: "block" },
        he = { letterSpacing: "0", fontWeight: "400" },
        ve = ["Webkit", "Moz", "ms"],
        ge = ot.createElement("div").style;yt.extend({ cssHooks: { opacity: { get: function get(t, e) {
            if (e) {
              var n = R(t, "opacity");return "" === n ? "1" : n;
            }
          } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(t, e, n, r) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var i,
              o,
              a,
              s = yt.camelCase(e),
              u = t.style;return e = yt.cssProps[s] || (yt.cssProps[s] = P(s) || s), a = yt.cssHooks[e] || yt.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n === "undefined" ? "undefined" : _typeof(n), "string" === o && (i = Wt.exec(n)) && i[1] && (n = y(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (yt.cssNumber[s] ? "" : "px")), gt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0);
        }
      }, css: function css(t, e, n, r) {
        var i,
            o,
            a,
            s = yt.camelCase(e);return e = yt.cssProps[s] || (yt.cssProps[s] = P(s) || s), a = yt.cssHooks[e] || yt.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = R(t, e, r)), "normal" === i && e in he && (i = he[e]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i;
      } }), yt.each(["height", "width"], function (t, e) {
      yt.cssHooks[e] = { get: function get(t, n, r) {
          if (n) return !pe.test(yt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? M(t, e, r) : Xt(t, de, function () {
            return M(t, e, r);
          });
        }, set: function set(t, n, r) {
          var i,
              o = r && fe(t),
              a = r && q(t, e, r, "border-box" === yt.css(t, "boxSizing", !1, o), o);return a && (i = Wt.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = yt.css(t, e)), F(t, n, a);
        } };
    }), yt.cssHooks.marginLeft = L(gt.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(R(t, "marginLeft")) || t.getBoundingClientRect().left - Xt(t, { marginLeft: 0 }, function () {
        return t.getBoundingClientRect().left;
      })) + "px";
    }), yt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      yt.cssHooks[t + e] = { expand: function expand(n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            i[t + zt[r] + e] = o[r] || o[r - 2] || o[0];
          }return i;
        } }, ce.test(t) || (yt.cssHooks[t + e].set = F);
    }), yt.fn.extend({ css: function css(t, e) {
        return Pt(this, function (t, e, n) {
          var r,
              i,
              o = {},
              a = 0;if (yt.isArray(e)) {
            for (r = fe(t), i = e.length; a < i; a++) {
              o[e[a]] = yt.css(t, e[a], !1, r);
            }return o;
          }return void 0 !== n ? yt.style(t, e, n) : yt.css(t, e);
        }, t, e, arguments.length > 1);
      } }), yt.Tween = H, H.prototype = { constructor: H, init: function init(t, e, n, r, i, o) {
        this.elem = t, this.prop = n, this.easing = i || yt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (yt.cssNumber[n] ? "" : "px");
      }, cur: function cur() {
        var t = H.propHooks[this.prop];return t && t.get ? t.get(this) : H.propHooks._default.get(this);
      }, run: function run(t) {
        var e,
            n = H.propHooks[this.prop];return this.options.duration ? this.pos = e = yt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
      } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function get(t) {
          var e;return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = yt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0);
        }, set: function set(t) {
          yt.fx.step[t.prop] ? yt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[yt.cssProps[t.prop]] && !yt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : yt.style(t.elem, t.prop, t.now + t.unit);
        } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function set(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      } }, yt.easing = { linear: function linear(t) {
        return t;
      }, swing: function swing(t) {
        return .5 - Math.cos(t * Math.PI) / 2;
      }, _default: "swing" }, yt.fx = H.prototype.init, yt.fx.step = {};var me,
        ye,
        be = /^(?:toggle|show|hide)$/,
        _e = /queueHooks$/;yt.Animation = yt.extend(K, { tweeners: { "*": [function (t, e) {
          var n = this.createTween(t, e);return y(n.elem, t, Wt.exec(e), n), n;
        }] }, tweener: function tweener(t, e) {
        yt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(It);for (var n, r = 0, i = t.length; r < i; r++) {
          n = t[r], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(e);
        }
      }, prefilters: [V], prefilter: function prefilter(t, e) {
        e ? K.prefilters.unshift(t) : K.prefilters.push(t);
      } }), yt.speed = function (t, e, n) {
      var r = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? yt.extend({}, t) : { complete: n || !n && e || yt.isFunction(t) && t, duration: t, easing: n && e || e && !yt.isFunction(e) && e };return yt.fx.off || ot.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in yt.fx.speeds ? r.duration = yt.fx.speeds[r.duration] : r.duration = yt.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        yt.isFunction(r.old) && r.old.call(this), r.queue && yt.dequeue(this, r.queue);
      }, r;
    }, yt.fn.extend({ fadeTo: function fadeTo(t, e, n, r) {
        return this.filter(Vt).css("opacity", 0).show().end().animate({ opacity: e }, t, n, r);
      }, animate: function animate(t, e, n, r) {
        var i = yt.isEmptyObject(t),
            o = yt.speed(e, n, r),
            a = function a() {
          var e = K(this, yt.extend({}, t), o);(i || qt.get(this, "finish")) && e.stop(!0);
        };return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
      }, stop: function stop(t, e, n) {
        var r = function r(t) {
          var e = t.stop;delete t.stop, e(n);
        };return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
          var e = !0,
              i = null != t && t + "queueHooks",
              o = yt.timers,
              a = qt.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
            a[i] && a[i].stop && _e.test(i) && r(a[i]);
          }for (i = o.length; i--;) {
            o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
          }!e && n || yt.dequeue(this, t);
        });
      }, finish: function finish(t) {
        return t !== !1 && (t = t || "fx"), this.each(function () {
          var e,
              n = qt.get(this),
              r = n[t + "queue"],
              i = n[t + "queueHooks"],
              o = yt.timers,
              a = r ? r.length : 0;for (n.finish = !0, yt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) {
            o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
          }for (e = 0; e < a; e++) {
            r[e] && r[e].finish && r[e].finish.call(this);
          }delete n.finish;
        });
      } }), yt.each(["toggle", "show", "hide"], function (t, e) {
      var n = yt.fn[e];yt.fn[e] = function (t, r, i) {
        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(W(e, !0), t, r, i);
      };
    }), yt.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
      yt.fn[t] = function (t, n, r) {
        return this.animate(e, t, n, r);
      };
    }), yt.timers = [], yt.fx.tick = function () {
      var t,
          e = 0,
          n = yt.timers;for (me = yt.now(); e < n.length; e++) {
        t = n[e], t() || n[e] !== t || n.splice(e--, 1);
      }n.length || yt.fx.stop(), me = void 0;
    }, yt.fx.timer = function (t) {
      yt.timers.push(t), t() ? yt.fx.start() : yt.timers.pop();
    }, yt.fx.interval = 13, yt.fx.start = function () {
      ye || (ye = n.requestAnimationFrame ? n.requestAnimationFrame(B) : n.setInterval(yt.fx.tick, yt.fx.interval));
    }, yt.fx.stop = function () {
      n.cancelAnimationFrame ? n.cancelAnimationFrame(ye) : n.clearInterval(ye), ye = null;
    }, yt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, yt.fn.delay = function (t, e) {
      return t = yt.fx ? yt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, r) {
        var i = n.setTimeout(e, t);r.stop = function () {
          n.clearTimeout(i);
        };
      });
    }, function () {
      var t = ot.createElement("input"),
          e = ot.createElement("select"),
          n = e.appendChild(ot.createElement("option"));t.type = "checkbox", gt.checkOn = "" !== t.value, gt.optSelected = n.selected, t = ot.createElement("input"), t.value = "t", t.type = "radio", gt.radioValue = "t" === t.value;
    }();var we,
        xe = yt.expr.attrHandle;yt.fn.extend({ attr: function attr(t, e) {
        return Pt(this, yt.attr, t, e, arguments.length > 1);
      }, removeAttr: function removeAttr(t) {
        return this.each(function () {
          yt.removeAttr(this, t);
        });
      } }), yt.extend({ attr: function attr(t, e, n) {
        var r,
            i,
            o = t.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? yt.prop(t, e, n) : (1 === o && yt.isXMLDoc(t) || (i = yt.attrHooks[e.toLowerCase()] || (yt.expr.match.bool.test(e) ? we : void 0)), void 0 !== n ? null === n ? void yt.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = yt.find.attr(t, e), null == r ? void 0 : r));
      }, attrHooks: { type: { set: function set(t, e) {
            if (!gt.radioValue && "radio" === e && yt.nodeName(t, "input")) {
              var n = t.value;return t.setAttribute("type", e), n && (t.value = n), e;
            }
          } } }, removeAttr: function removeAttr(t, e) {
        var n,
            r = 0,
            i = e && e.match(It);if (i && 1 === t.nodeType) for (; n = i[r++];) {
          t.removeAttribute(n);
        }
      } }), we = { set: function set(t, e, n) {
        return e === !1 ? yt.removeAttr(t, n) : t.setAttribute(n, n), n;
      } }, yt.each(yt.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = xe[e] || yt.find.attr;xe[e] = function (t, e, r) {
        var i,
            o,
            a = e.toLowerCase();return r || (o = xe[a], xe[a] = i, i = null != n(t, e, r) ? a : null, xe[a] = o), i;
      };
    });var Ce = /^(?:input|select|textarea|button)$/i,
        Te = /^(?:a|area)$/i;yt.fn.extend({ prop: function prop(t, e) {
        return Pt(this, yt.prop, t, e, arguments.length > 1);
      }, removeProp: function removeProp(t) {
        return this.each(function () {
          delete this[yt.propFix[t] || t];
        });
      } }), yt.extend({ prop: function prop(t, e, n) {
        var r,
            i,
            o = t.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && yt.isXMLDoc(t) || (e = yt.propFix[e] || e, i = yt.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e];
      }, propHooks: { tabIndex: { get: function get(t) {
            var e = yt.find.attr(t, "tabindex");return e ? parseInt(e, 10) : Ce.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1;
          } } }, propFix: { for: "htmlFor", class: "className" } }), gt.optSelected || (yt.propHooks.selected = { get: function get(t) {
        var e = t.parentNode;return e && e.parentNode && e.parentNode.selectedIndex, null;
      }, set: function set(t) {
        var e = t.parentNode;e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
      } }), yt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      yt.propFix[this.toLowerCase()] = this;
    }), yt.fn.extend({ addClass: function addClass(t) {
        var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;if (yt.isFunction(t)) return this.each(function (e) {
          yt(this).addClass(t.call(this, e, G(this)));
        });if ("string" == typeof t && t) for (e = t.match(It) || []; n = this[u++];) {
          if (i = G(n), r = 1 === n.nodeType && " " + J(i) + " ") {
            for (a = 0; o = e[a++];) {
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            }s = J(r), i !== s && n.setAttribute("class", s);
          }
        }return this;
      }, removeClass: function removeClass(t) {
        var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;if (yt.isFunction(t)) return this.each(function (e) {
          yt(this).removeClass(t.call(this, e, G(this)));
        });if (!arguments.length) return this.attr("class", "");if ("string" == typeof t && t) for (e = t.match(It) || []; n = this[u++];) {
          if (i = G(n), r = 1 === n.nodeType && " " + J(i) + " ") {
            for (a = 0; o = e[a++];) {
              for (; r.indexOf(" " + o + " ") > -1;) {
                r = r.replace(" " + o + " ", " ");
              }
            }s = J(r), i !== s && n.setAttribute("class", s);
          }
        }return this;
      }, toggleClass: function toggleClass(t, e) {
        var n = typeof t === "undefined" ? "undefined" : _typeof(t);return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : yt.isFunction(t) ? this.each(function (n) {
          yt(this).toggleClass(t.call(this, n, G(this), e), e);
        }) : this.each(function () {
          var e, r, i, o;if ("string" === n) for (r = 0, i = yt(this), o = t.match(It) || []; e = o[r++];) {
            i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
          } else void 0 !== t && "boolean" !== n || (e = G(this), e && qt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : qt.get(this, "__className__") || ""));
        });
      }, hasClass: function hasClass(t) {
        var e,
            n,
            r = 0;for (e = " " + t + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + J(G(n)) + " ").indexOf(e) > -1) return !0;
        }return !1;
      } });var $e = /\r/g;yt.fn.extend({ val: function val(t) {
        var e,
            n,
            r,
            i = this[0];{
          if (arguments.length) return r = yt.isFunction(t), this.each(function (n) {
            var i;1 === this.nodeType && (i = r ? t.call(this, n, yt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : yt.isArray(i) && (i = yt.map(i, function (t) {
              return null == t ? "" : t + "";
            })), e = yt.valHooks[this.type] || yt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i));
          });if (i) return e = yt.valHooks[i.type] || yt.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace($e, "") : null == n ? "" : n);
        }
      } }), yt.extend({ valHooks: { option: { get: function get(t) {
            var e = yt.find.attr(t, "value");return null != e ? e : J(yt.text(t));
          } }, select: { get: function get(t) {
            var e,
                n,
                r,
                i = t.options,
                o = t.selectedIndex,
                a = "select-one" === t.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
              if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !yt.nodeName(n.parentNode, "optgroup"))) {
                if (e = yt(n).val(), a) return e;s.push(e);
              }
            }return s;
          }, set: function set(t, e) {
            for (var n, r, i = t.options, o = yt.makeArray(e), a = i.length; a--;) {
              r = i[a], (r.selected = yt.inArray(yt.valHooks.option.get(r), o) > -1) && (n = !0);
            }return n || (t.selectedIndex = -1), o;
          } } } }), yt.each(["radio", "checkbox"], function () {
      yt.valHooks[this] = { set: function set(t, e) {
          if (yt.isArray(e)) return t.checked = yt.inArray(yt(t).val(), e) > -1;
        } }, gt.checkOn || (yt.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value;
      });
    });var ke = /^(?:focusinfocus|focusoutblur)$/;yt.extend(yt.event, { trigger: function trigger(t, e, r, i) {
        var o,
            a,
            s,
            u,
            c,
            l,
            f,
            p = [r || ot],
            d = dt.call(t, "type") ? t.type : t,
            h = dt.call(t, "namespace") ? t.namespace.split(".") : [];if (a = s = r = r || ot, 3 !== r.nodeType && 8 !== r.nodeType && !ke.test(d + yt.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[yt.expando] ? t : new yt.Event(d, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : yt.makeArray(e, [t]), f = yt.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, e) !== !1)) {
          if (!i && !f.noBubble && !yt.isWindow(r)) {
            for (u = f.delegateType || d, ke.test(u + d) || (a = a.parentNode); a; a = a.parentNode) {
              p.push(a), s = a;
            }s === (r.ownerDocument || ot) && p.push(s.defaultView || s.parentWindow || n);
          }for (o = 0; (a = p[o++]) && !t.isPropagationStopped();) {
            t.type = o > 1 ? u : f.bindType || d, l = (qt.get(a, "events") || {})[t.type] && qt.get(a, "handle"), l && l.apply(a, e), l = c && a[c], l && l.apply && Ft(a) && (t.result = l.apply(a, e), t.result === !1 && t.preventDefault());
          }return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), e) !== !1 || !Ft(r) || c && yt.isFunction(r[d]) && !yt.isWindow(r) && (s = r[c], s && (r[c] = null), yt.event.triggered = d, r[d](), yt.event.triggered = void 0, s && (r[c] = s)), t.result;
        }
      }, simulate: function simulate(t, e, n) {
        var r = yt.extend(new yt.Event(), n, { type: t, isSimulated: !0 });yt.event.trigger(r, null, e);
      } }), yt.fn.extend({ trigger: function trigger(t, e) {
        return this.each(function () {
          yt.event.trigger(t, e, this);
        });
      }, triggerHandler: function triggerHandler(t, e) {
        var n = this[0];if (n) return yt.event.trigger(t, e, n, !0);
      } }), yt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
      yt.fn[e] = function (t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
      };
    }), yt.fn.extend({ hover: function hover(t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      } }), gt.focusin = "onfocusin" in n, gt.focusin || yt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      var n = function n(t) {
        yt.event.simulate(e, t.target, yt.event.fix(t));
      };yt.event.special[e] = { setup: function setup() {
          var r = this.ownerDocument || this,
              i = qt.access(r, e);i || r.addEventListener(t, n, !0), qt.access(r, e, (i || 0) + 1);
        }, teardown: function teardown() {
          var r = this.ownerDocument || this,
              i = qt.access(r, e) - 1;i ? qt.access(r, e, i) : (r.removeEventListener(t, n, !0), qt.remove(r, e));
        } };
    });var Ae = n.location,
        Ee = yt.now(),
        Se = /\?/;yt.parseXML = function (t) {
      var e;if (!t || "string" != typeof t) return null;try {
        e = new n.DOMParser().parseFromString(t, "text/xml");
      } catch (t) {
        e = void 0;
      }return e && !e.getElementsByTagName("parsererror").length || yt.error("Invalid XML: " + t), e;
    };var Oe = /\[\]$/,
        je = /\r?\n/g,
        Ne = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;yt.param = function (t, e) {
      var n,
          r = [],
          i = function i(t, e) {
        var n = yt.isFunction(e) ? e() : e;r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
      };if (yt.isArray(t) || t.jquery && !yt.isPlainObject(t)) yt.each(t, function () {
        i(this.name, this.value);
      });else for (n in t) {
        Z(n, t[n], e, i);
      }return r.join("&");
    }, yt.fn.extend({ serialize: function serialize() {
        return yt.param(this.serializeArray());
      }, serializeArray: function serializeArray() {
        return this.map(function () {
          var t = yt.prop(this, "elements");return t ? yt.makeArray(t) : this;
        }).filter(function () {
          var t = this.type;return this.name && !yt(this).is(":disabled") && De.test(this.nodeName) && !Ne.test(t) && (this.checked || !Jt.test(t));
        }).map(function (t, e) {
          var n = yt(this).val();return null == n ? null : yt.isArray(n) ? yt.map(n, function (t) {
            return { name: e.name, value: t.replace(je, "\r\n") };
          }) : { name: e.name, value: n.replace(je, "\r\n") };
        }).get();
      } });var Ie = /%20/g,
        Re = /#.*$/,
        Le = /([?&])_=[^&]*/,
        Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qe = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        He = {},
        Be = {},
        Ue = "*/".concat("*"),
        We = ot.createElement("a");We.href = Ae.href, yt.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ae.href, type: "GET", isLocal: Fe.test(Ae.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ue, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": yt.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(t, e) {
        return e ? tt(tt(t, yt.ajaxSettings), e) : tt(yt.ajaxSettings, t);
      }, ajaxPrefilter: Y(He), ajaxTransport: Y(Be), ajax: function ajax(t, e) {
        function r(t, e, r, s) {
          var c,
              p,
              d,
              _,
              w,
              x = e;l || (l = !0, u && n.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (_ = et(h, C, r)), _ = nt(h, _, C, c), c ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (yt.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (yt.etag[o] = w)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, p = _.data, d = _.error, c = !d)) : (d = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || x) + "", c ? m.resolveWith(v, [p, x, C]) : m.rejectWith(v, [C, x, d]), C.statusCode(b), b = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : d]), y.fireWith(v, [C, x]), f && (g.trigger("ajaxComplete", [C, h]), --yt.active || yt.event.trigger("ajaxStop")));
        }"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = void 0), e = e || {};var i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            d,
            h = yt.ajaxSetup({}, e),
            v = h.context || h,
            g = h.context && (v.nodeType || v.jquery) ? yt(v) : yt.event,
            m = yt.Deferred(),
            y = yt.Callbacks("once memory"),
            b = h.statusCode || {},
            _ = {},
            w = {},
            x = "canceled",
            C = { readyState: 0, getResponseHeader: function getResponseHeader(t) {
            var e;if (l) {
              if (!s) for (s = {}; e = Pe.exec(a);) {
                s[e[1].toLowerCase()] = e[2];
              }e = s[t.toLowerCase()];
            }return null == e ? null : e;
          }, getAllResponseHeaders: function getAllResponseHeaders() {
            return l ? a : null;
          }, setRequestHeader: function setRequestHeader(t, e) {
            return null == l && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, _[t] = e), this;
          }, overrideMimeType: function overrideMimeType(t) {
            return null == l && (h.mimeType = t), this;
          }, statusCode: function statusCode(t) {
            var e;if (t) if (l) C.always(t[C.status]);else for (e in t) {
              b[e] = [b[e], t[e]];
            }return this;
          }, abort: function abort(t) {
            var e = t || x;return i && i.abort(e), r(0, e), this;
          } };if (m.promise(C), h.url = ((t || h.url || Ae.href) + "").replace(Me, Ae.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(It) || [""], null == h.crossDomain) {
          c = ot.createElement("a");try {
            c.href = h.url, c.href = c.href, h.crossDomain = We.protocol + "//" + We.host != c.protocol + "//" + c.host;
          } catch (t) {
            h.crossDomain = !0;
          }
        }if (h.data && h.processData && "string" != typeof h.data && (h.data = yt.param(h.data, h.traditional)), Q(He, h, e, C), l) return C;f = yt.event && h.global, f && 0 === yt.active++ && yt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qe.test(h.type), o = h.url.replace(Re, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ie, "+")) : (d = h.url.slice(o.length), h.data && (o += (Se.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Le, "$1"), d = (Se.test(o) ? "&" : "?") + "_=" + Ee++ + d), h.url = o + d), h.ifModified && (yt.lastModified[o] && C.setRequestHeader("If-Modified-Since", yt.lastModified[o]), yt.etag[o] && C.setRequestHeader("If-None-Match", yt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
          C.setRequestHeader(p, h.headers[p]);
        }if (h.beforeSend && (h.beforeSend.call(v, C, h) === !1 || l)) return C.abort();if (x = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Q(Be, h, e, C)) {
          if (C.readyState = 1, f && g.trigger("ajaxSend", [C, h]), l) return C;h.async && h.timeout > 0 && (u = n.setTimeout(function () {
            C.abort("timeout");
          }, h.timeout));try {
            l = !1, i.send(_, r);
          } catch (t) {
            if (l) throw t;r(-1, t);
          }
        } else r(-1, "No Transport");return C;
      }, getJSON: function getJSON(t, e, n) {
        return yt.get(t, e, n, "json");
      }, getScript: function getScript(t, e) {
        return yt.get(t, void 0, e, "script");
      } }), yt.each(["get", "post"], function (t, e) {
      yt[e] = function (t, n, r, i) {
        return yt.isFunction(n) && (i = i || r, r = n, n = void 0), yt.ajax(yt.extend({ url: t, type: e, dataType: i, data: n, success: r }, yt.isPlainObject(t) && t));
      };
    }), yt._evalUrl = function (t) {
      return yt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
    }, yt.fn.extend({ wrapAll: function wrapAll(t) {
        var e;return this[0] && (yt.isFunction(t) && (t = t.call(this[0])), e = yt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstElementChild;) {
            t = t.firstElementChild;
          }return t;
        }).append(this)), this;
      }, wrapInner: function wrapInner(t) {
        return yt.isFunction(t) ? this.each(function (e) {
          yt(this).wrapInner(t.call(this, e));
        }) : this.each(function () {
          var e = yt(this),
              n = e.contents();n.length ? n.wrapAll(t) : e.append(t);
        });
      }, wrap: function wrap(t) {
        var e = yt.isFunction(t);return this.each(function (n) {
          yt(this).wrapAll(e ? t.call(this, n) : t);
        });
      }, unwrap: function unwrap(t) {
        return this.parent(t).not("body").each(function () {
          yt(this).replaceWith(this.childNodes);
        }), this;
      } }), yt.expr.pseudos.hidden = function (t) {
      return !yt.expr.pseudos.visible(t);
    }, yt.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, yt.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (t) {}
    };var ze = { 0: 200, 1223: 204 },
        Ve = yt.ajaxSettings.xhr();gt.cors = !!Ve && "withCredentials" in Ve, gt.ajax = Ve = !!Ve, yt.ajaxTransport(function (t) {
      var _e3, r;if (gt.cors || Ve && !t.crossDomain) return { send: function send(i, o) {
          var a,
              s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
            s[a] = t.xhrFields[a];
          }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
            s.setRequestHeader(a, i[a]);
          }_e3 = function e(t) {
            return function () {
              _e3 && (_e3 = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(ze[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
            };
          }, s.onload = _e3(), r = s.onerror = _e3("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
            4 === s.readyState && n.setTimeout(function () {
              _e3 && r();
            });
          }, _e3 = _e3("abort");try {
            s.send(t.hasContent && t.data || null);
          } catch (t) {
            if (_e3) throw t;
          }
        }, abort: function abort() {
          _e3 && _e3();
        } };
    }), yt.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }), yt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(t) {
          return yt.globalEval(t), t;
        } } }), yt.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), yt.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e, _n2;return { send: function send(r, i) {
            e = yt("<script>").prop({ charset: t.scriptCharset, src: t.url }).on("load error", _n2 = function n(t) {
              e.remove(), _n2 = null, t && i("error" === t.type ? 404 : 200, t.type);
            }), ot.head.appendChild(e[0]);
          }, abort: function abort() {
            _n2 && _n2();
          } };
      }
    });var Xe = [],
        Ke = /(=)\?(?=&|$)|\?\?/;yt.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
        var t = Xe.pop() || yt.expando + "_" + Ee++;return this[t] = !0, t;
      } }), yt.ajaxPrefilter("json jsonp", function (t, e, r) {
      var i,
          o,
          a,
          s = t.jsonp !== !1 && (Ke.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = yt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ke, "$1" + i) : t.jsonp !== !1 && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
        return a || yt.error(i + " was not called"), a[0];
      }, t.dataTypes[0] = "json", o = n[i], n[i] = function () {
        a = arguments;
      }, r.always(function () {
        void 0 === o ? yt(n).removeProp(i) : n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Xe.push(i)), a && yt.isFunction(o) && o(a[0]), a = o = void 0;
      }), "script";
    }), gt.createHTMLDocument = function () {
      var t = ot.implementation.createHTMLDocument("").body;return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length;
    }(), yt.parseHTML = function (t, e, n) {
      if ("string" != typeof t) return [];"boolean" == typeof e && (n = e, e = !1);var r, i, o;return e || (gt.createHTMLDocument ? (e = ot.implementation.createHTMLDocument(""), r = e.createElement("base"), r.href = ot.location.href, e.head.appendChild(r)) : e = ot), i = At.exec(t), o = !n && [], i ? [e.createElement(i[1])] : (i = C([t], e, o), o && o.length && yt(o).remove(), yt.merge([], i.childNodes));
    }, yt.fn.load = function (t, e, n) {
      var r,
          i,
          o,
          a = this,
          s = t.indexOf(" ");return s > -1 && (r = J(t.slice(s)), t = t.slice(0, s)), yt.isFunction(e) ? (n = e, e = void 0) : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (i = "POST"), a.length > 0 && yt.ajax({ url: t, type: i || "GET", dataType: "html", data: e }).done(function (t) {
        o = arguments, a.html(r ? yt("<div>").append(yt.parseHTML(t)).find(r) : t);
      }).always(n && function (t, e) {
        a.each(function () {
          n.apply(this, o || [t.responseText, e, t]);
        });
      }), this;
    }, yt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      yt.fn[e] = function (t) {
        return this.on(e, t);
      };
    }), yt.expr.pseudos.animated = function (t) {
      return yt.grep(yt.timers, function (e) {
        return t === e.elem;
      }).length;
    }, yt.offset = { setOffset: function setOffset(t, e, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = yt.css(t, "position"),
            f = yt(t),
            p = {};"static" === l && (t.style.position = "relative"), s = f.offset(), o = yt.css(t, "top"), u = yt.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), yt.isFunction(e) && (e = e.call(t, n, yt.extend({}, s))), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + i), "using" in e ? e.using.call(t, p) : f.css(p);
      } }, yt.fn.extend({ offset: function offset(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          yt.offset.setOffset(this, t, e);
        });var e,
            n,
            r,
            i,
            o = this[0];if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = rt(i), e = i.documentElement, { top: r.top + n.pageYOffset - e.clientTop, left: r.left + n.pageXOffset - e.clientLeft }) : r) : { top: 0, left: 0 };
      }, position: function position() {
        if (this[0]) {
          var t,
              e,
              n = this[0],
              r = { top: 0, left: 0 };return "fixed" === yt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), yt.nodeName(t[0], "html") || (r = t.offset()), r = { top: r.top + yt.css(t[0], "borderTopWidth", !0), left: r.left + yt.css(t[0], "borderLeftWidth", !0) }), { top: e.top - r.top - yt.css(n, "marginTop", !0), left: e.left - r.left - yt.css(n, "marginLeft", !0) };
        }
      }, offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === yt.css(t, "position");) {
            t = t.offsetParent;
          }return t || te;
        });
      } }), yt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
      var n = "pageYOffset" === e;yt.fn[t] = function (r) {
        return Pt(this, function (t, r, i) {
          var o = rt(t);return void 0 === i ? o ? o[e] : t[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i);
        }, t, r, arguments.length);
      };
    }), yt.each(["top", "left"], function (t, e) {
      yt.cssHooks[e] = L(gt.pixelPosition, function (t, n) {
        if (n) return n = R(t, e), le.test(n) ? yt(t).position()[e] + "px" : n;
      });
    }), yt.each({ Height: "height", Width: "width" }, function (t, e) {
      yt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, r) {
        yt.fn[r] = function (i, o) {
          var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (i === !0 || o === !0 ? "margin" : "border");return Pt(this, function (e, n, i) {
            var o;return yt.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? yt.css(e, n, s) : yt.style(e, n, i, s);
          }, e, a ? i : void 0, a);
        };
      });
    }), yt.fn.extend({ bind: function bind(t, e, n) {
        return this.on(t, null, e, n);
      }, unbind: function unbind(t, e) {
        return this.off(t, null, e);
      }, delegate: function delegate(t, e, n, r) {
        return this.on(e, t, n, r);
      }, undelegate: function undelegate(t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
      } }), yt.parseJSON = JSON.parse, r = [], i = function () {
      return yt;
    }.apply(e, r), !(void 0 !== i && (t.exports = i));var Je = n.jQuery,
        Ge = n.$;return yt.noConflict = function (t) {
      return n.$ === yt && (n.$ = Ge), t && n.jQuery === yt && (n.jQuery = Je), yt;
    }, o || (n.jQuery = n.$ = yt), yt;
  });
}, function (t, e) {
  var n;n = function () {
    return this;
  }();try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }t.exports = n;
}, function (t, e, n) {
  n(30), Vue.component("example", n(34));new Vue({ el: "#app" });
}, function (t, e) {}, function (t, e, n) {
  t.exports = n(12);
}, function (t, e, n) {
  "use strict";
  function r(t) {
    var e = new a(t),
        n = o(a.prototype.request, e);return i.extend(n, a.prototype, e), i.extend(n, e), n;
  }var i = n(0),
      o = n(6),
      a = n(14),
      s = n(1),
      u = r(s);u.Axios = a, u.create = function (t) {
    return r(i.merge(s, t));
  }, u.Cancel = n(3), u.CancelToken = n(13), u.isCancel = n(4), u.all = function (t) {
    return Promise.all(t);
  }, u.spread = n(28), t.exports = u, t.exports.default = u;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    if ("function" != typeof t) throw new TypeError("executor must be a function.");var e;this.promise = new Promise(function (t) {
      e = t;
    });var n = this;t(function (t) {
      n.reason || (n.reason = new i(t), e(n.reason));
    });
  }var i = n(3);r.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }, r.source = function () {
    var t,
        e = new r(function (e) {
      t = e;
    });return { token: e, cancel: t };
  }, t.exports = r;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    this.defaults = t, this.interceptors = { request: new a(), response: new a() };
  }var i = n(1),
      o = n(0),
      a = n(15),
      s = n(16),
      u = n(24),
      c = n(22);r.prototype.request = function (t) {
    "string" == typeof t && (t = o.merge({ url: arguments[0] }, arguments[1])), t = o.merge(i, this.defaults, { method: "get" }, t), t.baseURL && !u(t.url) && (t.url = c(t.baseURL, t.url));var e = [s, void 0],
        n = Promise.resolve(t);for (this.interceptors.request.forEach(function (t) {
      e.unshift(t.fulfilled, t.rejected);
    }), this.interceptors.response.forEach(function (t) {
      e.push(t.fulfilled, t.rejected);
    }); e.length;) {
      n = n.then(e.shift(), e.shift());
    }return n;
  }, o.forEach(["delete", "get", "head"], function (t) {
    r.prototype[t] = function (e, n) {
      return this.request(o.merge(n || {}, { method: t, url: e }));
    };
  }), o.forEach(["post", "put", "patch"], function (t) {
    r.prototype[t] = function (e, n, r) {
      return this.request(o.merge(r || {}, { method: t, url: e, data: n }));
    };
  }), t.exports = r;
}, function (t, e, n) {
  "use strict";
  function r() {
    this.handlers = [];
  }var i = n(0);r.prototype.use = function (t, e) {
    return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1;
  }, r.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null);
  }, r.prototype.forEach = function (t) {
    i.forEach(this.handlers, function (e) {
      null !== e && t(e);
    });
  }, t.exports = r;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    t.cancelToken && t.cancelToken.throwIfRequested();
  }var i = n(0),
      o = n(19),
      a = n(4),
      s = n(1);t.exports = function (t) {
    r(t), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
      delete t.headers[e];
    });var e = t.adapter || s.adapter;return e(t).then(function (e) {
      return r(t), e.data = o(e.data, e.headers, t.transformResponse), e;
    }, function (e) {
      return a(e) || (r(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e);
    });
  };
}, function (t, e, n) {
  "use strict";
  t.exports = function (t, e, n, r) {
    return t.config = e, n && (t.code = n), t.response = r, t;
  };
}, function (t, e, n) {
  "use strict";
  var r = n(5);t.exports = function (t, e, n) {
    var i = n.config.validateStatus;n.status && i && !i(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n)) : t(n);
  };
}, function (t, e, n) {
  "use strict";
  var r = n(0);t.exports = function (t, e, n) {
    return r.forEach(n, function (n) {
      t = n(t, e);
    }), t;
  };
}, function (t, e, n) {
  "use strict";
  function r() {
    this.message = "String contains an invalid character";
  }function i(t) {
    for (var e, n, i = String(t), a = "", s = 0, u = o; i.charAt(0 | s) || (u = "=", s % 1); a += u.charAt(63 & e >> 8 - s % 1 * 8)) {
      if (n = i.charCodeAt(s += .75), n > 255) throw new r();e = e << 8 | n;
    }return a;
  }var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype = new Error(), r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", t.exports = i;
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }var i = n(0);t.exports = function (t, e, n) {
    if (!e) return t;var o;if (n) o = n(e);else if (i.isURLSearchParams(e)) o = e.toString();else {
      var a = [];i.forEach(e, function (t, e) {
        null !== t && "undefined" != typeof t && (i.isArray(t) && (e += "[]"), i.isArray(t) || (t = [t]), i.forEach(t, function (t) {
          i.isDate(t) ? t = t.toISOString() : i.isObject(t) && (t = JSON.stringify(t)), a.push(r(e) + "=" + r(t));
        }));
      }), o = a.join("&");
    }return o && (t += (t.indexOf("?") === -1 ? "?" : "&") + o), t;
  };
}, function (t, e, n) {
  "use strict";
  t.exports = function (t, e) {
    return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "");
  };
}, function (t, e, n) {
  "use strict";
  var r = n(0);t.exports = r.isStandardBrowserEnv() ? function () {
    return { write: function write(t, e, n, i, o, a) {
        var s = [];s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
      }, read: function read(t) {
        var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));return e ? decodeURIComponent(e[3]) : null;
      }, remove: function remove(t) {
        this.write(t, "", Date.now() - 864e5);
      } };
  }() : function () {
    return { write: function write() {}, read: function read() {
        return null;
      }, remove: function remove() {} };
  }();
}, function (t, e, n) {
  "use strict";
  t.exports = function (t) {
    return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    );
  };
}, function (t, e, n) {
  "use strict";
  var r = n(0);t.exports = r.isStandardBrowserEnv() ? function () {
    function t(t) {
      var e = t;return n && (i.setAttribute("href", e), e = i.href), i.setAttribute("href", e), { href: i.href, protocol: i.protocol ? i.protocol.replace(/:$/, "") : "", host: i.host, search: i.search ? i.search.replace(/^\?/, "") : "", hash: i.hash ? i.hash.replace(/^#/, "") : "", hostname: i.hostname, port: i.port, pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname };
    }var e,
        n = /(msie|trident)/i.test(navigator.userAgent),
        i = document.createElement("a");return e = t(window.location.href), function (n) {
      var i = r.isString(n) ? t(n) : n;return i.protocol === e.protocol && i.host === e.host;
    };
  }() : function () {
    return function () {
      return !0;
    };
  }();
}, function (t, e, n) {
  "use strict";
  var r = n(0);t.exports = function (t, e) {
    r.forEach(t, function (n, r) {
      r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]);
    });
  };
}, function (t, e, n) {
  "use strict";
  var r = n(0);t.exports = function (t) {
    var e,
        n,
        i,
        o = {};return t ? (r.forEach(t.split("\n"), function (t) {
      i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e && (o[e] = o[e] ? o[e] + ", " + n : n);
    }), o) : o;
  };
}, function (t, e, n) {
  "use strict";
  t.exports = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  };
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { mounted: function mounted() {
      console.log("Component mounted.");
    } };
}, function (t, e, n) {
  window._ = n(32), window.$ = __webpack_provided_window_dot_jQuery = n(7), n(31), window.Vue = n(36), window.axios = n(11), window.axios.defaults.headers.common = { "X-Requested-With": "XMLHttpRequest" };
}, function (t, e, n) {
  (function (t) {
    /*!
    * Bootstrap v3.3.7 (http://getbootstrap.com)
    * Copyright 2011-2016 Twitter, Inc.
    * Licensed under the MIT license
    */
    if ("undefined" == typeof t) throw new Error("Bootstrap's JavaScript requires jQuery");+function (t) {
      "use strict";
      var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
    }(t), +function (t) {
      "use strict";
      function e() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var n in e) {
          if (void 0 !== t.style[n]) return { end: e[n] };
        }return !1;
      }t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            r = this;t(this).one("bsTransitionEnd", function () {
          n = !0;
        });var i = function i() {
          n || t(r).trigger(t.support.transition.end);
        };return setTimeout(i, e), this;
      }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function handle(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
          } });
      });
    }(t), +function (t) {
      "use strict";
      function e(e) {
        return this.each(function () {
          var n = t(this),
              i = n.data("bs.alert");i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n);
        });
      }var n = '[data-dismiss="alert"]',
          r = function r(e) {
        t(e).on("click", n, this.close);
      };r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function (e) {
        function n() {
          a.detach().trigger("closed.bs.alert").remove();
        }var i = t(this),
            o = i.attr("data-target");o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));var a = t("#" === o ? [] : o);e && e.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n());
      };var i = t.fn.alert;t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function () {
        return t.fn.alert = i, this;
      }, t(document).on("click.bs.alert.data-api", n, r.prototype.close);
    }(t), +function (t) {
      "use strict";
      function e(e) {
        return this.each(function () {
          var r = t(this),
              i = r.data("bs.button"),
              o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e);
        });
      }var n = function n(e, r) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1;
      };n.VERSION = "3.3.7", n.DEFAULTS = { loadingText: "loading..." }, n.prototype.setState = function (e) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            o = r.data();e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function () {
          r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1));
        }, this), 0);
      }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');if (e.length) {
          var n = this.$element.find("input");"radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
      };var r = t.fn.button;t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = r, this;
      }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var r = t(n.target).closest(".btn");e.call(r, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"));
      }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
      });
    }(t), +function (t) {
      "use strict";
      function e(e) {
        return this.each(function () {
          var r = t(this),
              i = r.data("bs.carousel"),
              o = t.extend({}, n.DEFAULTS, r.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e),
              a = "string" == typeof e ? e : o.slide;i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : a ? i[a]() : o.interval && i.pause().cycle();
        });
      }var n = function n(e, _n3) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _n3, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
      };n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {case 37:
              this.prev();break;case 39:
              this.next();break;default:
              return;}t.preventDefault();
        }
      }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
      }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
      }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
            r = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;if (r && !this.options.wrap) return e;var i = "prev" == t ? -1 : 1,
            o = (n + i) % this.$items.length;return this.$items.eq(o);
      }, n.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
          e.to(t);
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
      }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
      }, n.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }, n.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }, n.prototype.slide = function (e, r) {
        var i = this.$element.find(".item.active"),
            o = r || this.getItemForDirection(e, i),
            a = this.interval,
            s = "next" == e ? "left" : "right",
            u = this;if (o.hasClass("active")) return this.sliding = !1;var c = o[0],
            l = t.Event("slide.bs.carousel", { relatedTarget: c, direction: s });if (this.$element.trigger(l), !l.isDefaultPrevented()) {
          if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");var f = t(this.$indicators.children()[this.getItemIndex(o)]);f && f.addClass("active");
          }var p = t.Event("slid.bs.carousel", { relatedTarget: c, direction: s });return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
            o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), u.sliding = !1, setTimeout(function () {
              u.$element.trigger(p);
            }, 0);
          }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this;
        }
      };var r = t.fn.carousel;t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = r, this;
      };var i = function i(n) {
        var r,
            i = t(this),
            o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));if (o.hasClass("carousel")) {
          var a = t.extend({}, o.data(), i.data()),
              s = i.attr("data-slide-to");s && (a.interval = !1), e.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault();
        }
      };t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var n = t(this);e.call(n, n.data());
        });
      });
    }(t), +function (t) {
      "use strict";
      function e(e) {
        var n,
            r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");return t(r);
      }function n(e) {
        return this.each(function () {
          var n = t(this),
              i = n.data("bs.collapse"),
              o = t.extend({}, r.DEFAULTS, n.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);!i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof e && i[e]();
        });
      }var r = function r(e, n) {
        this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
      };r.VERSION = "3.3.7", r.TRANSITION_DURATION = 350, r.DEFAULTS = { toggle: !0 }, r.prototype.dimension = function () {
        var t = this.$element.hasClass("width");return t ? "width" : "height";
      }, r.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
              i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
            var o = t.Event("show.bs.collapse");if (this.$element.trigger(o), !o.isDefaultPrevented()) {
              i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));var a = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var s = function s() {
                this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
              };if (!t.support.transition) return s.call(this);var u = t.camelCase(["scroll", a].join("-"));this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][u]);
            }
          }
        }
      }, r.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var n = this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var i = function i() {
              this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
            };return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this);
          }
        }
      }, r.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }, r.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, r) {
          var i = t(r);this.addAriaAndCollapsedClass(e(i), i);
        }, this)).end();
      }, r.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n);
      };var i = t.fn.collapse;t.fn.collapse = n, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i, this;
      }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (r) {
        var i = t(this);i.attr("data-target") || r.preventDefault();var o = e(i),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : i.data();n.call(o, s);
      });
    }(t), +function (t) {
      "use strict";
      function e(e) {
        var n = e.attr("data-target");n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));var r = n && t(n);return r && r.length ? r : e.parent();
      }function n(n) {
        n && 3 === n.which || (t(i).remove(), t(o).each(function () {
          var r = t(this),
              i = e(r),
              o = { relatedTarget: this };i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))));
        }));
      }function r(e) {
        return this.each(function () {
          var n = t(this),
              r = n.data("bs.dropdown");r || n.data("bs.dropdown", r = new a(this)), "string" == typeof e && r[e].call(n);
        });
      }var i = ".dropdown-backdrop",
          o = '[data-toggle="dropdown"]',
          a = function a(e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };a.VERSION = "3.3.7", a.prototype.toggle = function (r) {
        var i = t(this);if (!i.is(".disabled, :disabled")) {
          var o = e(i),
              a = o.hasClass("open");if (n(), !a) {
            "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);var s = { relatedTarget: this };if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented()) return;i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s));
          }return !1;
        }
      }, a.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
          var r = t(this);if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
            var i = e(r),
                a = i.hasClass("open");if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && i.find(o).trigger("focus"), r.trigger("click");var s = " li:not(.disabled):visible a",
                u = i.find(".dropdown-menu" + s);if (u.length) {
              var c = u.index(n.target);38 == n.which && c > 0 && c--, 40 == n.which && c < u.length - 1 && c++, ~c || (c = 0), u.eq(c).trigger("focus");
            }
          }
        }
      };var s = t.fn.dropdown;t.fn.dropdown = r, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = s, this;
      }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation();
      }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown);
    }(t), +function (t) {
      "use strict";
      function e(e, r) {
        return this.each(function () {
          var i = t(this),
              o = i.data("bs.modal"),
              a = t.extend({}, n.DEFAULTS, i.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);o || i.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](r) : a.show && o.show(r);
        });
      }var n = function n(e, _n4) {
        this.options = _n4, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
          this.$element.trigger("loaded.bs.modal");
        }, this));
      };n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }, n.prototype.show = function (e) {
        var r = this,
            i = t.Event("show.bs.modal", { relatedTarget: e });this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
          r.$element.one("mouseup.dismiss.bs.modal", function (e) {
            t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0);
          });
        }), this.backdrop(function () {
          var i = t.support.transition && r.$element.hasClass("fade");r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();var o = t.Event("shown.bs.modal", { relatedTarget: e });i ? r.$dialog.one("bsTransitionEnd", function () {
            r.$element.trigger("focus").trigger(o);
          }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o);
        }));
      }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal());
      }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
          document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
        }, this));
      }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
          27 == t.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
      }, n.prototype.hideModal = function () {
        var t = this;this.$element.hide(), this.backdrop(function () {
          t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
        });
      }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
      }, n.prototype.backdrop = function (e) {
        var r = this,
            i = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
          var o = t.support.transition && i;if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
            return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
          }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");var a = function a() {
            r.removeBackdrop(), e && e();
          };t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a();
        } else e && e();
      }, n.prototype.handleUpdate = function () {
        this.adjustDialog();
      }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" });
      }, n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;if (!t) {
          var e = document.documentElement.getBoundingClientRect();t = e.right - Math.abs(e.left);
        }this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
      }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
      }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");t.className = "modal-scrollbar-measure", this.$body.append(t);var e = t.offsetWidth - t.clientWidth;return this.$body[0].removeChild(t), e;
      };var r = t.fn.modal;t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = r, this;
      }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var r = t(this),
            i = r.attr("href"),
            o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(i) && i }, o.data(), r.data());r.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
          t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
            r.is(":visible") && r.trigger("focus");
          });
        }), e.call(o, a, this);
      });
    }(t), +function (t) {
      "use strict";
      function e(e) {
        return this.each(function () {
          var r = t(this),
              i = r.data("bs.tooltip"),
              o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;!i && /destroy|hide/.test(e) || (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]());
        });
      }var n = function n(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
      };n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, n.prototype.init = function (e, n, r) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
          var a = i[o];if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));else if ("manual" != a) {
            var s = "hover" == a ? "mouseenter" : "focusin",
                u = "hover" == a ? "mouseleave" : "focusout";this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this));
          }
        }this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
      }, n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
      }, n.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();return this._options && t.each(this._options, function (t, r) {
          n[t] != r && (e[t] = r);
        }), e;
      }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function () {
          "in" == n.hoverState && n.show();
        }, n.options.delay.show)) : n.show());
      }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState) {
          if (this.inState[t]) return !0;
        }return !1;
      }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function () {
          "out" == n.hoverState && n.hide();
        }, n.options.delay.hide)) : n.hide();
      }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (e.isDefaultPrevented() || !r) return;var i = this,
              o = this.tip(),
              a = this.getUID(this.type);this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
              u = /\s?auto?\s?/i,
              c = u.test(s);c && (s = s.replace(u, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var l = this.getPosition(),
              f = o[0].offsetWidth,
              p = o[0].offsetHeight;if (c) {
            var d = s,
                h = this.getPosition(this.$viewport);s = "bottom" == s && l.bottom + p > h.bottom ? "top" : "top" == s && l.top - p < h.top ? "bottom" : "right" == s && l.right + f > h.width ? "left" : "left" == s && l.left - f < h.left ? "right" : s, o.removeClass(d).addClass(s);
          }var v = this.getCalculatedOffset(s, l, f, p);this.applyPlacement(v, s);var g = function g() {
            var t = i.hoverState;i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i);
          };t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g();
        }
      }, n.prototype.applyPlacement = function (e, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            a = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10);isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(r[0], t.extend({ using: function using(t) {
            r.css({ top: Math.round(t.top), left: Math.round(t.left) });
          } }, e), 0), r.addClass("in");var u = r[0].offsetWidth,
            c = r[0].offsetHeight;"top" == n && c != o && (e.top = e.top + o - c);var l = this.getViewportAdjustedDelta(n, e, u, c);l.left ? e.left += l.left : e.top += l.top;var f = /top|bottom/.test(n),
            p = f ? 2 * l.left - i + u : 2 * l.top - o + c,
            d = f ? "offsetWidth" : "offsetHeight";r.offset(e), this.replaceArrow(p, r[0][d], f);
      }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "");
      }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
      }, n.prototype.hide = function (e) {
        function r() {
          "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e();
        }var i = this,
            o = t(this.$tip),
            a = t.Event("hide.bs." + this.type);if (this.$element.trigger(a), !a.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this;
      }, n.prototype.fixTitle = function () {
        var t = this.$element;(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
      }, n.prototype.hasContent = function () {
        return this.getTitle();
      }, n.prototype.getPosition = function (e) {
        e = e || this.$element;var n = e[0],
            r = "BODY" == n.tagName,
            i = n.getBoundingClientRect();null == i.width && (i = t.extend({}, i, { width: i.right - i.left, height: i.bottom - i.top }));var o = window.SVGElement && n instanceof window.SVGElement,
            a = r ? { top: 0, left: 0 } : o ? null : e.offset(),
            s = { scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            u = r ? { width: t(window).width(), height: t(window).height() } : null;return t.extend({}, i, s, u, a);
      }, n.prototype.getCalculatedOffset = function (t, e, n, r) {
        return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 } : "top" == t ? { top: e.top - r, left: e.left + e.width / 2 - n / 2 } : "left" == t ? { top: e.top + e.height / 2 - r / 2, left: e.left - n } : { top: e.top + e.height / 2 - r / 2, left: e.left + e.width };
      }, n.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
        var i = { top: 0, left: 0 };if (!this.$viewport) return i;var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);if (/right|left/.test(t)) {
          var s = e.top - o - a.scroll,
              u = e.top + o - a.scroll + r;s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u);
        } else {
          var c = e.left - o,
              l = e.left + o + n;c < a.left ? i.left = a.left - c : l > a.right && (i.left = a.left + a.width - l);
        }return i;
      }, n.prototype.getTitle = function () {
        var t,
            e = this.$element,
            n = this.options;return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title);
      }, n.prototype.getUID = function (t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));return t;
      }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
      }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
      }, n.prototype.enable = function () {
        this.enabled = !0;
      }, n.prototype.disable = function () {
        this.enabled = !1;
      }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }, n.prototype.toggle = function (e) {
        var n = this;e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
      }, n.prototype.destroy = function () {
        var t = this;clearTimeout(this.timeout), this.hide(function () {
          t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null;
        });
      };var r = t.fn.tooltip;t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = r, this;
      };
    }(t), +function (t) {
      "use strict";
      function e(e) {
        return this.each(function () {
          var r = t(this),
              i = r.data("bs.popover"),
              o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;!i && /destroy|hide/.test(e) || (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]());
        });
      }var n = function n(t, e) {
        this.init("popover", t, e);
      };if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
      }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }, n.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
      }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
      };var r = t.fn.popover;t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = r, this;
      };
    }(t), +function (t) {
      "use strict";
      function e(n, r) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process();
      }function n(n) {
        return this.each(function () {
          var r = t(this),
              i = r.data("bs.scrollspy"),
              o = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]();
        });
      }e.VERSION = "3.3.7", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
      }, e.prototype.refresh = function () {
        var e = this,
            n = "offset",
            r = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
          var e = t(this),
              i = e.data("target") || e.attr("href"),
              o = /^#./.test(i) && t(i);return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).each(function () {
          e.offsets.push(this[0]), e.targets.push(this[1]);
        });
      }, e.prototype.process = function () {
        var t,
            e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            r = this.options.offset + n - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            a = this.activeTarget;if (this.scrollHeight != n && this.refresh(), e >= r) return a != (t = o[o.length - 1]) && this.activate(t);if (a && e < i[0]) return this.activeTarget = null, this.clear();for (t = i.length; t--;) {
          a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t]);
        }
      }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            r = t(n).parents("li").addClass("active");r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy");
      }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
      };var r = t.fn.scrollspy;t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = r, this;
      }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);n.call(e, e.data());
        });
      });
    }(t), +function (t) {
      "use strict";
      function e(e) {
        return this.each(function () {
          var r = t(this),
              i = r.data("bs.tab");i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]();
        });
      }var n = function n(e) {
        this.element = t(e);
      };n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            r = e.data("target");if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
          var i = n.find(".active:last a"),
              o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
              a = t.Event("show.bs.tab", { relatedTarget: i[0] });if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
            var s = t(r);this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
              i.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: i[0] });
            });
          }
        }
      }, n.prototype.activate = function (e, r, i) {
        function o() {
          a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i();
        }var a = r.find("> .active"),
            s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in");
      };var r = t.fn.tab;t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = r, this;
      };var i = function i(n) {
        n.preventDefault(), e.call(t(this), "show");
      };t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
    }(t), +function (t) {
      "use strict";
      function e(e) {
        return this.each(function () {
          var r = t(this),
              i = r.data("bs.affix"),
              o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]();
        });
      }var n = function n(e, r) {
        this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
      };n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = { offset: 0, target: window }, n.prototype.getState = function (t, e, n, r) {
        var i = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();if (null != n && "top" == this.affixed) return i < n && "top";if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + a <= t - r) && "bottom";var s = null == this.affixed,
            u = s ? i : o.top,
            c = s ? a : e;return null != n && i <= n ? "top" : null != r && u + c >= t - r && "bottom";
      }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t = this.$target.scrollTop(),
            e = this.$element.offset();return this.pinnedOffset = e.top - t;
      }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
              r = this.options.offset,
              i = r.top,
              o = r.bottom,
              a = Math.max(t(document).height(), t(document.body).height());"object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));var s = this.getState(a, e, i, o);if (this.affixed != s) {
            null != this.unpin && this.$element.css("top", "");var u = "affix" + (s ? "-" + s : ""),
                c = t.Event(u + ".bs.affix");if (this.$element.trigger(c), c.isDefaultPrevented()) return;this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix");
          }"bottom" == s && this.$element.offset({ top: a - e - o });
        }
      };var r = t.fn.affix;t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = r, this;
      }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var n = t(this),
              r = n.data();r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r);
        });
      });
    }(t);
  }).call(e, n(7));
}, function (t, e, n) {
  (function (t, r) {
    var i;(function () {
      function o(t, e) {
        return t.set(e[0], e[1]), t;
      }function a(t, e) {
        return t.add(e), t;
      }function s(t, e, n) {
        switch (n.length) {case 0:
            return t.call(e);case 1:
            return t.call(e, n[0]);case 2:
            return t.call(e, n[0], n[1]);case 3:
            return t.call(e, n[0], n[1], n[2]);}return t.apply(e, n);
      }function u(t, e, n, r) {
        for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
          var a = t[i];e(r, a, n(a), t);
        }return r;
      }function c(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1;) {}return t;
      }function l(t, e) {
        for (var n = null == t ? 0 : t.length; n-- && e(t[n], n, t) !== !1;) {}return t;
      }function f(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
          if (!e(t[n], n, t)) return !1;
        }return !0;
      }function p(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
          var a = t[n];e(a, n, t) && (o[i++] = a);
        }return o;
      }function d(t, e) {
        var n = null == t ? 0 : t.length;return !!n && T(t, e, 0) > -1;
      }function h(t, e, n) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;) {
          if (n(e, t[r])) return !0;
        }return !1;
      }function v(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) {
          i[n] = e(t[n], n, t);
        }return i;
      }function g(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) {
          t[i + n] = e[n];
        }return t;
      }function m(t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;for (r && o && (n = t[++i]); ++i < o;) {
          n = e(n, t[i], i, t);
        }return n;
      }function y(t, e, n, r) {
        var i = null == t ? 0 : t.length;for (r && i && (n = t[--i]); i--;) {
          n = e(n, t[i], i, t);
        }return n;
      }function b(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
          if (e(t[n], n, t)) return !0;
        }return !1;
      }function _(t) {
        return t.split("");
      }function w(t) {
        return t.match(Ue) || [];
      }function x(t, e, n) {
        var r;return n(t, function (t, n, i) {
          if (e(t, n, i)) return r = n, !1;
        }), r;
      }function C(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {
          if (e(t[o], o, t)) return o;
        }return -1;
      }function T(t, e, n) {
        return e === e ? Z(t, e, n) : C(t, k, n);
      }function $(t, e, n, r) {
        for (var i = n - 1, o = t.length; ++i < o;) {
          if (r(t[i], e)) return i;
        }return -1;
      }function k(t) {
        return t !== t;
      }function A(t, e) {
        var n = null == t ? 0 : t.length;return n ? N(t, e) / n : Pt;
      }function E(t) {
        return function (e) {
          return null == e ? it : e[t];
        };
      }function S(t) {
        return function (e) {
          return null == t ? it : t[e];
        };
      }function O(t, e, n, r, i) {
        return i(t, function (t, i, o) {
          n = r ? (r = !1, t) : e(n, t, i, o);
        }), n;
      }function j(t, e) {
        var n = t.length;for (t.sort(e); n--;) {
          t[n] = t[n].value;
        }return t;
      }function N(t, e) {
        for (var n, r = -1, i = t.length; ++r < i;) {
          var o = e(t[r]);o !== it && (n = n === it ? o : n + o);
        }return n;
      }function D(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) {
          r[n] = e(n);
        }return r;
      }function I(t, e) {
        return v(e, function (e) {
          return [e, t[e]];
        });
      }function R(t) {
        return function (e) {
          return t(e);
        };
      }function L(t, e) {
        return v(e, function (e) {
          return t[e];
        });
      }function P(t, e) {
        return t.has(e);
      }function F(t, e) {
        for (var n = -1, r = t.length; ++n < r && T(e, t[n], 0) > -1;) {}return n;
      }function q(t, e) {
        for (var n = t.length; n-- && T(e, t[n], 0) > -1;) {}return n;
      }function M(t, e) {
        for (var n = t.length, r = 0; n--;) {
          t[n] === e && ++r;
        }return r;
      }function H(t) {
        return "\\" + nr[t];
      }function B(t, e) {
        return null == t ? it : t[e];
      }function U(t) {
        return Xn.test(t);
      }function W(t) {
        return Kn.test(t);
      }function z(t) {
        for (var e, n = []; !(e = t.next()).done;) {
          n.push(e.value);
        }return n;
      }function V(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t, r) {
          n[++e] = [r, t];
        }), n;
      }function X(t, e) {
        return function (n) {
          return t(e(n));
        };
      }function K(t, e) {
        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
          var a = t[n];a !== e && a !== ft || (t[n] = ft, o[i++] = n);
        }return o;
      }function J(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t) {
          n[++e] = t;
        }), n;
      }function G(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t) {
          n[++e] = [t, t];
        }), n;
      }function Z(t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i;) {
          if (t[r] === e) return r;
        }return -1;
      }function Y(t, e, n) {
        for (var r = n + 1; r--;) {
          if (t[r] === e) return r;
        }return r;
      }function Q(t) {
        return U(t) ? et(t) : br(t);
      }function tt(t) {
        return U(t) ? nt(t) : _(t);
      }function et(t) {
        for (var e = zn.lastIndex = 0; zn.test(t);) {
          ++e;
        }return e;
      }function nt(t) {
        return t.match(zn) || [];
      }function rt(t) {
        return t.match(Vn) || [];
      }var it,
          ot = "4.17.4",
          at = 200,
          st = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
          ut = "Expected a function",
          ct = "__lodash_hash_undefined__",
          lt = 500,
          ft = "__lodash_placeholder__",
          pt = 1,
          dt = 2,
          ht = 4,
          vt = 1,
          gt = 2,
          mt = 1,
          yt = 2,
          bt = 4,
          _t = 8,
          wt = 16,
          xt = 32,
          Ct = 64,
          Tt = 128,
          $t = 256,
          kt = 512,
          At = 30,
          Et = "...",
          St = 800,
          Ot = 16,
          jt = 1,
          Nt = 2,
          Dt = 3,
          It = 1 / 0,
          Rt = 9007199254740991,
          Lt = 1.7976931348623157e308,
          Pt = NaN,
          Ft = 4294967295,
          qt = Ft - 1,
          Mt = Ft >>> 1,
          Ht = [["ary", Tt], ["bind", mt], ["bindKey", yt], ["curry", _t], ["curryRight", wt], ["flip", kt], ["partial", xt], ["partialRight", Ct], ["rearg", $t]],
          Bt = "[object Arguments]",
          Ut = "[object Array]",
          Wt = "[object AsyncFunction]",
          zt = "[object Boolean]",
          Vt = "[object Date]",
          Xt = "[object DOMException]",
          Kt = "[object Error]",
          Jt = "[object Function]",
          Gt = "[object GeneratorFunction]",
          Zt = "[object Map]",
          Yt = "[object Number]",
          Qt = "[object Null]",
          te = "[object Object]",
          ee = "[object Promise]",
          ne = "[object Proxy]",
          re = "[object RegExp]",
          ie = "[object Set]",
          oe = "[object String]",
          ae = "[object Symbol]",
          se = "[object Undefined]",
          ue = "[object WeakMap]",
          ce = "[object WeakSet]",
          le = "[object ArrayBuffer]",
          fe = "[object DataView]",
          pe = "[object Float32Array]",
          de = "[object Float64Array]",
          he = "[object Int8Array]",
          ve = "[object Int16Array]",
          ge = "[object Int32Array]",
          me = "[object Uint8Array]",
          ye = "[object Uint8ClampedArray]",
          be = "[object Uint16Array]",
          _e = "[object Uint32Array]",
          we = /\b__p \+= '';/g,
          xe = /\b(__p \+=) '' \+/g,
          Ce = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          Te = /&(?:amp|lt|gt|quot|#39);/g,
          $e = /[&<>"']/g,
          ke = RegExp(Te.source),
          Ae = RegExp($e.source),
          Ee = /<%-([\s\S]+?)%>/g,
          Se = /<%([\s\S]+?)%>/g,
          Oe = /<%=([\s\S]+?)%>/g,
          je = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Ne = /^\w*$/,
          De = /^\./,
          Ie = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Re = /[\\^$.*+?()[\]{}|]/g,
          Le = RegExp(Re.source),
          Pe = /^\s+|\s+$/g,
          Fe = /^\s+/,
          qe = /\s+$/,
          Me = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          He = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Be = /,? & /,
          Ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          We = /\\(\\)?/g,
          ze = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          Ve = /\w*$/,
          Xe = /^[-+]0x[0-9a-f]+$/i,
          Ke = /^0b[01]+$/i,
          Je = /^\[object .+?Constructor\]$/,
          Ge = /^0o[0-7]+$/i,
          Ze = /^(?:0|[1-9]\d*)$/,
          Ye = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Qe = /($^)/,
          tn = /['\n\r\u2028\u2029\\]/g,
          en = "\\ud800-\\udfff",
          nn = "\\u0300-\\u036f",
          rn = "\\ufe20-\\ufe2f",
          on = "\\u20d0-\\u20ff",
          an = nn + rn + on,
          sn = "\\u2700-\\u27bf",
          un = "a-z\\xdf-\\xf6\\xf8-\\xff",
          cn = "\\xac\\xb1\\xd7\\xf7",
          ln = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
          fn = "\\u2000-\\u206f",
          pn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          dn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          hn = "\\ufe0e\\ufe0f",
          vn = cn + ln + fn + pn,
          gn = "['’]",
          mn = "[" + en + "]",
          yn = "[" + vn + "]",
          bn = "[" + an + "]",
          _n = "\\d+",
          wn = "[" + sn + "]",
          xn = "[" + un + "]",
          Cn = "[^" + en + vn + _n + sn + un + dn + "]",
          Tn = "\\ud83c[\\udffb-\\udfff]",
          $n = "(?:" + bn + "|" + Tn + ")",
          kn = "[^" + en + "]",
          An = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          En = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Sn = "[" + dn + "]",
          On = "\\u200d",
          jn = "(?:" + xn + "|" + Cn + ")",
          Nn = "(?:" + Sn + "|" + Cn + ")",
          Dn = "(?:" + gn + "(?:d|ll|m|re|s|t|ve))?",
          In = "(?:" + gn + "(?:D|LL|M|RE|S|T|VE))?",
          Rn = $n + "?",
          Ln = "[" + hn + "]?",
          Pn = "(?:" + On + "(?:" + [kn, An, En].join("|") + ")" + Ln + Rn + ")*",
          Fn = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",
          qn = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",
          Mn = Ln + Rn + Pn,
          Hn = "(?:" + [wn, An, En].join("|") + ")" + Mn,
          Bn = "(?:" + [kn + bn + "?", bn, An, En, mn].join("|") + ")",
          Un = RegExp(gn, "g"),
          Wn = RegExp(bn, "g"),
          zn = RegExp(Tn + "(?=" + Tn + ")|" + Bn + Mn, "g"),
          Vn = RegExp([Sn + "?" + xn + "+" + Dn + "(?=" + [yn, Sn, "$"].join("|") + ")", Nn + "+" + In + "(?=" + [yn, Sn + jn, "$"].join("|") + ")", Sn + "?" + jn + "+" + Dn, Sn + "+" + In, qn, Fn, _n, Hn].join("|"), "g"),
          Xn = RegExp("[" + On + en + an + hn + "]"),
          Kn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Jn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
          Gn = -1,
          Zn = {};Zn[pe] = Zn[de] = Zn[he] = Zn[ve] = Zn[ge] = Zn[me] = Zn[ye] = Zn[be] = Zn[_e] = !0, Zn[Bt] = Zn[Ut] = Zn[le] = Zn[zt] = Zn[fe] = Zn[Vt] = Zn[Kt] = Zn[Jt] = Zn[Zt] = Zn[Yt] = Zn[te] = Zn[re] = Zn[ie] = Zn[oe] = Zn[ue] = !1;var Yn = {};Yn[Bt] = Yn[Ut] = Yn[le] = Yn[fe] = Yn[zt] = Yn[Vt] = Yn[pe] = Yn[de] = Yn[he] = Yn[ve] = Yn[ge] = Yn[Zt] = Yn[Yt] = Yn[te] = Yn[re] = Yn[ie] = Yn[oe] = Yn[ae] = Yn[me] = Yn[ye] = Yn[be] = Yn[_e] = !0, Yn[Kt] = Yn[Jt] = Yn[ue] = !1;var Qn = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" },
          tr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
          er = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" },
          nr = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
          rr = parseFloat,
          ir = parseInt,
          or = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.Object === Object && t,
          ar = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
          sr = or || ar || Function("return this")(),
          ur = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && !e.nodeType && e,
          cr = ur && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r && !r.nodeType && r,
          lr = cr && cr.exports === ur,
          fr = lr && or.process,
          pr = function () {
        try {
          return fr && fr.binding && fr.binding("util");
        } catch (t) {}
      }(),
          dr = pr && pr.isArrayBuffer,
          hr = pr && pr.isDate,
          vr = pr && pr.isMap,
          gr = pr && pr.isRegExp,
          mr = pr && pr.isSet,
          yr = pr && pr.isTypedArray,
          br = E("length"),
          _r = S(Qn),
          wr = S(tr),
          xr = S(er),
          Cr = function t(e) {
        function n(t) {
          if (cu(t) && !wp(t) && !(t instanceof _)) {
            if (t instanceof i) return t;if (_l.call(t, "__wrapped__")) return aa(t);
          }return new i(t);
        }function r() {}function i(t, e) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = it;
        }function _(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ft, this.__views__ = [];
        }function S() {
          var t = new _(this.__wrapped__);return t.__actions__ = Mi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Mi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Mi(this.__views__), t;
        }function Z() {
          if (this.__filtered__) {
            var t = new _(this);t.__dir__ = -1, t.__filtered__ = !0;
          } else t = this.clone(), t.__dir__ *= -1;return t;
        }function et() {
          var t = this.__wrapped__.value(),
              e = this.__dir__,
              n = wp(t),
              r = e < 0,
              i = n ? t.length : 0,
              o = Oo(0, i, this.__views__),
              a = o.start,
              s = o.end,
              u = s - a,
              c = r ? s : a - 1,
              l = this.__iteratees__,
              f = l.length,
              p = 0,
              d = Gl(u, this.__takeCount__);if (!n || !r && i == u && d == u) return wi(t, this.__actions__);var h = [];t: for (; u-- && p < d;) {
            c += e;for (var v = -1, g = t[c]; ++v < f;) {
              var m = l[v],
                  y = m.iteratee,
                  b = m.type,
                  _ = y(g);if (b == Nt) g = _;else if (!_) {
                if (b == jt) continue t;break t;
              }
            }h[p++] = g;
          }return h;
        }function nt(t) {
          var e = -1,
              n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
            var r = t[e];this.set(r[0], r[1]);
          }
        }function Ue() {
          this.__data__ = sf ? sf(null) : {}, this.size = 0;
        }function en(t) {
          var e = this.has(t) && delete this.__data__[t];return this.size -= e ? 1 : 0, e;
        }function nn(t) {
          var e = this.__data__;if (sf) {
            var n = e[t];return n === ct ? it : n;
          }return _l.call(e, t) ? e[t] : it;
        }function rn(t) {
          var e = this.__data__;return sf ? e[t] !== it : _l.call(e, t);
        }function on(t, e) {
          var n = this.__data__;return this.size += this.has(t) ? 0 : 1, n[t] = sf && e === it ? ct : e, this;
        }function an(t) {
          var e = -1,
              n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
            var r = t[e];this.set(r[0], r[1]);
          }
        }function sn() {
          this.__data__ = [], this.size = 0;
        }function un(t) {
          var e = this.__data__,
              n = Dn(e, t);if (n < 0) return !1;var r = e.length - 1;return n == r ? e.pop() : Il.call(e, n, 1), --this.size, !0;
        }function cn(t) {
          var e = this.__data__,
              n = Dn(e, t);return n < 0 ? it : e[n][1];
        }function ln(t) {
          return Dn(this.__data__, t) > -1;
        }function fn(t, e) {
          var n = this.__data__,
              r = Dn(n, t);return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
        }function pn(t) {
          var e = -1,
              n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
            var r = t[e];this.set(r[0], r[1]);
          }
        }function dn() {
          this.size = 0, this.__data__ = { hash: new nt(), map: new (nf || an)(), string: new nt() };
        }function hn(t) {
          var e = ko(this, t).delete(t);return this.size -= e ? 1 : 0, e;
        }function vn(t) {
          return ko(this, t).get(t);
        }function gn(t) {
          return ko(this, t).has(t);
        }function mn(t, e) {
          var n = ko(this, t),
              r = n.size;return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
        }function yn(t) {
          var e = -1,
              n = null == t ? 0 : t.length;for (this.__data__ = new pn(); ++e < n;) {
            this.add(t[e]);
          }
        }function bn(t) {
          return this.__data__.set(t, ct), this;
        }function _n(t) {
          return this.__data__.has(t);
        }function wn(t) {
          var e = this.__data__ = new an(t);this.size = e.size;
        }function xn() {
          this.__data__ = new an(), this.size = 0;
        }function Cn(t) {
          var e = this.__data__,
              n = e.delete(t);return this.size = e.size, n;
        }function Tn(t) {
          return this.__data__.get(t);
        }function $n(t) {
          return this.__data__.has(t);
        }function kn(t, e) {
          var n = this.__data__;if (n instanceof an) {
            var r = n.__data__;if (!nf || r.length < at - 1) return r.push([t, e]), this.size = ++n.size, this;n = this.__data__ = new pn(r);
          }return n.set(t, e), this.size = n.size, this;
        }function An(t, e) {
          var n = wp(t),
              r = !n && _p(t),
              i = !n && !r && Cp(t),
              o = !n && !r && !i && Ep(t),
              a = n || r || i || o,
              s = a ? D(t.length, dl) : [],
              u = s.length;for (var c in t) {
            !e && !_l.call(t, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Fo(c, u)) || s.push(c);
          }return s;
        }function En(t) {
          var e = t.length;return e ? t[ni(0, e - 1)] : it;
        }function Sn(t, e) {
          return na(Mi(t), qn(e, 0, t.length));
        }function On(t) {
          return na(Mi(t));
        }function jn(t, e, n) {
          (n === it || Js(t[e], n)) && (n !== it || e in t) || Pn(t, e, n);
        }function Nn(t, e, n) {
          var r = t[e];_l.call(t, e) && Js(r, n) && (n !== it || e in t) || Pn(t, e, n);
        }function Dn(t, e) {
          for (var n = t.length; n--;) {
            if (Js(t[n][0], e)) return n;
          }return -1;
        }function In(t, e, n, r) {
          return bf(t, function (t, i, o) {
            e(r, t, n(t), o);
          }), r;
        }function Rn(t, e) {
          return t && Hi(e, Wu(e), t);
        }function Ln(t, e) {
          return t && Hi(e, zu(e), t);
        }function Pn(t, e, n) {
          "__proto__" == e && Fl ? Fl(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n;
        }function Fn(t, e) {
          for (var n = -1, r = e.length, i = al(r), o = null == t; ++n < r;) {
            i[n] = o ? it : Hu(t, e[n]);
          }return i;
        }function qn(t, e, n) {
          return t === t && (n !== it && (t = t <= n ? t : n), e !== it && (t = t >= e ? t : e)), t;
        }function Mn(t, e, n, r, i, o) {
          var a,
              s = e & pt,
              u = e & dt,
              l = e & ht;if (n && (a = i ? n(t, r, i, o) : n(t)), a !== it) return a;if (!uu(t)) return t;var f = wp(t);if (f) {
            if (a = Do(t), !s) return Mi(t, a);
          } else {
            var p = jf(t),
                d = p == Jt || p == Gt;if (Cp(t)) return Ei(t, s);if (p == te || p == Bt || d && !i) {
              if (a = u || d ? {} : Io(t), !s) return u ? Ui(t, Ln(a, t)) : Bi(t, Rn(a, t));
            } else {
              if (!Yn[p]) return i ? t : {};a = Ro(t, p, Mn, s);
            }
          }o || (o = new wn());var h = o.get(t);if (h) return h;o.set(t, a);var v = l ? u ? xo : wo : u ? zu : Wu,
              g = f ? it : v(t);return c(g || t, function (r, i) {
            g && (i = r, r = t[i]), Nn(a, i, Mn(r, e, n, i, t, o));
          }), a;
        }function Hn(t) {
          var e = Wu(t);return function (n) {
            return Bn(n, t, e);
          };
        }function Bn(t, e, n) {
          var r = n.length;if (null == t) return !r;for (t = fl(t); r--;) {
            var i = n[r],
                o = e[i],
                a = t[i];if (a === it && !(i in t) || !o(a)) return !1;
          }return !0;
        }function zn(t, e, n) {
          if ("function" != typeof t) throw new hl(ut);return If(function () {
            t.apply(it, n);
          }, e);
        }function Vn(t, e, n, r) {
          var i = -1,
              o = d,
              a = !0,
              s = t.length,
              u = [],
              c = e.length;if (!s) return u;n && (e = v(e, R(n))), r ? (o = h, a = !1) : e.length >= at && (o = P, a = !1, e = new yn(e));t: for (; ++i < s;) {
            var l = t[i],
                f = null == n ? l : n(l);if (l = r || 0 !== l ? l : 0, a && f === f) {
              for (var p = c; p--;) {
                if (e[p] === f) continue t;
              }u.push(l);
            } else o(e, f, r) || u.push(l);
          }return u;
        }function Xn(t, e) {
          var n = !0;return bf(t, function (t, r, i) {
            return n = !!e(t, r, i);
          }), n;
        }function Kn(t, e, n) {
          for (var r = -1, i = t.length; ++r < i;) {
            var o = t[r],
                a = e(o);if (null != a && (s === it ? a === a && !_u(a) : n(a, s))) var s = a,
                u = o;
          }return u;
        }function Qn(t, e, n, r) {
          var i = t.length;for (n = ku(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === it || r > i ? i : ku(r), r < 0 && (r += i), r = n > r ? 0 : Au(r); n < r;) {
            t[n++] = e;
          }return t;
        }function tr(t, e) {
          var n = [];return bf(t, function (t, r, i) {
            e(t, r, i) && n.push(t);
          }), n;
        }function er(t, e, n, r, i) {
          var o = -1,
              a = t.length;for (n || (n = Po), i || (i = []); ++o < a;) {
            var s = t[o];e > 0 && n(s) ? e > 1 ? er(s, e - 1, n, r, i) : g(i, s) : r || (i[i.length] = s);
          }return i;
        }function nr(t, e) {
          return t && wf(t, e, Wu);
        }function or(t, e) {
          return t && xf(t, e, Wu);
        }function ar(t, e) {
          return p(e, function (e) {
            return ou(t[e]);
          });
        }function ur(t, e) {
          e = ki(e, t);for (var n = 0, r = e.length; null != t && n < r;) {
            t = t[ra(e[n++])];
          }return n && n == r ? t : it;
        }function cr(t, e, n) {
          var r = e(t);return wp(t) ? r : g(r, n(t));
        }function fr(t) {
          return null == t ? t === it ? se : Qt : Pl && Pl in fl(t) ? So(t) : Go(t);
        }function pr(t, e) {
          return t > e;
        }function br(t, e) {
          return null != t && _l.call(t, e);
        }function Cr(t, e) {
          return null != t && e in fl(t);
        }function $r(t, e, n) {
          return t >= Gl(e, n) && t < Jl(e, n);
        }function kr(t, e, n) {
          for (var r = n ? h : d, i = t[0].length, o = t.length, a = o, s = al(o), u = 1 / 0, c = []; a--;) {
            var l = t[a];a && e && (l = v(l, R(e))), u = Gl(l.length, u), s[a] = !n && (e || i >= 120 && l.length >= 120) ? new yn(a && l) : it;
          }l = t[0];var f = -1,
              p = s[0];t: for (; ++f < i && c.length < u;) {
            var g = l[f],
                m = e ? e(g) : g;if (g = n || 0 !== g ? g : 0, !(p ? P(p, m) : r(c, m, n))) {
              for (a = o; --a;) {
                var y = s[a];if (!(y ? P(y, m) : r(t[a], m, n))) continue t;
              }p && p.push(m), c.push(g);
            }
          }return c;
        }function Ar(t, e, n, r) {
          return nr(t, function (t, i, o) {
            e(r, n(t), i, o);
          }), r;
        }function Er(t, e, n) {
          e = ki(e, t), t = Yo(t, e);var r = null == t ? t : t[ra($a(e))];return null == r ? it : s(r, t, n);
        }function Sr(t) {
          return cu(t) && fr(t) == Bt;
        }function Or(t) {
          return cu(t) && fr(t) == le;
        }function jr(t) {
          return cu(t) && fr(t) == Vt;
        }function Nr(t, e, n, r, i) {
          return t === e || (null == t || null == e || !cu(t) && !cu(e) ? t !== t && e !== e : Dr(t, e, n, r, Nr, i));
        }function Dr(t, e, n, r, i, o) {
          var a = wp(t),
              s = wp(e),
              u = a ? Ut : jf(t),
              c = s ? Ut : jf(e);u = u == Bt ? te : u, c = c == Bt ? te : c;var l = u == te,
              f = c == te,
              p = u == c;if (p && Cp(t)) {
            if (!Cp(e)) return !1;a = !0, l = !1;
          }if (p && !l) return o || (o = new wn()), a || Ep(t) ? mo(t, e, n, r, i, o) : yo(t, e, u, n, r, i, o);if (!(n & vt)) {
            var d = l && _l.call(t, "__wrapped__"),
                h = f && _l.call(e, "__wrapped__");if (d || h) {
              var v = d ? t.value() : t,
                  g = h ? e.value() : e;return o || (o = new wn()), i(v, g, n, r, o);
            }
          }return !!p && (o || (o = new wn()), bo(t, e, n, r, i, o));
        }function Ir(t) {
          return cu(t) && jf(t) == Zt;
        }function Rr(t, e, n, r) {
          var i = n.length,
              o = i,
              a = !r;if (null == t) return !o;for (t = fl(t); i--;) {
            var s = n[i];if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
          }for (; ++i < o;) {
            s = n[i];var u = s[0],
                c = t[u],
                l = s[1];if (a && s[2]) {
              if (c === it && !(u in t)) return !1;
            } else {
              var f = new wn();if (r) var p = r(c, l, u, t, e, f);if (!(p === it ? Nr(l, c, vt | gt, r, f) : p)) return !1;
            }
          }return !0;
        }function Lr(t) {
          if (!uu(t) || Uo(t)) return !1;var e = ou(t) ? kl : Je;return e.test(ia(t));
        }function Pr(t) {
          return cu(t) && fr(t) == re;
        }function Fr(t) {
          return cu(t) && jf(t) == ie;
        }function qr(t) {
          return cu(t) && su(t.length) && !!Zn[fr(t)];
        }function Mr(t) {
          return "function" == typeof t ? t : null == t ? Ic : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? wp(t) ? Vr(t[0], t[1]) : zr(t) : Bc(t);
        }function Hr(t) {
          if (!Wo(t)) return Kl(t);var e = [];for (var n in fl(t)) {
            _l.call(t, n) && "constructor" != n && e.push(n);
          }return e;
        }function Br(t) {
          if (!uu(t)) return Jo(t);var e = Wo(t),
              n = [];for (var r in t) {
            ("constructor" != r || !e && _l.call(t, r)) && n.push(r);
          }return n;
        }function Ur(t, e) {
          return t < e;
        }function Wr(t, e) {
          var n = -1,
              r = Gs(t) ? al(t.length) : [];return bf(t, function (t, i, o) {
            r[++n] = e(t, i, o);
          }), r;
        }function zr(t) {
          var e = Ao(t);return 1 == e.length && e[0][2] ? Vo(e[0][0], e[0][1]) : function (n) {
            return n === t || Rr(n, t, e);
          };
        }function Vr(t, e) {
          return Mo(t) && zo(e) ? Vo(ra(t), e) : function (n) {
            var r = Hu(n, t);return r === it && r === e ? Uu(n, t) : Nr(e, r, vt | gt);
          };
        }function Xr(t, e, n, r, i) {
          t !== e && wf(e, function (o, a) {
            if (uu(o)) i || (i = new wn()), Kr(t, e, a, n, Xr, r, i);else {
              var s = r ? r(t[a], o, a + "", t, e, i) : it;s === it && (s = o), jn(t, a, s);
            }
          }, zu);
        }function Kr(t, e, n, r, i, o, a) {
          var s = t[n],
              u = e[n],
              c = a.get(u);if (c) return void jn(t, n, c);var l = o ? o(s, u, n + "", t, e, a) : it,
              f = l === it;if (f) {
            var p = wp(u),
                d = !p && Cp(u),
                h = !p && !d && Ep(u);l = u, p || d || h ? wp(s) ? l = s : Zs(s) ? l = Mi(s) : d ? (f = !1, l = Ei(u, !0)) : h ? (f = !1, l = Ri(u, !0)) : l = [] : mu(u) || _p(u) ? (l = s, _p(s) ? l = Su(s) : (!uu(s) || r && ou(s)) && (l = Io(u))) : f = !1;
          }f && (a.set(u, l), i(l, u, r, o, a), a.delete(u)), jn(t, n, l);
        }function Jr(t, e) {
          var n = t.length;if (n) return e += e < 0 ? n : 0, Fo(e, n) ? t[e] : it;
        }function Gr(t, e, n) {
          var r = -1;e = v(e.length ? e : [Ic], R($o()));var i = Wr(t, function (t, n, i) {
            var o = v(e, function (e) {
              return e(t);
            });return { criteria: o, index: ++r, value: t };
          });return j(i, function (t, e) {
            return Pi(t, e, n);
          });
        }function Zr(t, e) {
          return Yr(t, e, function (e, n) {
            return Uu(t, n);
          });
        }function Yr(t, e, n) {
          for (var r = -1, i = e.length, o = {}; ++r < i;) {
            var a = e[r],
                s = ur(t, a);n(s, a) && ui(o, ki(a, t), s);
          }return o;
        }function Qr(t) {
          return function (e) {
            return ur(e, t);
          };
        }function ti(t, e, n, r) {
          var i = r ? $ : T,
              o = -1,
              a = e.length,
              s = t;for (t === e && (e = Mi(e)), n && (s = v(t, R(n))); ++o < a;) {
            for (var u = 0, c = e[o], l = n ? n(c) : c; (u = i(s, l, u, r)) > -1;) {
              s !== t && Il.call(s, u, 1), Il.call(t, u, 1);
            }
          }return t;
        }function ei(t, e) {
          for (var n = t ? e.length : 0, r = n - 1; n--;) {
            var i = e[n];if (n == r || i !== o) {
              var o = i;Fo(i) ? Il.call(t, i, 1) : yi(t, i);
            }
          }return t;
        }function ni(t, e) {
          return t + Ul(Ql() * (e - t + 1));
        }function ri(t, e, n, r) {
          for (var i = -1, o = Jl(Bl((e - t) / (n || 1)), 0), a = al(o); o--;) {
            a[r ? o : ++i] = t, t += n;
          }return a;
        }function ii(t, e) {
          var n = "";if (!t || e < 1 || e > Rt) return n;do {
            e % 2 && (n += t), e = Ul(e / 2), e && (t += t);
          } while (e);return n;
        }function oi(t, e) {
          return Rf(Zo(t, e, Ic), t + "");
        }function ai(t) {
          return En(rc(t));
        }function si(t, e) {
          var n = rc(t);return na(n, qn(e, 0, n.length));
        }function ui(t, e, n, r) {
          if (!uu(t)) return t;e = ki(e, t);for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o;) {
            var u = ra(e[i]),
                c = n;if (i != a) {
              var l = s[u];c = r ? r(l, u, s) : it, c === it && (c = uu(l) ? l : Fo(e[i + 1]) ? [] : {});
            }Nn(s, u, c), s = s[u];
          }return t;
        }function ci(t) {
          return na(rc(t));
        }function li(t, e, n) {
          var r = -1,
              i = t.length;e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;for (var o = al(i); ++r < i;) {
            o[r] = t[r + e];
          }return o;
        }function fi(t, e) {
          var n;return bf(t, function (t, r, i) {
            return n = e(t, r, i), !n;
          }), !!n;
        }function pi(t, e, n) {
          var r = 0,
              i = null == t ? r : t.length;if ("number" == typeof e && e === e && i <= Mt) {
            for (; r < i;) {
              var o = r + i >>> 1,
                  a = t[o];null !== a && !_u(a) && (n ? a <= e : a < e) ? r = o + 1 : i = o;
            }return i;
          }return di(t, e, Ic, n);
        }function di(t, e, n, r) {
          e = n(e);for (var i = 0, o = null == t ? 0 : t.length, a = e !== e, s = null === e, u = _u(e), c = e === it; i < o;) {
            var l = Ul((i + o) / 2),
                f = n(t[l]),
                p = f !== it,
                d = null === f,
                h = f === f,
                v = _u(f);if (a) var g = r || h;else g = c ? h && (r || p) : s ? h && p && (r || !d) : u ? h && p && !d && (r || !v) : !d && !v && (r ? f <= e : f < e);g ? i = l + 1 : o = l;
          }return Gl(o, qt);
        }function hi(t, e) {
          for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
            var a = t[n],
                s = e ? e(a) : a;if (!n || !Js(s, u)) {
              var u = s;o[i++] = 0 === a ? 0 : a;
            }
          }return o;
        }function vi(t) {
          return "number" == typeof t ? t : _u(t) ? Pt : +t;
        }function gi(t) {
          if ("string" == typeof t) return t;if (wp(t)) return v(t, gi) + "";if (_u(t)) return mf ? mf.call(t) : "";var e = t + "";return "0" == e && 1 / t == -It ? "-0" : e;
        }function mi(t, e, n) {
          var r = -1,
              i = d,
              o = t.length,
              a = !0,
              s = [],
              u = s;if (n) a = !1, i = h;else if (o >= at) {
            var c = e ? null : Af(t);if (c) return J(c);a = !1, i = P, u = new yn();
          } else u = e ? [] : s;t: for (; ++r < o;) {
            var l = t[r],
                f = e ? e(l) : l;if (l = n || 0 !== l ? l : 0, a && f === f) {
              for (var p = u.length; p--;) {
                if (u[p] === f) continue t;
              }e && u.push(f), s.push(l);
            } else i(u, f, n) || (u !== s && u.push(f), s.push(l));
          }return s;
        }function yi(t, e) {
          return e = ki(e, t), t = Yo(t, e), null == t || delete t[ra($a(e))];
        }function bi(t, e, n, r) {
          return ui(t, e, n(ur(t, e)), r);
        }function _i(t, e, n, r) {
          for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t);) {}return n ? li(t, r ? 0 : o, r ? o + 1 : i) : li(t, r ? o + 1 : 0, r ? i : o);
        }function wi(t, e) {
          var n = t;return n instanceof _ && (n = n.value()), m(e, function (t, e) {
            return e.func.apply(e.thisArg, g([t], e.args));
          }, n);
        }function xi(t, e, n) {
          var r = t.length;if (r < 2) return r ? mi(t[0]) : [];for (var i = -1, o = al(r); ++i < r;) {
            for (var a = t[i], s = -1; ++s < r;) {
              s != i && (o[i] = Vn(o[i] || a, t[s], e, n));
            }
          }return mi(er(o, 1), e, n);
        }function Ci(t, e, n) {
          for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
            var s = r < o ? e[r] : it;n(a, t[r], s);
          }return a;
        }function Ti(t) {
          return Zs(t) ? t : [];
        }function $i(t) {
          return "function" == typeof t ? t : Ic;
        }function ki(t, e) {
          return wp(t) ? t : Mo(t, e) ? [t] : Lf(ju(t));
        }function Ai(t, e, n) {
          var r = t.length;return n = n === it ? r : n, !e && n >= r ? t : li(t, e, n);
        }function Ei(t, e) {
          if (e) return t.slice();var n = t.length,
              r = Ol ? Ol(n) : new t.constructor(n);return t.copy(r), r;
        }function Si(t) {
          var e = new t.constructor(t.byteLength);return new Sl(e).set(new Sl(t)), e;
        }function Oi(t, e) {
          var n = e ? Si(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.byteLength);
        }function ji(t, e, n) {
          var r = e ? n(V(t), pt) : V(t);return m(r, o, new t.constructor());
        }function Ni(t) {
          var e = new t.constructor(t.source, Ve.exec(t));return e.lastIndex = t.lastIndex, e;
        }function Di(t, e, n) {
          var r = e ? n(J(t), pt) : J(t);return m(r, a, new t.constructor());
        }function Ii(t) {
          return gf ? fl(gf.call(t)) : {};
        }function Ri(t, e) {
          var n = e ? Si(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.length);
        }function Li(t, e) {
          if (t !== e) {
            var n = t !== it,
                r = null === t,
                i = t === t,
                o = _u(t),
                a = e !== it,
                s = null === e,
                u = e === e,
                c = _u(e);if (!s && !c && !o && t > e || o && a && u && !s && !c || r && a && u || !n && u || !i) return 1;if (!r && !o && !c && t < e || c && n && i && !r && !o || s && n && i || !a && i || !u) return -1;
          }return 0;
        }function Pi(t, e, n) {
          for (var r = -1, i = t.criteria, o = e.criteria, a = i.length, s = n.length; ++r < a;) {
            var u = Li(i[r], o[r]);if (u) {
              if (r >= s) return u;var c = n[r];return u * ("desc" == c ? -1 : 1);
            }
          }return t.index - e.index;
        }function Fi(t, e, n, r) {
          for (var i = -1, o = t.length, a = n.length, s = -1, u = e.length, c = Jl(o - a, 0), l = al(u + c), f = !r; ++s < u;) {
            l[s] = e[s];
          }for (; ++i < a;) {
            (f || i < o) && (l[n[i]] = t[i]);
          }for (; c--;) {
            l[s++] = t[i++];
          }return l;
        }function qi(t, e, n, r) {
          for (var i = -1, o = t.length, a = -1, s = n.length, u = -1, c = e.length, l = Jl(o - s, 0), f = al(l + c), p = !r; ++i < l;) {
            f[i] = t[i];
          }for (var d = i; ++u < c;) {
            f[d + u] = e[u];
          }for (; ++a < s;) {
            (p || i < o) && (f[d + n[a]] = t[i++]);
          }return f;
        }function Mi(t, e) {
          var n = -1,
              r = t.length;for (e || (e = al(r)); ++n < r;) {
            e[n] = t[n];
          }return e;
        }function Hi(t, e, n, r) {
          var i = !n;n || (n = {});for (var o = -1, a = e.length; ++o < a;) {
            var s = e[o],
                u = r ? r(n[s], t[s], s, n, t) : it;u === it && (u = t[s]), i ? Pn(n, s, u) : Nn(n, s, u);
          }return n;
        }function Bi(t, e) {
          return Hi(t, Sf(t), e);
        }function Ui(t, e) {
          return Hi(t, Of(t), e);
        }function Wi(t, e) {
          return function (n, r) {
            var i = wp(n) ? u : In,
                o = e ? e() : {};return i(n, t, $o(r, 2), o);
          };
        }function zi(t) {
          return oi(function (e, n) {
            var r = -1,
                i = n.length,
                o = i > 1 ? n[i - 1] : it,
                a = i > 2 ? n[2] : it;for (o = t.length > 3 && "function" == typeof o ? (i--, o) : it, a && qo(n[0], n[1], a) && (o = i < 3 ? it : o, i = 1), e = fl(e); ++r < i;) {
              var s = n[r];s && t(e, s, r, o);
            }return e;
          });
        }function Vi(t, e) {
          return function (n, r) {
            if (null == n) return n;if (!Gs(n)) return t(n, r);for (var i = n.length, o = e ? i : -1, a = fl(n); (e ? o-- : ++o < i) && r(a[o], o, a) !== !1;) {}return n;
          };
        }function Xi(t) {
          return function (e, n, r) {
            for (var i = -1, o = fl(e), a = r(e), s = a.length; s--;) {
              var u = a[t ? s : ++i];if (n(o[u], u, o) === !1) break;
            }return e;
          };
        }function Ki(t, e, n) {
          function r() {
            var e = this && this !== sr && this instanceof r ? o : t;return e.apply(i ? n : this, arguments);
          }var i = e & mt,
              o = Zi(t);return r;
        }function Ji(t) {
          return function (e) {
            e = ju(e);var n = U(e) ? tt(e) : it,
                r = n ? n[0] : e.charAt(0),
                i = n ? Ai(n, 1).join("") : e.slice(1);return r[t]() + i;
          };
        }function Gi(t) {
          return function (e) {
            return m(Sc(cc(e).replace(Un, "")), t, "");
          };
        }function Zi(t) {
          return function () {
            var e = arguments;switch (e.length) {case 0:
                return new t();case 1:
                return new t(e[0]);case 2:
                return new t(e[0], e[1]);case 3:
                return new t(e[0], e[1], e[2]);case 4:
                return new t(e[0], e[1], e[2], e[3]);case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);}var n = yf(t.prototype),
                r = t.apply(n, e);return uu(r) ? r : n;
          };
        }function Yi(t, e, n) {
          function r() {
            for (var o = arguments.length, a = al(o), u = o, c = To(r); u--;) {
              a[u] = arguments[u];
            }var l = o < 3 && a[0] !== c && a[o - 1] !== c ? [] : K(a, c);if (o -= l.length, o < n) return co(t, e, eo, r.placeholder, it, a, l, it, it, n - o);var f = this && this !== sr && this instanceof r ? i : t;return s(f, this, a);
          }var i = Zi(t);
          return r;
        }function Qi(t) {
          return function (e, n, r) {
            var i = fl(e);if (!Gs(e)) {
              var o = $o(n, 3);e = Wu(e), n = function n(t) {
                return o(i[t], t, i);
              };
            }var a = t(e, n, r);return a > -1 ? i[o ? e[a] : a] : it;
          };
        }function to(t) {
          return _o(function (e) {
            var n = e.length,
                r = n,
                o = i.prototype.thru;for (t && e.reverse(); r--;) {
              var a = e[r];if ("function" != typeof a) throw new hl(ut);if (o && !s && "wrapper" == Co(a)) var s = new i([], !0);
            }for (r = s ? r : n; ++r < n;) {
              a = e[r];var u = Co(a),
                  c = "wrapper" == u ? Ef(a) : it;s = c && Bo(c[0]) && c[1] == (Tt | _t | xt | $t) && !c[4].length && 1 == c[9] ? s[Co(c[0])].apply(s, c[3]) : 1 == a.length && Bo(a) ? s[u]() : s.thru(a);
            }return function () {
              var t = arguments,
                  r = t[0];if (s && 1 == t.length && wp(r)) return s.plant(r).value();for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) {
                o = e[i].call(this, o);
              }return o;
            };
          });
        }function eo(t, e, n, r, i, o, a, s, u, c) {
          function l() {
            for (var m = arguments.length, y = al(m), b = m; b--;) {
              y[b] = arguments[b];
            }if (h) var _ = To(l),
                w = M(y, _);if (r && (y = Fi(y, r, i, h)), o && (y = qi(y, o, a, h)), m -= w, h && m < c) {
              var x = K(y, _);return co(t, e, eo, l.placeholder, n, y, x, s, u, c - m);
            }var C = p ? n : this,
                T = d ? C[t] : t;return m = y.length, s ? y = Qo(y, s) : v && m > 1 && y.reverse(), f && u < m && (y.length = u), this && this !== sr && this instanceof l && (T = g || Zi(T)), T.apply(C, y);
          }var f = e & Tt,
              p = e & mt,
              d = e & yt,
              h = e & (_t | wt),
              v = e & kt,
              g = d ? it : Zi(t);return l;
        }function no(t, e) {
          return function (n, r) {
            return Ar(n, t, e(r), {});
          };
        }function ro(t, e) {
          return function (n, r) {
            var i;if (n === it && r === it) return e;if (n !== it && (i = n), r !== it) {
              if (i === it) return r;"string" == typeof n || "string" == typeof r ? (n = gi(n), r = gi(r)) : (n = vi(n), r = vi(r)), i = t(n, r);
            }return i;
          };
        }function io(t) {
          return _o(function (e) {
            return e = v(e, R($o())), oi(function (n) {
              var r = this;return t(e, function (t) {
                return s(t, r, n);
              });
            });
          });
        }function oo(t, e) {
          e = e === it ? " " : gi(e);var n = e.length;if (n < 2) return n ? ii(e, t) : e;var r = ii(e, Bl(t / Q(e)));return U(e) ? Ai(tt(r), 0, t).join("") : r.slice(0, t);
        }function ao(t, e, n, r) {
          function i() {
            for (var e = -1, u = arguments.length, c = -1, l = r.length, f = al(l + u), p = this && this !== sr && this instanceof i ? a : t; ++c < l;) {
              f[c] = r[c];
            }for (; u--;) {
              f[c++] = arguments[++e];
            }return s(p, o ? n : this, f);
          }var o = e & mt,
              a = Zi(t);return i;
        }function so(t) {
          return function (e, n, r) {
            return r && "number" != typeof r && qo(e, n, r) && (n = r = it), e = $u(e), n === it ? (n = e, e = 0) : n = $u(n), r = r === it ? e < n ? 1 : -1 : $u(r), ri(e, n, r, t);
          };
        }function uo(t) {
          return function (e, n) {
            return "string" == typeof e && "string" == typeof n || (e = Eu(e), n = Eu(n)), t(e, n);
          };
        }function co(t, e, n, r, i, o, a, s, u, c) {
          var l = e & _t,
              f = l ? a : it,
              p = l ? it : a,
              d = l ? o : it,
              h = l ? it : o;e |= l ? xt : Ct, e &= ~(l ? Ct : xt), e & bt || (e &= ~(mt | yt));var v = [t, e, i, d, f, h, p, s, u, c],
              g = n.apply(it, v);return Bo(t) && Df(g, v), g.placeholder = r, ta(g, t, e);
        }function lo(t) {
          var e = ll[t];return function (t, n) {
            if (t = Eu(t), n = null == n ? 0 : Gl(ku(n), 292)) {
              var r = (ju(t) + "e").split("e"),
                  i = e(r[0] + "e" + (+r[1] + n));return r = (ju(i) + "e").split("e"), +(r[0] + "e" + (+r[1] - n));
            }return e(t);
          };
        }function fo(t) {
          return function (e) {
            var n = jf(e);return n == Zt ? V(e) : n == ie ? G(e) : I(e, t(e));
          };
        }function po(t, e, n, r, i, o, a, s) {
          var u = e & yt;if (!u && "function" != typeof t) throw new hl(ut);var c = r ? r.length : 0;if (c || (e &= ~(xt | Ct), r = i = it), a = a === it ? a : Jl(ku(a), 0), s = s === it ? s : ku(s), c -= i ? i.length : 0, e & Ct) {
            var l = r,
                f = i;r = i = it;
          }var p = u ? it : Ef(t),
              d = [t, e, n, r, i, l, f, o, a, s];if (p && Ko(d, p), t = d[0], e = d[1], n = d[2], r = d[3], i = d[4], s = d[9] = d[9] === it ? u ? 0 : t.length : Jl(d[9] - c, 0), !s && e & (_t | wt) && (e &= ~(_t | wt)), e && e != mt) h = e == _t || e == wt ? Yi(t, e, s) : e != xt && e != (mt | xt) || i.length ? eo.apply(it, d) : ao(t, e, n, r);else var h = Ki(t, e, n);var v = p ? Cf : Df;return ta(v(h, d), t, e);
        }function ho(t, e, n, r) {
          return t === it || Js(t, ml[n]) && !_l.call(r, n) ? e : t;
        }function vo(t, e, n, r, i, o) {
          return uu(t) && uu(e) && (o.set(e, t), Xr(t, e, it, vo, o), o.delete(e)), t;
        }function go(t) {
          return mu(t) ? it : t;
        }function mo(t, e, n, r, i, o) {
          var a = n & vt,
              s = t.length,
              u = e.length;if (s != u && !(a && u > s)) return !1;var c = o.get(t);if (c && o.get(e)) return c == e;var l = -1,
              f = !0,
              p = n & gt ? new yn() : it;for (o.set(t, e), o.set(e, t); ++l < s;) {
            var d = t[l],
                h = e[l];if (r) var v = a ? r(h, d, l, e, t, o) : r(d, h, l, t, e, o);if (v !== it) {
              if (v) continue;f = !1;break;
            }if (p) {
              if (!b(e, function (t, e) {
                if (!P(p, e) && (d === t || i(d, t, n, r, o))) return p.push(e);
              })) {
                f = !1;break;
              }
            } else if (d !== h && !i(d, h, n, r, o)) {
              f = !1;break;
            }
          }return o.delete(t), o.delete(e), f;
        }function yo(t, e, n, r, i, o, a) {
          switch (n) {case fe:
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case le:
              return !(t.byteLength != e.byteLength || !o(new Sl(t), new Sl(e)));case zt:case Vt:case Yt:
              return Js(+t, +e);case Kt:
              return t.name == e.name && t.message == e.message;case re:case oe:
              return t == e + "";case Zt:
              var s = V;case ie:
              var u = r & vt;if (s || (s = J), t.size != e.size && !u) return !1;var c = a.get(t);if (c) return c == e;r |= gt, a.set(t, e);var l = mo(s(t), s(e), r, i, o, a);return a.delete(t), l;case ae:
              if (gf) return gf.call(t) == gf.call(e);}return !1;
        }function bo(t, e, n, r, i, o) {
          var a = n & vt,
              s = wo(t),
              u = s.length,
              c = wo(e),
              l = c.length;if (u != l && !a) return !1;for (var f = u; f--;) {
            var p = s[f];if (!(a ? p in e : _l.call(e, p))) return !1;
          }var d = o.get(t);if (d && o.get(e)) return d == e;var h = !0;o.set(t, e), o.set(e, t);for (var v = a; ++f < u;) {
            p = s[f];var g = t[p],
                m = e[p];if (r) var y = a ? r(m, g, p, e, t, o) : r(g, m, p, t, e, o);if (!(y === it ? g === m || i(g, m, n, r, o) : y)) {
              h = !1;break;
            }v || (v = "constructor" == p);
          }if (h && !v) {
            var b = t.constructor,
                _ = e.constructor;b != _ && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (h = !1);
          }return o.delete(t), o.delete(e), h;
        }function _o(t) {
          return Rf(Zo(t, it, ma), t + "");
        }function wo(t) {
          return cr(t, Wu, Sf);
        }function xo(t) {
          return cr(t, zu, Of);
        }function Co(t) {
          for (var e = t.name + "", n = cf[e], r = _l.call(cf, e) ? n.length : 0; r--;) {
            var i = n[r],
                o = i.func;if (null == o || o == t) return i.name;
          }return e;
        }function To(t) {
          var e = _l.call(n, "placeholder") ? n : t;return e.placeholder;
        }function $o() {
          var t = n.iteratee || Rc;return t = t === Rc ? Mr : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }function ko(t, e) {
          var n = t.__data__;return Ho(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        }function Ao(t) {
          for (var e = Wu(t), n = e.length; n--;) {
            var r = e[n],
                i = t[r];e[n] = [r, i, zo(i)];
          }return e;
        }function Eo(t, e) {
          var n = B(t, e);return Lr(n) ? n : it;
        }function So(t) {
          var e = _l.call(t, Pl),
              n = t[Pl];try {
            t[Pl] = it;var r = !0;
          } catch (t) {}var i = Cl.call(t);return r && (e ? t[Pl] = n : delete t[Pl]), i;
        }function Oo(t, e, n) {
          for (var r = -1, i = n.length; ++r < i;) {
            var o = n[r],
                a = o.size;switch (o.type) {case "drop":
                t += a;break;case "dropRight":
                e -= a;break;case "take":
                e = Gl(e, t + a);break;case "takeRight":
                t = Jl(t, e - a);}
          }return { start: t, end: e };
        }function jo(t) {
          var e = t.match(He);return e ? e[1].split(Be) : [];
        }function No(t, e, n) {
          e = ki(e, t);for (var r = -1, i = e.length, o = !1; ++r < i;) {
            var a = ra(e[r]);if (!(o = null != t && n(t, a))) break;t = t[a];
          }return o || ++r != i ? o : (i = null == t ? 0 : t.length, !!i && su(i) && Fo(a, i) && (wp(t) || _p(t)));
        }function Do(t) {
          var e = t.length,
              n = t.constructor(e);return e && "string" == typeof t[0] && _l.call(t, "index") && (n.index = t.index, n.input = t.input), n;
        }function Io(t) {
          return "function" != typeof t.constructor || Wo(t) ? {} : yf(jl(t));
        }function Ro(t, e, n, r) {
          var i = t.constructor;switch (e) {case le:
              return Si(t);case zt:case Vt:
              return new i(+t);case fe:
              return Oi(t, r);case pe:case de:case he:case ve:case ge:case me:case ye:case be:case _e:
              return Ri(t, r);case Zt:
              return ji(t, r, n);case Yt:case oe:
              return new i(t);case re:
              return Ni(t);case ie:
              return Di(t, r, n);case ae:
              return Ii(t);}
        }function Lo(t, e) {
          var n = e.length;if (!n) return t;var r = n - 1;return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(Me, "{\n/* [wrapped with " + e + "] */\n");
        }function Po(t) {
          return wp(t) || _p(t) || !!(Rl && t && t[Rl]);
        }function Fo(t, e) {
          return e = null == e ? Rt : e, !!e && ("number" == typeof t || Ze.test(t)) && t > -1 && t % 1 == 0 && t < e;
        }function qo(t, e, n) {
          if (!uu(n)) return !1;var r = typeof e === "undefined" ? "undefined" : _typeof(e);return !!("number" == r ? Gs(n) && Fo(e, n.length) : "string" == r && e in n) && Js(n[e], t);
        }function Mo(t, e) {
          if (wp(t)) return !1;var n = typeof t === "undefined" ? "undefined" : _typeof(t);return !("number" != n && "symbol" != n && "boolean" != n && null != t && !_u(t)) || Ne.test(t) || !je.test(t) || null != e && t in fl(e);
        }function Ho(t) {
          var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        }function Bo(t) {
          var e = Co(t),
              r = n[e];if ("function" != typeof r || !(e in _.prototype)) return !1;if (t === r) return !0;var i = Ef(r);return !!i && t === i[0];
        }function Uo(t) {
          return !!xl && xl in t;
        }function Wo(t) {
          var e = t && t.constructor,
              n = "function" == typeof e && e.prototype || ml;return t === n;
        }function zo(t) {
          return t === t && !uu(t);
        }function Vo(t, e) {
          return function (n) {
            return null != n && n[t] === e && (e !== it || t in fl(n));
          };
        }function Xo(t) {
          var e = Rs(t, function (t) {
            return n.size === lt && n.clear(), t;
          }),
              n = e.cache;return e;
        }function Ko(t, e) {
          var n = t[1],
              r = e[1],
              i = n | r,
              o = i < (mt | yt | Tt),
              a = r == Tt && n == _t || r == Tt && n == $t && t[7].length <= e[8] || r == (Tt | $t) && e[7].length <= e[8] && n == _t;if (!o && !a) return t;r & mt && (t[2] = e[2], i |= n & mt ? 0 : bt);var s = e[3];if (s) {
            var u = t[3];t[3] = u ? Fi(u, s, e[4]) : s, t[4] = u ? K(t[3], ft) : e[4];
          }return s = e[5], s && (u = t[5], t[5] = u ? qi(u, s, e[6]) : s, t[6] = u ? K(t[5], ft) : e[6]), s = e[7], s && (t[7] = s), r & Tt && (t[8] = null == t[8] ? e[8] : Gl(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t;
        }function Jo(t) {
          var e = [];if (null != t) for (var n in fl(t)) {
            e.push(n);
          }return e;
        }function Go(t) {
          return Cl.call(t);
        }function Zo(t, e, n) {
          return e = Jl(e === it ? t.length - 1 : e, 0), function () {
            for (var r = arguments, i = -1, o = Jl(r.length - e, 0), a = al(o); ++i < o;) {
              a[i] = r[e + i];
            }i = -1;for (var u = al(e + 1); ++i < e;) {
              u[i] = r[i];
            }return u[e] = n(a), s(t, this, u);
          };
        }function Yo(t, e) {
          return e.length < 2 ? t : ur(t, li(e, 0, -1));
        }function Qo(t, e) {
          for (var n = t.length, r = Gl(e.length, n), i = Mi(t); r--;) {
            var o = e[r];t[r] = Fo(o, n) ? i[o] : it;
          }return t;
        }function ta(t, e, n) {
          var r = e + "";return Rf(t, Lo(r, oa(jo(r), n)));
        }function ea(t) {
          var e = 0,
              n = 0;return function () {
            var r = Zl(),
                i = Ot - (r - n);if (n = r, i > 0) {
              if (++e >= St) return arguments[0];
            } else e = 0;return t.apply(it, arguments);
          };
        }function na(t, e) {
          var n = -1,
              r = t.length,
              i = r - 1;for (e = e === it ? r : e; ++n < e;) {
            var o = ni(n, i),
                a = t[o];t[o] = t[n], t[n] = a;
          }return t.length = e, t;
        }function ra(t) {
          if ("string" == typeof t || _u(t)) return t;var e = t + "";return "0" == e && 1 / t == -It ? "-0" : e;
        }function ia(t) {
          if (null != t) {
            try {
              return bl.call(t);
            } catch (t) {}try {
              return t + "";
            } catch (t) {}
          }return "";
        }function oa(t, e) {
          return c(Ht, function (n) {
            var r = "_." + n[0];e & n[1] && !d(t, r) && t.push(r);
          }), t.sort();
        }function aa(t) {
          if (t instanceof _) return t.clone();var e = new i(t.__wrapped__, t.__chain__);return e.__actions__ = Mi(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
        }function sa(t, e, n) {
          e = (n ? qo(t, e, n) : e === it) ? 1 : Jl(ku(e), 0);var r = null == t ? 0 : t.length;if (!r || e < 1) return [];for (var i = 0, o = 0, a = al(Bl(r / e)); i < r;) {
            a[o++] = li(t, i, i += e);
          }return a;
        }function ua(t) {
          for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n;) {
            var o = t[e];o && (i[r++] = o);
          }return i;
        }function ca() {
          var t = arguments.length;if (!t) return [];for (var e = al(t - 1), n = arguments[0], r = t; r--;) {
            e[r - 1] = arguments[r];
          }return g(wp(n) ? Mi(n) : [n], er(e, 1));
        }function la(t, e, n) {
          var r = null == t ? 0 : t.length;return r ? (e = n || e === it ? 1 : ku(e), li(t, e < 0 ? 0 : e, r)) : [];
        }function fa(t, e, n) {
          var r = null == t ? 0 : t.length;return r ? (e = n || e === it ? 1 : ku(e), e = r - e, li(t, 0, e < 0 ? 0 : e)) : [];
        }function pa(t, e) {
          return t && t.length ? _i(t, $o(e, 3), !0, !0) : [];
        }function da(t, e) {
          return t && t.length ? _i(t, $o(e, 3), !0) : [];
        }function ha(t, e, n, r) {
          var i = null == t ? 0 : t.length;return i ? (n && "number" != typeof n && qo(t, e, n) && (n = 0, r = i), Qn(t, e, n, r)) : [];
        }function va(t, e, n) {
          var r = null == t ? 0 : t.length;if (!r) return -1;var i = null == n ? 0 : ku(n);return i < 0 && (i = Jl(r + i, 0)), C(t, $o(e, 3), i);
        }function ga(t, e, n) {
          var r = null == t ? 0 : t.length;if (!r) return -1;var i = r - 1;return n !== it && (i = ku(n), i = n < 0 ? Jl(r + i, 0) : Gl(i, r - 1)), C(t, $o(e, 3), i, !0);
        }function ma(t) {
          var e = null == t ? 0 : t.length;return e ? er(t, 1) : [];
        }function ya(t) {
          var e = null == t ? 0 : t.length;return e ? er(t, It) : [];
        }function ba(t, e) {
          var n = null == t ? 0 : t.length;return n ? (e = e === it ? 1 : ku(e), er(t, e)) : [];
        }function _a(t) {
          for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n;) {
            var i = t[e];r[i[0]] = i[1];
          }return r;
        }function wa(t) {
          return t && t.length ? t[0] : it;
        }function xa(t, e, n) {
          var r = null == t ? 0 : t.length;if (!r) return -1;var i = null == n ? 0 : ku(n);return i < 0 && (i = Jl(r + i, 0)), T(t, e, i);
        }function Ca(t) {
          var e = null == t ? 0 : t.length;return e ? li(t, 0, -1) : [];
        }function Ta(t, e) {
          return null == t ? "" : Xl.call(t, e);
        }function $a(t) {
          var e = null == t ? 0 : t.length;return e ? t[e - 1] : it;
        }function ka(t, e, n) {
          var r = null == t ? 0 : t.length;if (!r) return -1;var i = r;return n !== it && (i = ku(n), i = i < 0 ? Jl(r + i, 0) : Gl(i, r - 1)), e === e ? Y(t, e, i) : C(t, k, i, !0);
        }function Aa(t, e) {
          return t && t.length ? Jr(t, ku(e)) : it;
        }function Ea(t, e) {
          return t && t.length && e && e.length ? ti(t, e) : t;
        }function Sa(t, e, n) {
          return t && t.length && e && e.length ? ti(t, e, $o(n, 2)) : t;
        }function Oa(t, e, n) {
          return t && t.length && e && e.length ? ti(t, e, it, n) : t;
        }function ja(t, e) {
          var n = [];if (!t || !t.length) return n;var r = -1,
              i = [],
              o = t.length;for (e = $o(e, 3); ++r < o;) {
            var a = t[r];e(a, r, t) && (n.push(a), i.push(r));
          }return ei(t, i), n;
        }function Na(t) {
          return null == t ? t : tf.call(t);
        }function Da(t, e, n) {
          var r = null == t ? 0 : t.length;return r ? (n && "number" != typeof n && qo(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : ku(e), n = n === it ? r : ku(n)), li(t, e, n)) : [];
        }function Ia(t, e) {
          return pi(t, e);
        }function Ra(t, e, n) {
          return di(t, e, $o(n, 2));
        }function La(t, e) {
          var n = null == t ? 0 : t.length;if (n) {
            var r = pi(t, e);if (r < n && Js(t[r], e)) return r;
          }return -1;
        }function Pa(t, e) {
          return pi(t, e, !0);
        }function Fa(t, e, n) {
          return di(t, e, $o(n, 2), !0);
        }function qa(t, e) {
          var n = null == t ? 0 : t.length;if (n) {
            var r = pi(t, e, !0) - 1;if (Js(t[r], e)) return r;
          }return -1;
        }function Ma(t) {
          return t && t.length ? hi(t) : [];
        }function Ha(t, e) {
          return t && t.length ? hi(t, $o(e, 2)) : [];
        }function Ba(t) {
          var e = null == t ? 0 : t.length;return e ? li(t, 1, e) : [];
        }function Ua(t, e, n) {
          return t && t.length ? (e = n || e === it ? 1 : ku(e), li(t, 0, e < 0 ? 0 : e)) : [];
        }function Wa(t, e, n) {
          var r = null == t ? 0 : t.length;return r ? (e = n || e === it ? 1 : ku(e), e = r - e, li(t, e < 0 ? 0 : e, r)) : [];
        }function za(t, e) {
          return t && t.length ? _i(t, $o(e, 3), !1, !0) : [];
        }function Va(t, e) {
          return t && t.length ? _i(t, $o(e, 3)) : [];
        }function Xa(t) {
          return t && t.length ? mi(t) : [];
        }function Ka(t, e) {
          return t && t.length ? mi(t, $o(e, 2)) : [];
        }function Ja(t, e) {
          return e = "function" == typeof e ? e : it, t && t.length ? mi(t, it, e) : [];
        }function Ga(t) {
          if (!t || !t.length) return [];var e = 0;return t = p(t, function (t) {
            if (Zs(t)) return e = Jl(t.length, e), !0;
          }), D(e, function (e) {
            return v(t, E(e));
          });
        }function Za(t, e) {
          if (!t || !t.length) return [];var n = Ga(t);return null == e ? n : v(n, function (t) {
            return s(e, it, t);
          });
        }function Ya(t, e) {
          return Ci(t || [], e || [], Nn);
        }function Qa(t, e) {
          return Ci(t || [], e || [], ui);
        }function ts(t) {
          var e = n(t);return e.__chain__ = !0, e;
        }function es(t, e) {
          return e(t), t;
        }function ns(t, e) {
          return e(t);
        }function rs() {
          return ts(this);
        }function is() {
          return new i(this.value(), this.__chain__);
        }function os() {
          this.__values__ === it && (this.__values__ = Tu(this.value()));var t = this.__index__ >= this.__values__.length,
              e = t ? it : this.__values__[this.__index__++];return { done: t, value: e };
        }function as() {
          return this;
        }function ss(t) {
          for (var e, n = this; n instanceof r;) {
            var i = aa(n);i.__index__ = 0, i.__values__ = it, e ? o.__wrapped__ = i : e = i;var o = i;n = n.__wrapped__;
          }return o.__wrapped__ = t, e;
        }function us() {
          var t = this.__wrapped__;if (t instanceof _) {
            var e = t;return this.__actions__.length && (e = new _(this)), e = e.reverse(), e.__actions__.push({ func: ns, args: [Na], thisArg: it }), new i(e, this.__chain__);
          }return this.thru(Na);
        }function cs() {
          return wi(this.__wrapped__, this.__actions__);
        }function ls(t, e, n) {
          var r = wp(t) ? f : Xn;return n && qo(t, e, n) && (e = it), r(t, $o(e, 3));
        }function fs(t, e) {
          var n = wp(t) ? p : tr;return n(t, $o(e, 3));
        }function ps(t, e) {
          return er(ys(t, e), 1);
        }function ds(t, e) {
          return er(ys(t, e), It);
        }function hs(t, e, n) {
          return n = n === it ? 1 : ku(n), er(ys(t, e), n);
        }function vs(t, e) {
          var n = wp(t) ? c : bf;return n(t, $o(e, 3));
        }function gs(t, e) {
          var n = wp(t) ? l : _f;return n(t, $o(e, 3));
        }function ms(t, e, n, r) {
          t = Gs(t) ? t : rc(t), n = n && !r ? ku(n) : 0;var i = t.length;return n < 0 && (n = Jl(i + n, 0)), bu(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && T(t, e, n) > -1;
        }function ys(t, e) {
          var n = wp(t) ? v : Wr;return n(t, $o(e, 3));
        }function bs(t, e, n, r) {
          return null == t ? [] : (wp(e) || (e = null == e ? [] : [e]), n = r ? it : n, wp(n) || (n = null == n ? [] : [n]), Gr(t, e, n));
        }function _s(t, e, n) {
          var r = wp(t) ? m : O,
              i = arguments.length < 3;return r(t, $o(e, 4), n, i, bf);
        }function ws(t, e, n) {
          var r = wp(t) ? y : O,
              i = arguments.length < 3;return r(t, $o(e, 4), n, i, _f);
        }function xs(t, e) {
          var n = wp(t) ? p : tr;return n(t, Ls($o(e, 3)));
        }function Cs(t) {
          var e = wp(t) ? En : ai;return e(t);
        }function Ts(t, e, n) {
          e = (n ? qo(t, e, n) : e === it) ? 1 : ku(e);var r = wp(t) ? Sn : si;return r(t, e);
        }function $s(t) {
          var e = wp(t) ? On : ci;return e(t);
        }function ks(t) {
          if (null == t) return 0;if (Gs(t)) return bu(t) ? Q(t) : t.length;var e = jf(t);return e == Zt || e == ie ? t.size : Hr(t).length;
        }function As(t, e, n) {
          var r = wp(t) ? b : fi;return n && qo(t, e, n) && (e = it), r(t, $o(e, 3));
        }function Es(t, e) {
          if ("function" != typeof e) throw new hl(ut);return t = ku(t), function () {
            if (--t < 1) return e.apply(this, arguments);
          };
        }function Ss(t, e, n) {
          return e = n ? it : e, e = t && null == e ? t.length : e, po(t, Tt, it, it, it, it, e);
        }function Os(t, e) {
          var n;if ("function" != typeof e) throw new hl(ut);return t = ku(t), function () {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = it), n;
          };
        }function js(t, e, n) {
          e = n ? it : e;var r = po(t, _t, it, it, it, it, it, e);return r.placeholder = js.placeholder, r;
        }function Ns(t, e, n) {
          e = n ? it : e;var r = po(t, wt, it, it, it, it, it, e);return r.placeholder = Ns.placeholder, r;
        }function Ds(t, e, n) {
          function r(e) {
            var n = p,
                r = d;return p = d = it, y = e, v = t.apply(r, n);
          }function i(t) {
            return y = t, g = If(s, e), b ? r(t) : v;
          }function o(t) {
            var n = t - m,
                r = t - y,
                i = e - n;return _ ? Gl(i, h - r) : i;
          }function a(t) {
            var n = t - m,
                r = t - y;return m === it || n >= e || n < 0 || _ && r >= h;
          }function s() {
            var t = cp();return a(t) ? u(t) : void (g = If(s, o(t)));
          }function u(t) {
            return g = it, w && p ? r(t) : (p = d = it, v);
          }function c() {
            g !== it && kf(g), y = 0, p = m = d = g = it;
          }function l() {
            return g === it ? v : u(cp());
          }function f() {
            var t = cp(),
                n = a(t);if (p = arguments, d = this, m = t, n) {
              if (g === it) return i(m);if (_) return g = If(s, e), r(m);
            }return g === it && (g = If(s, e)), v;
          }var p,
              d,
              h,
              v,
              g,
              m,
              y = 0,
              b = !1,
              _ = !1,
              w = !0;if ("function" != typeof t) throw new hl(ut);return e = Eu(e) || 0, uu(n) && (b = !!n.leading, _ = "maxWait" in n, h = _ ? Jl(Eu(n.maxWait) || 0, e) : h, w = "trailing" in n ? !!n.trailing : w), f.cancel = c, f.flush = l, f;
        }function Is(t) {
          return po(t, kt);
        }function Rs(t, e) {
          if ("function" != typeof t || null != e && "function" != typeof e) throw new hl(ut);var n = function n() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;if (o.has(i)) return o.get(i);var a = t.apply(this, r);return n.cache = o.set(i, a) || o, a;
          };return n.cache = new (Rs.Cache || pn)(), n;
        }function Ls(t) {
          if ("function" != typeof t) throw new hl(ut);return function () {
            var e = arguments;switch (e.length) {case 0:
                return !t.call(this);case 1:
                return !t.call(this, e[0]);case 2:
                return !t.call(this, e[0], e[1]);case 3:
                return !t.call(this, e[0], e[1], e[2]);}return !t.apply(this, e);
          };
        }function Ps(t) {
          return Os(2, t);
        }function Fs(t, e) {
          if ("function" != typeof t) throw new hl(ut);return e = e === it ? e : ku(e), oi(t, e);
        }function qs(t, e) {
          if ("function" != typeof t) throw new hl(ut);return e = null == e ? 0 : Jl(ku(e), 0), oi(function (n) {
            var r = n[e],
                i = Ai(n, 0, e);return r && g(i, r), s(t, this, i);
          });
        }function Ms(t, e, n) {
          var r = !0,
              i = !0;if ("function" != typeof t) throw new hl(ut);return uu(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ds(t, e, { leading: r, maxWait: e, trailing: i });
        }function Hs(t) {
          return Ss(t, 1);
        }function Bs(t, e) {
          return vp($i(e), t);
        }function Us() {
          if (!arguments.length) return [];var t = arguments[0];return wp(t) ? t : [t];
        }function Ws(t) {
          return Mn(t, ht);
        }function zs(t, e) {
          return e = "function" == typeof e ? e : it, Mn(t, ht, e);
        }function Vs(t) {
          return Mn(t, pt | ht);
        }function Xs(t, e) {
          return e = "function" == typeof e ? e : it, Mn(t, pt | ht, e);
        }function Ks(t, e) {
          return null == e || Bn(t, e, Wu(e));
        }function Js(t, e) {
          return t === e || t !== t && e !== e;
        }function Gs(t) {
          return null != t && su(t.length) && !ou(t);
        }function Zs(t) {
          return cu(t) && Gs(t);
        }function Ys(t) {
          return t === !0 || t === !1 || cu(t) && fr(t) == zt;
        }function Qs(t) {
          return cu(t) && 1 === t.nodeType && !mu(t);
        }function tu(t) {
          if (null == t) return !0;if (Gs(t) && (wp(t) || "string" == typeof t || "function" == typeof t.splice || Cp(t) || Ep(t) || _p(t))) return !t.length;var e = jf(t);if (e == Zt || e == ie) return !t.size;if (Wo(t)) return !Hr(t).length;for (var n in t) {
            if (_l.call(t, n)) return !1;
          }return !0;
        }function eu(t, e) {
          return Nr(t, e);
        }function nu(t, e, n) {
          n = "function" == typeof n ? n : it;var r = n ? n(t, e) : it;return r === it ? Nr(t, e, it, n) : !!r;
        }function ru(t) {
          if (!cu(t)) return !1;var e = fr(t);return e == Kt || e == Xt || "string" == typeof t.message && "string" == typeof t.name && !mu(t);
        }function iu(t) {
          return "number" == typeof t && Vl(t);
        }function ou(t) {
          if (!uu(t)) return !1;var e = fr(t);return e == Jt || e == Gt || e == Wt || e == ne;
        }function au(t) {
          return "number" == typeof t && t == ku(t);
        }function su(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Rt;
        }function uu(t) {
          var e = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && ("object" == e || "function" == e);
        }function cu(t) {
          return null != t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
        }function lu(t, e) {
          return t === e || Rr(t, e, Ao(e));
        }function fu(t, e, n) {
          return n = "function" == typeof n ? n : it, Rr(t, e, Ao(e), n);
        }function pu(t) {
          return gu(t) && t != +t;
        }function du(t) {
          if (Nf(t)) throw new ul(st);return Lr(t);
        }function hu(t) {
          return null === t;
        }function vu(t) {
          return null == t;
        }function gu(t) {
          return "number" == typeof t || cu(t) && fr(t) == Yt;
        }function mu(t) {
          if (!cu(t) || fr(t) != te) return !1;var e = jl(t);if (null === e) return !0;var n = _l.call(e, "constructor") && e.constructor;return "function" == typeof n && n instanceof n && bl.call(n) == Tl;
        }function yu(t) {
          return au(t) && t >= -Rt && t <= Rt;
        }function bu(t) {
          return "string" == typeof t || !wp(t) && cu(t) && fr(t) == oe;
        }function _u(t) {
          return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || cu(t) && fr(t) == ae;
        }function wu(t) {
          return t === it;
        }function xu(t) {
          return cu(t) && jf(t) == ue;
        }function Cu(t) {
          return cu(t) && fr(t) == ce;
        }function Tu(t) {
          if (!t) return [];if (Gs(t)) return bu(t) ? tt(t) : Mi(t);if (Ll && t[Ll]) return z(t[Ll]());var e = jf(t),
              n = e == Zt ? V : e == ie ? J : rc;return n(t);
        }function $u(t) {
          if (!t) return 0 === t ? t : 0;if (t = Eu(t), t === It || t === -It) {
            var e = t < 0 ? -1 : 1;return e * Lt;
          }return t === t ? t : 0;
        }function ku(t) {
          var e = $u(t),
              n = e % 1;return e === e ? n ? e - n : e : 0;
        }function Au(t) {
          return t ? qn(ku(t), 0, Ft) : 0;
        }function Eu(t) {
          if ("number" == typeof t) return t;if (_u(t)) return Pt;if (uu(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;t = uu(e) ? e + "" : e;
          }if ("string" != typeof t) return 0 === t ? t : +t;t = t.replace(Pe, "");var n = Ke.test(t);return n || Ge.test(t) ? ir(t.slice(2), n ? 2 : 8) : Xe.test(t) ? Pt : +t;
        }function Su(t) {
          return Hi(t, zu(t));
        }function Ou(t) {
          return t ? qn(ku(t), -Rt, Rt) : 0 === t ? t : 0;
        }function ju(t) {
          return null == t ? "" : gi(t);
        }function Nu(t, e) {
          var n = yf(t);return null == e ? n : Rn(n, e);
        }function Du(t, e) {
          return x(t, $o(e, 3), nr);
        }function Iu(t, e) {
          return x(t, $o(e, 3), or);
        }function Ru(t, e) {
          return null == t ? t : wf(t, $o(e, 3), zu);
        }function Lu(t, e) {
          return null == t ? t : xf(t, $o(e, 3), zu);
        }function Pu(t, e) {
          return t && nr(t, $o(e, 3));
        }function Fu(t, e) {
          return t && or(t, $o(e, 3));
        }function qu(t) {
          return null == t ? [] : ar(t, Wu(t));
        }function Mu(t) {
          return null == t ? [] : ar(t, zu(t));
        }function Hu(t, e, n) {
          var r = null == t ? it : ur(t, e);return r === it ? n : r;
        }function Bu(t, e) {
          return null != t && No(t, e, br);
        }function Uu(t, e) {
          return null != t && No(t, e, Cr);
        }function Wu(t) {
          return Gs(t) ? An(t) : Hr(t);
        }function zu(t) {
          return Gs(t) ? An(t, !0) : Br(t);
        }function Vu(t, e) {
          var n = {};return e = $o(e, 3), nr(t, function (t, r, i) {
            Pn(n, e(t, r, i), t);
          }), n;
        }function Xu(t, e) {
          var n = {};return e = $o(e, 3), nr(t, function (t, r, i) {
            Pn(n, r, e(t, r, i));
          }), n;
        }function Ku(t, e) {
          return Ju(t, Ls($o(e)));
        }function Ju(t, e) {
          if (null == t) return {};var n = v(xo(t), function (t) {
            return [t];
          });return e = $o(e), Yr(t, n, function (t, n) {
            return e(t, n[0]);
          });
        }function Gu(t, e, n) {
          e = ki(e, t);var r = -1,
              i = e.length;for (i || (i = 1, t = it); ++r < i;) {
            var o = null == t ? it : t[ra(e[r])];o === it && (r = i, o = n), t = ou(o) ? o.call(t) : o;
          }return t;
        }function Zu(t, e, n) {
          return null == t ? t : ui(t, e, n);
        }function Yu(t, e, n, r) {
          return r = "function" == typeof r ? r : it, null == t ? t : ui(t, e, n, r);
        }function Qu(t, e, n) {
          var r = wp(t),
              i = r || Cp(t) || Ep(t);if (e = $o(e, 4), null == n) {
            var o = t && t.constructor;n = i ? r ? new o() : [] : uu(t) && ou(o) ? yf(jl(t)) : {};
          }return (i ? c : nr)(t, function (t, r, i) {
            return e(n, t, r, i);
          }), n;
        }function tc(t, e) {
          return null == t || yi(t, e);
        }function ec(t, e, n) {
          return null == t ? t : bi(t, e, $i(n));
        }function nc(t, e, n, r) {
          return r = "function" == typeof r ? r : it, null == t ? t : bi(t, e, $i(n), r);
        }function rc(t) {
          return null == t ? [] : L(t, Wu(t));
        }function ic(t) {
          return null == t ? [] : L(t, zu(t));
        }function oc(t, e, n) {
          return n === it && (n = e, e = it), n !== it && (n = Eu(n), n = n === n ? n : 0), e !== it && (e = Eu(e), e = e === e ? e : 0), qn(Eu(t), e, n);
        }function ac(t, e, n) {
          return e = $u(e), n === it ? (n = e, e = 0) : n = $u(n), t = Eu(t), $r(t, e, n);
        }function sc(t, e, n) {
          if (n && "boolean" != typeof n && qo(t, e, n) && (e = n = it), n === it && ("boolean" == typeof e ? (n = e, e = it) : "boolean" == typeof t && (n = t, t = it)), t === it && e === it ? (t = 0, e = 1) : (t = $u(t), e === it ? (e = t, t = 0) : e = $u(e)), t > e) {
            var r = t;t = e, e = r;
          }if (n || t % 1 || e % 1) {
            var i = Ql();return Gl(t + i * (e - t + rr("1e-" + ((i + "").length - 1))), e);
          }return ni(t, e);
        }function uc(t) {
          return td(ju(t).toLowerCase());
        }function cc(t) {
          return t = ju(t), t && t.replace(Ye, _r).replace(Wn, "");
        }function lc(t, e, n) {
          t = ju(t), e = gi(e);var r = t.length;n = n === it ? r : qn(ku(n), 0, r);var i = n;return n -= e.length, n >= 0 && t.slice(n, i) == e;
        }function fc(t) {
          return t = ju(t), t && Ae.test(t) ? t.replace($e, wr) : t;
        }function pc(t) {
          return t = ju(t), t && Le.test(t) ? t.replace(Re, "\\$&") : t;
        }function dc(t, e, n) {
          t = ju(t), e = ku(e);var r = e ? Q(t) : 0;if (!e || r >= e) return t;var i = (e - r) / 2;return oo(Ul(i), n) + t + oo(Bl(i), n);
        }function hc(t, e, n) {
          t = ju(t), e = ku(e);var r = e ? Q(t) : 0;return e && r < e ? t + oo(e - r, n) : t;
        }function vc(t, e, n) {
          t = ju(t), e = ku(e);var r = e ? Q(t) : 0;return e && r < e ? oo(e - r, n) + t : t;
        }function gc(t, e, n) {
          return n || null == e ? e = 0 : e && (e = +e), Yl(ju(t).replace(Fe, ""), e || 0);
        }function mc(t, e, n) {
          return e = (n ? qo(t, e, n) : e === it) ? 1 : ku(e), ii(ju(t), e);
        }function yc() {
          var t = arguments,
              e = ju(t[0]);return t.length < 3 ? e : e.replace(t[1], t[2]);
        }function bc(t, e, n) {
          return n && "number" != typeof n && qo(t, e, n) && (e = n = it), (n = n === it ? Ft : n >>> 0) ? (t = ju(t), t && ("string" == typeof e || null != e && !kp(e)) && (e = gi(e), !e && U(t)) ? Ai(tt(t), 0, n) : t.split(e, n)) : [];
        }function _c(t, e, n) {
          return t = ju(t), n = null == n ? 0 : qn(ku(n), 0, t.length), e = gi(e), t.slice(n, n + e.length) == e;
        }function wc(t, e, r) {
          var i = n.templateSettings;r && qo(t, e, r) && (e = it), t = ju(t), e = Dp({}, e, i, ho);var o,
              a,
              s = Dp({}, e.imports, i.imports, ho),
              u = Wu(s),
              c = L(s, u),
              l = 0,
              f = e.interpolate || Qe,
              p = "__p += '",
              d = pl((e.escape || Qe).source + "|" + f.source + "|" + (f === Oe ? ze : Qe).source + "|" + (e.evaluate || Qe).source + "|$", "g"),
              h = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++Gn + "]") + "\n";t.replace(d, function (e, n, r, i, s, u) {
            return r || (r = i), p += t.slice(l, u).replace(tn, H), n && (o = !0, p += "' +\n__e(" + n + ") +\n'"), s && (a = !0, p += "';\n" + s + ";\n__p += '"), r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + e.length, e;
          }), p += "';\n";var v = e.variable;v || (p = "with (obj) {\n" + p + "\n}\n"), p = (a ? p.replace(we, "") : p).replace(xe, "$1").replace(Ce, "$1;"), p = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";var g = ed(function () {
            return cl(u, h + "return " + p).apply(it, c);
          });if (g.source = p, ru(g)) throw g;return g;
        }function xc(t) {
          return ju(t).toLowerCase();
        }function Cc(t) {
          return ju(t).toUpperCase();
        }function Tc(t, e, n) {
          if (t = ju(t), t && (n || e === it)) return t.replace(Pe, "");if (!t || !(e = gi(e))) return t;var r = tt(t),
              i = tt(e),
              o = F(r, i),
              a = q(r, i) + 1;return Ai(r, o, a).join("");
        }function $c(t, e, n) {
          if (t = ju(t), t && (n || e === it)) return t.replace(qe, "");if (!t || !(e = gi(e))) return t;var r = tt(t),
              i = q(r, tt(e)) + 1;return Ai(r, 0, i).join("");
        }function kc(t, e, n) {
          if (t = ju(t), t && (n || e === it)) return t.replace(Fe, "");if (!t || !(e = gi(e))) return t;var r = tt(t),
              i = F(r, tt(e));return Ai(r, i).join("");
        }function Ac(t, e) {
          var n = At,
              r = Et;if (uu(e)) {
            var i = "separator" in e ? e.separator : i;n = "length" in e ? ku(e.length) : n, r = "omission" in e ? gi(e.omission) : r;
          }t = ju(t);var o = t.length;if (U(t)) {
            var a = tt(t);o = a.length;
          }if (n >= o) return t;var s = n - Q(r);if (s < 1) return r;var u = a ? Ai(a, 0, s).join("") : t.slice(0, s);if (i === it) return u + r;if (a && (s += u.length - s), kp(i)) {
            if (t.slice(s).search(i)) {
              var c,
                  l = u;for (i.global || (i = pl(i.source, ju(Ve.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(l);) {
                var f = c.index;
              }u = u.slice(0, f === it ? s : f);
            }
          } else if (t.indexOf(gi(i), s) != s) {
            var p = u.lastIndexOf(i);p > -1 && (u = u.slice(0, p));
          }return u + r;
        }function Ec(t) {
          return t = ju(t), t && ke.test(t) ? t.replace(Te, xr) : t;
        }function Sc(t, e, n) {
          return t = ju(t), e = n ? it : e, e === it ? W(t) ? rt(t) : w(t) : t.match(e) || [];
        }function Oc(t) {
          var e = null == t ? 0 : t.length,
              n = $o();return t = e ? v(t, function (t) {
            if ("function" != typeof t[1]) throw new hl(ut);return [n(t[0]), t[1]];
          }) : [], oi(function (n) {
            for (var r = -1; ++r < e;) {
              var i = t[r];if (s(i[0], this, n)) return s(i[1], this, n);
            }
          });
        }function jc(t) {
          return Hn(Mn(t, pt));
        }function Nc(t) {
          return function () {
            return t;
          };
        }function Dc(t, e) {
          return null == t || t !== t ? e : t;
        }function Ic(t) {
          return t;
        }function Rc(t) {
          return Mr("function" == typeof t ? t : Mn(t, pt));
        }function Lc(t) {
          return zr(Mn(t, pt));
        }function Pc(t, e) {
          return Vr(t, Mn(e, pt));
        }function Fc(t, e, n) {
          var r = Wu(e),
              i = ar(e, r);null != n || uu(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = ar(e, Wu(e)));var o = !(uu(n) && "chain" in n && !n.chain),
              a = ou(t);return c(i, function (n) {
            var r = e[n];t[n] = r, a && (t.prototype[n] = function () {
              var e = this.__chain__;if (o || e) {
                var n = t(this.__wrapped__),
                    i = n.__actions__ = Mi(this.__actions__);return i.push({ func: r, args: arguments, thisArg: t }), n.__chain__ = e, n;
              }return r.apply(t, g([this.value()], arguments));
            });
          }), t;
        }function qc() {
          return sr._ === this && (sr._ = $l), this;
        }function Mc() {}function Hc(t) {
          return t = ku(t), oi(function (e) {
            return Jr(e, t);
          });
        }function Bc(t) {
          return Mo(t) ? E(ra(t)) : Qr(t);
        }function Uc(t) {
          return function (e) {
            return null == t ? it : ur(t, e);
          };
        }function Wc() {
          return [];
        }function zc() {
          return !1;
        }function Vc() {
          return {};
        }function Xc() {
          return "";
        }function Kc() {
          return !0;
        }function Jc(t, e) {
          if (t = ku(t), t < 1 || t > Rt) return [];var n = Ft,
              r = Gl(t, Ft);e = $o(e), t -= Ft;for (var i = D(r, e); ++n < t;) {
            e(n);
          }return i;
        }function Gc(t) {
          return wp(t) ? v(t, ra) : _u(t) ? [t] : Mi(Lf(ju(t)));
        }function Zc(t) {
          var e = ++wl;return ju(t) + e;
        }function Yc(t) {
          return t && t.length ? Kn(t, Ic, pr) : it;
        }function Qc(t, e) {
          return t && t.length ? Kn(t, $o(e, 2), pr) : it;
        }function tl(t) {
          return A(t, Ic);
        }function el(t, e) {
          return A(t, $o(e, 2));
        }function nl(t) {
          return t && t.length ? Kn(t, Ic, Ur) : it;
        }function rl(t, e) {
          return t && t.length ? Kn(t, $o(e, 2), Ur) : it;
        }function il(t) {
          return t && t.length ? N(t, Ic) : 0;
        }function ol(t, e) {
          return t && t.length ? N(t, $o(e, 2)) : 0;
        }e = null == e ? sr : Tr.defaults(sr.Object(), e, Tr.pick(sr, Jn));var al = e.Array,
            sl = e.Date,
            ul = e.Error,
            cl = e.Function,
            ll = e.Math,
            fl = e.Object,
            pl = e.RegExp,
            dl = e.String,
            hl = e.TypeError,
            vl = al.prototype,
            gl = cl.prototype,
            ml = fl.prototype,
            yl = e["__core-js_shared__"],
            bl = gl.toString,
            _l = ml.hasOwnProperty,
            wl = 0,
            xl = function () {
          var t = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
        }(),
            Cl = ml.toString,
            Tl = bl.call(fl),
            $l = sr._,
            kl = pl("^" + bl.call(_l).replace(Re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Al = lr ? e.Buffer : it,
            El = e.Symbol,
            Sl = e.Uint8Array,
            Ol = Al ? Al.allocUnsafe : it,
            jl = X(fl.getPrototypeOf, fl),
            Nl = fl.create,
            Dl = ml.propertyIsEnumerable,
            Il = vl.splice,
            Rl = El ? El.isConcatSpreadable : it,
            Ll = El ? El.iterator : it,
            Pl = El ? El.toStringTag : it,
            Fl = function () {
          try {
            var t = Eo(fl, "defineProperty");return t({}, "", {}), t;
          } catch (t) {}
        }(),
            ql = e.clearTimeout !== sr.clearTimeout && e.clearTimeout,
            Ml = sl && sl.now !== sr.Date.now && sl.now,
            Hl = e.setTimeout !== sr.setTimeout && e.setTimeout,
            Bl = ll.ceil,
            Ul = ll.floor,
            Wl = fl.getOwnPropertySymbols,
            zl = Al ? Al.isBuffer : it,
            Vl = e.isFinite,
            Xl = vl.join,
            Kl = X(fl.keys, fl),
            Jl = ll.max,
            Gl = ll.min,
            Zl = sl.now,
            Yl = e.parseInt,
            Ql = ll.random,
            tf = vl.reverse,
            ef = Eo(e, "DataView"),
            nf = Eo(e, "Map"),
            rf = Eo(e, "Promise"),
            of = Eo(e, "Set"),
            af = Eo(e, "WeakMap"),
            sf = Eo(fl, "create"),
            uf = af && new af(),
            cf = {},
            lf = ia(ef),
            ff = ia(nf),
            pf = ia(rf),
            df = ia(of),
            hf = ia(af),
            vf = El ? El.prototype : it,
            gf = vf ? vf.valueOf : it,
            mf = vf ? vf.toString : it,
            yf = function () {
          function t() {}return function (e) {
            if (!uu(e)) return {};if (Nl) return Nl(e);t.prototype = e;var n = new t();return t.prototype = it, n;
          };
        }();n.templateSettings = { escape: Ee, evaluate: Se, interpolate: Oe, variable: "", imports: { _: n } }, n.prototype = r.prototype, n.prototype.constructor = n, i.prototype = yf(r.prototype), i.prototype.constructor = i, _.prototype = yf(r.prototype), _.prototype.constructor = _, nt.prototype.clear = Ue, nt.prototype.delete = en, nt.prototype.get = nn, nt.prototype.has = rn, nt.prototype.set = on, an.prototype.clear = sn, an.prototype.delete = un, an.prototype.get = cn, an.prototype.has = ln, an.prototype.set = fn, pn.prototype.clear = dn, pn.prototype.delete = hn, pn.prototype.get = vn, pn.prototype.has = gn, pn.prototype.set = mn, yn.prototype.add = yn.prototype.push = bn, yn.prototype.has = _n, wn.prototype.clear = xn, wn.prototype.delete = Cn, wn.prototype.get = Tn, wn.prototype.has = $n, wn.prototype.set = kn;var bf = Vi(nr),
            _f = Vi(or, !0),
            wf = Xi(),
            xf = Xi(!0),
            Cf = uf ? function (t, e) {
          return uf.set(t, e), t;
        } : Ic,
            Tf = Fl ? function (t, e) {
          return Fl(t, "toString", { configurable: !0, enumerable: !1, value: Nc(e), writable: !0 });
        } : Ic,
            $f = oi,
            kf = ql || function (t) {
          return sr.clearTimeout(t);
        },
            Af = of && 1 / J(new of([, -0]))[1] == It ? function (t) {
          return new of(t);
        } : Mc,
            Ef = uf ? function (t) {
          return uf.get(t);
        } : Mc,
            Sf = Wl ? function (t) {
          return null == t ? [] : (t = fl(t), p(Wl(t), function (e) {
            return Dl.call(t, e);
          }));
        } : Wc,
            Of = Wl ? function (t) {
          for (var e = []; t;) {
            g(e, Sf(t)), t = jl(t);
          }return e;
        } : Wc,
            jf = fr;(ef && jf(new ef(new ArrayBuffer(1))) != fe || nf && jf(new nf()) != Zt || rf && jf(rf.resolve()) != ee || of && jf(new of()) != ie || af && jf(new af()) != ue) && (jf = function jf(t) {
          var e = fr(t),
              n = e == te ? t.constructor : it,
              r = n ? ia(n) : "";if (r) switch (r) {case lf:
              return fe;case ff:
              return Zt;case pf:
              return ee;case df:
              return ie;case hf:
              return ue;}return e;
        });var Nf = yl ? ou : zc,
            Df = ea(Cf),
            If = Hl || function (t, e) {
          return sr.setTimeout(t, e);
        },
            Rf = ea(Tf),
            Lf = Xo(function (t) {
          var e = [];return De.test(t) && e.push(""), t.replace(Ie, function (t, n, r, i) {
            e.push(r ? i.replace(We, "$1") : n || t);
          }), e;
        }),
            Pf = oi(function (t, e) {
          return Zs(t) ? Vn(t, er(e, 1, Zs, !0)) : [];
        }),
            Ff = oi(function (t, e) {
          var n = $a(e);return Zs(n) && (n = it), Zs(t) ? Vn(t, er(e, 1, Zs, !0), $o(n, 2)) : [];
        }),
            qf = oi(function (t, e) {
          var n = $a(e);return Zs(n) && (n = it), Zs(t) ? Vn(t, er(e, 1, Zs, !0), it, n) : [];
        }),
            Mf = oi(function (t) {
          var e = v(t, Ti);return e.length && e[0] === t[0] ? kr(e) : [];
        }),
            Hf = oi(function (t) {
          var e = $a(t),
              n = v(t, Ti);return e === $a(n) ? e = it : n.pop(), n.length && n[0] === t[0] ? kr(n, $o(e, 2)) : [];
        }),
            Bf = oi(function (t) {
          var e = $a(t),
              n = v(t, Ti);return e = "function" == typeof e ? e : it, e && n.pop(), n.length && n[0] === t[0] ? kr(n, it, e) : [];
        }),
            Uf = oi(Ea),
            Wf = _o(function (t, e) {
          var n = null == t ? 0 : t.length,
              r = Fn(t, e);return ei(t, v(e, function (t) {
            return Fo(t, n) ? +t : t;
          }).sort(Li)), r;
        }),
            zf = oi(function (t) {
          return mi(er(t, 1, Zs, !0));
        }),
            Vf = oi(function (t) {
          var e = $a(t);return Zs(e) && (e = it), mi(er(t, 1, Zs, !0), $o(e, 2));
        }),
            Xf = oi(function (t) {
          var e = $a(t);return e = "function" == typeof e ? e : it, mi(er(t, 1, Zs, !0), it, e);
        }),
            Kf = oi(function (t, e) {
          return Zs(t) ? Vn(t, e) : [];
        }),
            Jf = oi(function (t) {
          return xi(p(t, Zs));
        }),
            Gf = oi(function (t) {
          var e = $a(t);return Zs(e) && (e = it), xi(p(t, Zs), $o(e, 2));
        }),
            Zf = oi(function (t) {
          var e = $a(t);return e = "function" == typeof e ? e : it, xi(p(t, Zs), it, e);
        }),
            Yf = oi(Ga),
            Qf = oi(function (t) {
          var e = t.length,
              n = e > 1 ? t[e - 1] : it;return n = "function" == typeof n ? (t.pop(), n) : it, Za(t, n);
        }),
            tp = _o(function (t) {
          var e = t.length,
              n = e ? t[0] : 0,
              r = this.__wrapped__,
              o = function o(e) {
            return Fn(e, t);
          };return !(e > 1 || this.__actions__.length) && r instanceof _ && Fo(n) ? (r = r.slice(n, +n + (e ? 1 : 0)), r.__actions__.push({ func: ns, args: [o], thisArg: it }), new i(r, this.__chain__).thru(function (t) {
            return e && !t.length && t.push(it), t;
          })) : this.thru(o);
        }),
            ep = Wi(function (t, e, n) {
          _l.call(t, n) ? ++t[n] : Pn(t, n, 1);
        }),
            np = Qi(va),
            rp = Qi(ga),
            ip = Wi(function (t, e, n) {
          _l.call(t, n) ? t[n].push(e) : Pn(t, n, [e]);
        }),
            op = oi(function (t, e, n) {
          var r = -1,
              i = "function" == typeof e,
              o = Gs(t) ? al(t.length) : [];return bf(t, function (t) {
            o[++r] = i ? s(e, t, n) : Er(t, e, n);
          }), o;
        }),
            ap = Wi(function (t, e, n) {
          Pn(t, n, e);
        }),
            sp = Wi(function (t, e, n) {
          t[n ? 0 : 1].push(e);
        }, function () {
          return [[], []];
        }),
            up = oi(function (t, e) {
          if (null == t) return [];var n = e.length;return n > 1 && qo(t, e[0], e[1]) ? e = [] : n > 2 && qo(e[0], e[1], e[2]) && (e = [e[0]]), Gr(t, er(e, 1), []);
        }),
            cp = Ml || function () {
          return sr.Date.now();
        },
            lp = oi(function (t, e, n) {
          var r = mt;if (n.length) {
            var i = K(n, To(lp));r |= xt;
          }return po(t, r, e, n, i);
        }),
            fp = oi(function (t, e, n) {
          var r = mt | yt;if (n.length) {
            var i = K(n, To(fp));r |= xt;
          }return po(e, r, t, n, i);
        }),
            pp = oi(function (t, e) {
          return zn(t, 1, e);
        }),
            dp = oi(function (t, e, n) {
          return zn(t, Eu(e) || 0, n);
        });Rs.Cache = pn;var hp = $f(function (t, e) {
          e = 1 == e.length && wp(e[0]) ? v(e[0], R($o())) : v(er(e, 1), R($o()));var n = e.length;return oi(function (r) {
            for (var i = -1, o = Gl(r.length, n); ++i < o;) {
              r[i] = e[i].call(this, r[i]);
            }return s(t, this, r);
          });
        }),
            vp = oi(function (t, e) {
          var n = K(e, To(vp));return po(t, xt, it, e, n);
        }),
            gp = oi(function (t, e) {
          var n = K(e, To(gp));return po(t, Ct, it, e, n);
        }),
            mp = _o(function (t, e) {
          return po(t, $t, it, it, it, e);
        }),
            yp = uo(pr),
            bp = uo(function (t, e) {
          return t >= e;
        }),
            _p = Sr(function () {
          return arguments;
        }()) ? Sr : function (t) {
          return cu(t) && _l.call(t, "callee") && !Dl.call(t, "callee");
        },
            wp = al.isArray,
            xp = dr ? R(dr) : Or,
            Cp = zl || zc,
            Tp = hr ? R(hr) : jr,
            $p = vr ? R(vr) : Ir,
            kp = gr ? R(gr) : Pr,
            Ap = mr ? R(mr) : Fr,
            Ep = yr ? R(yr) : qr,
            Sp = uo(Ur),
            Op = uo(function (t, e) {
          return t <= e;
        }),
            jp = zi(function (t, e) {
          if (Wo(e) || Gs(e)) return void Hi(e, Wu(e), t);for (var n in e) {
            _l.call(e, n) && Nn(t, n, e[n]);
          }
        }),
            Np = zi(function (t, e) {
          Hi(e, zu(e), t);
        }),
            Dp = zi(function (t, e, n, r) {
          Hi(e, zu(e), t, r);
        }),
            Ip = zi(function (t, e, n, r) {
          Hi(e, Wu(e), t, r);
        }),
            Rp = _o(Fn),
            Lp = oi(function (t) {
          return t.push(it, ho), s(Dp, it, t);
        }),
            Pp = oi(function (t) {
          return t.push(it, vo), s(Bp, it, t);
        }),
            Fp = no(function (t, e, n) {
          t[e] = n;
        }, Nc(Ic)),
            qp = no(function (t, e, n) {
          _l.call(t, e) ? t[e].push(n) : t[e] = [n];
        }, $o),
            Mp = oi(Er),
            Hp = zi(function (t, e, n) {
          Xr(t, e, n);
        }),
            Bp = zi(function (t, e, n, r) {
          Xr(t, e, n, r);
        }),
            Up = _o(function (t, e) {
          var n = {};if (null == t) return n;var r = !1;e = v(e, function (e) {
            return e = ki(e, t), r || (r = e.length > 1), e;
          }), Hi(t, xo(t), n), r && (n = Mn(n, pt | dt | ht, go));for (var i = e.length; i--;) {
            yi(n, e[i]);
          }return n;
        }),
            Wp = _o(function (t, e) {
          return null == t ? {} : Zr(t, e);
        }),
            zp = fo(Wu),
            Vp = fo(zu),
            Xp = Gi(function (t, e, n) {
          return e = e.toLowerCase(), t + (n ? uc(e) : e);
        }),
            Kp = Gi(function (t, e, n) {
          return t + (n ? "-" : "") + e.toLowerCase();
        }),
            Jp = Gi(function (t, e, n) {
          return t + (n ? " " : "") + e.toLowerCase();
        }),
            Gp = Ji("toLowerCase"),
            Zp = Gi(function (t, e, n) {
          return t + (n ? "_" : "") + e.toLowerCase();
        }),
            Yp = Gi(function (t, e, n) {
          return t + (n ? " " : "") + td(e);
        }),
            Qp = Gi(function (t, e, n) {
          return t + (n ? " " : "") + e.toUpperCase();
        }),
            td = Ji("toUpperCase"),
            ed = oi(function (t, e) {
          try {
            return s(t, it, e);
          } catch (t) {
            return ru(t) ? t : new ul(t);
          }
        }),
            nd = _o(function (t, e) {
          return c(e, function (e) {
            e = ra(e), Pn(t, e, lp(t[e], t));
          }), t;
        }),
            rd = to(),
            id = to(!0),
            od = oi(function (t, e) {
          return function (n) {
            return Er(n, t, e);
          };
        }),
            ad = oi(function (t, e) {
          return function (n) {
            return Er(t, n, e);
          };
        }),
            sd = io(v),
            ud = io(f),
            cd = io(b),
            ld = so(),
            fd = so(!0),
            pd = ro(function (t, e) {
          return t + e;
        }, 0),
            dd = lo("ceil"),
            hd = ro(function (t, e) {
          return t / e;
        }, 1),
            vd = lo("floor"),
            gd = ro(function (t, e) {
          return t * e;
        }, 1),
            md = lo("round"),
            yd = ro(function (t, e) {
          return t - e;
        }, 0);return n.after = Es, n.ary = Ss, n.assign = jp, n.assignIn = Np, n.assignInWith = Dp, n.assignWith = Ip, n.at = Rp, n.before = Os, n.bind = lp, n.bindAll = nd, n.bindKey = fp, n.castArray = Us, n.chain = ts, n.chunk = sa, n.compact = ua, n.concat = ca, n.cond = Oc, n.conforms = jc, n.constant = Nc, n.countBy = ep, n.create = Nu, n.curry = js, n.curryRight = Ns, n.debounce = Ds, n.defaults = Lp, n.defaultsDeep = Pp, n.defer = pp, n.delay = dp, n.difference = Pf, n.differenceBy = Ff, n.differenceWith = qf, n.drop = la, n.dropRight = fa, n.dropRightWhile = pa, n.dropWhile = da, n.fill = ha, n.filter = fs, n.flatMap = ps, n.flatMapDeep = ds, n.flatMapDepth = hs, n.flatten = ma, n.flattenDeep = ya, n.flattenDepth = ba, n.flip = Is, n.flow = rd, n.flowRight = id, n.fromPairs = _a, n.functions = qu, n.functionsIn = Mu, n.groupBy = ip, n.initial = Ca, n.intersection = Mf, n.intersectionBy = Hf, n.intersectionWith = Bf, n.invert = Fp, n.invertBy = qp, n.invokeMap = op, n.iteratee = Rc, n.keyBy = ap, n.keys = Wu, n.keysIn = zu, n.map = ys, n.mapKeys = Vu, n.mapValues = Xu, n.matches = Lc, n.matchesProperty = Pc, n.memoize = Rs, n.merge = Hp, n.mergeWith = Bp, n.method = od, n.methodOf = ad, n.mixin = Fc, n.negate = Ls, n.nthArg = Hc, n.omit = Up, n.omitBy = Ku, n.once = Ps, n.orderBy = bs, n.over = sd, n.overArgs = hp, n.overEvery = ud, n.overSome = cd, n.partial = vp, n.partialRight = gp, n.partition = sp, n.pick = Wp, n.pickBy = Ju, n.property = Bc, n.propertyOf = Uc, n.pull = Uf, n.pullAll = Ea, n.pullAllBy = Sa, n.pullAllWith = Oa, n.pullAt = Wf, n.range = ld, n.rangeRight = fd, n.rearg = mp, n.reject = xs, n.remove = ja, n.rest = Fs, n.reverse = Na, n.sampleSize = Ts, n.set = Zu, n.setWith = Yu, n.shuffle = $s, n.slice = Da, n.sortBy = up, n.sortedUniq = Ma, n.sortedUniqBy = Ha, n.split = bc, n.spread = qs, n.tail = Ba, n.take = Ua, n.takeRight = Wa, n.takeRightWhile = za, n.takeWhile = Va, n.tap = es, n.throttle = Ms, n.thru = ns, n.toArray = Tu, n.toPairs = zp, n.toPairsIn = Vp, n.toPath = Gc, n.toPlainObject = Su, n.transform = Qu, n.unary = Hs, n.union = zf, n.unionBy = Vf, n.unionWith = Xf, n.uniq = Xa, n.uniqBy = Ka, n.uniqWith = Ja, n.unset = tc, n.unzip = Ga, n.unzipWith = Za, n.update = ec, n.updateWith = nc, n.values = rc, n.valuesIn = ic, n.without = Kf, n.words = Sc, n.wrap = Bs, n.xor = Jf, n.xorBy = Gf, n.xorWith = Zf, n.zip = Yf, n.zipObject = Ya, n.zipObjectDeep = Qa, n.zipWith = Qf, n.entries = zp, n.entriesIn = Vp, n.extend = Np, n.extendWith = Dp, Fc(n, n), n.add = pd, n.attempt = ed, n.camelCase = Xp, n.capitalize = uc, n.ceil = dd, n.clamp = oc, n.clone = Ws, n.cloneDeep = Vs, n.cloneDeepWith = Xs, n.cloneWith = zs, n.conformsTo = Ks, n.deburr = cc, n.defaultTo = Dc, n.divide = hd, n.endsWith = lc, n.eq = Js, n.escape = fc, n.escapeRegExp = pc, n.every = ls, n.find = np, n.findIndex = va, n.findKey = Du, n.findLast = rp, n.findLastIndex = ga, n.findLastKey = Iu, n.floor = vd, n.forEach = vs, n.forEachRight = gs, n.forIn = Ru, n.forInRight = Lu, n.forOwn = Pu, n.forOwnRight = Fu, n.get = Hu, n.gt = yp, n.gte = bp, n.has = Bu, n.hasIn = Uu, n.head = wa, n.identity = Ic, n.includes = ms, n.indexOf = xa, n.inRange = ac, n.invoke = Mp, n.isArguments = _p, n.isArray = wp, n.isArrayBuffer = xp, n.isArrayLike = Gs, n.isArrayLikeObject = Zs, n.isBoolean = Ys, n.isBuffer = Cp, n.isDate = Tp, n.isElement = Qs, n.isEmpty = tu, n.isEqual = eu, n.isEqualWith = nu, n.isError = ru, n.isFinite = iu, n.isFunction = ou, n.isInteger = au, n.isLength = su, n.isMap = $p, n.isMatch = lu, n.isMatchWith = fu, n.isNaN = pu, n.isNative = du, n.isNil = vu, n.isNull = hu, n.isNumber = gu, n.isObject = uu, n.isObjectLike = cu, n.isPlainObject = mu, n.isRegExp = kp, n.isSafeInteger = yu, n.isSet = Ap, n.isString = bu, n.isSymbol = _u, n.isTypedArray = Ep, n.isUndefined = wu, n.isWeakMap = xu, n.isWeakSet = Cu, n.join = Ta, n.kebabCase = Kp, n.last = $a, n.lastIndexOf = ka, n.lowerCase = Jp, n.lowerFirst = Gp, n.lt = Sp, n.lte = Op, n.max = Yc, n.maxBy = Qc, n.mean = tl, n.meanBy = el, n.min = nl, n.minBy = rl, n.stubArray = Wc, n.stubFalse = zc, n.stubObject = Vc, n.stubString = Xc, n.stubTrue = Kc, n.multiply = gd, n.nth = Aa, n.noConflict = qc, n.noop = Mc, n.now = cp, n.pad = dc, n.padEnd = hc, n.padStart = vc, n.parseInt = gc, n.random = sc, n.reduce = _s, n.reduceRight = ws, n.repeat = mc, n.replace = yc, n.result = Gu, n.round = md, n.runInContext = t, n.sample = Cs, n.size = ks, n.snakeCase = Zp, n.some = As, n.sortedIndex = Ia, n.sortedIndexBy = Ra, n.sortedIndexOf = La, n.sortedLastIndex = Pa, n.sortedLastIndexBy = Fa, n.sortedLastIndexOf = qa, n.startCase = Yp, n.startsWith = _c, n.subtract = yd, n.sum = il, n.sumBy = ol, n.template = wc, n.times = Jc, n.toFinite = $u, n.toInteger = ku, n.toLength = Au, n.toLower = xc, n.toNumber = Eu, n.toSafeInteger = Ou, n.toString = ju, n.toUpper = Cc, n.trim = Tc, n.trimEnd = $c, n.trimStart = kc, n.truncate = Ac, n.unescape = Ec, n.uniqueId = Zc, n.upperCase = Qp, n.upperFirst = td, n.each = vs, n.eachRight = gs, n.first = wa, Fc(n, function () {
          var t = {};return nr(n, function (e, r) {
            _l.call(n.prototype, r) || (t[r] = e);
          }), t;
        }(), { chain: !1 }), n.VERSION = ot, c(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
          n[t].placeholder = n;
        }), c(["drop", "take"], function (t, e) {
          _.prototype[t] = function (n) {
            n = n === it ? 1 : Jl(ku(n), 0);var r = this.__filtered__ && !e ? new _(this) : this.clone();return r.__filtered__ ? r.__takeCount__ = Gl(n, r.__takeCount__) : r.__views__.push({ size: Gl(n, Ft), type: t + (r.__dir__ < 0 ? "Right" : "") }), r;
          }, _.prototype[t + "Right"] = function (e) {
            return this.reverse()[t](e).reverse();
          };
        }), c(["filter", "map", "takeWhile"], function (t, e) {
          var n = e + 1,
              r = n == jt || n == Dt;_.prototype[t] = function (t) {
            var e = this.clone();return e.__iteratees__.push({ iteratee: $o(t, 3), type: n }), e.__filtered__ = e.__filtered__ || r, e;
          };
        }), c(["head", "last"], function (t, e) {
          var n = "take" + (e ? "Right" : "");_.prototype[t] = function () {
            return this[n](1).value()[0];
          };
        }), c(["initial", "tail"], function (t, e) {
          var n = "drop" + (e ? "" : "Right");_.prototype[t] = function () {
            return this.__filtered__ ? new _(this) : this[n](1);
          };
        }), _.prototype.compact = function () {
          return this.filter(Ic);
        }, _.prototype.find = function (t) {
          return this.filter(t).head();
        }, _.prototype.findLast = function (t) {
          return this.reverse().find(t);
        }, _.prototype.invokeMap = oi(function (t, e) {
          return "function" == typeof t ? new _(this) : this.map(function (n) {
            return Er(n, t, e);
          });
        }), _.prototype.reject = function (t) {
          return this.filter(Ls($o(t)));
        }, _.prototype.slice = function (t, e) {
          t = ku(t);var n = this;return n.__filtered__ && (t > 0 || e < 0) ? new _(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== it && (e = ku(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n);
        }, _.prototype.takeRightWhile = function (t) {
          return this.reverse().takeWhile(t).reverse();
        }, _.prototype.toArray = function () {
          return this.take(Ft);
        }, nr(_.prototype, function (t, e) {
          var r = /^(?:filter|find|map|reject)|While$/.test(e),
              o = /^(?:head|last)$/.test(e),
              a = n[o ? "take" + ("last" == e ? "Right" : "") : e],
              s = o || /^find/.test(e);a && (n.prototype[e] = function () {
            var e = this.__wrapped__,
                u = o ? [1] : arguments,
                c = e instanceof _,
                l = u[0],
                f = c || wp(e),
                p = function p(t) {
              var e = a.apply(n, g([t], u));return o && d ? e[0] : e;
            };f && r && "function" == typeof l && 1 != l.length && (c = f = !1);var d = this.__chain__,
                h = !!this.__actions__.length,
                v = s && !d,
                m = c && !h;if (!s && f) {
              e = m ? e : new _(this);var y = t.apply(e, u);return y.__actions__.push({ func: ns, args: [p], thisArg: it }), new i(y, d);
            }return v && m ? t.apply(this, u) : (y = this.thru(p), v ? o ? y.value()[0] : y.value() : y);
          });
        }), c(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
          var e = vl[t],
              r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
              i = /^(?:pop|shift)$/.test(t);n.prototype[t] = function () {
            var t = arguments;if (i && !this.__chain__) {
              var n = this.value();return e.apply(wp(n) ? n : [], t);
            }return this[r](function (n) {
              return e.apply(wp(n) ? n : [], t);
            });
          };
        }), nr(_.prototype, function (t, e) {
          var r = n[e];if (r) {
            var i = r.name + "",
                o = cf[i] || (cf[i] = []);o.push({ name: e, func: r });
          }
        }), cf[eo(it, yt).name] = [{ name: "wrapper", func: it }], _.prototype.clone = S, _.prototype.reverse = Z, _.prototype.value = et, n.prototype.at = tp, n.prototype.chain = rs, n.prototype.commit = is, n.prototype.next = os, n.prototype.plant = ss, n.prototype.reverse = us, n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = cs, n.prototype.first = n.prototype.head, Ll && (n.prototype[Ll] = as), n;
      },
          Tr = Cr();sr._ = Tr, i = function () {
        return Tr;
      }.call(e, n, e, r), !(i !== it && (r.exports = i));
    }).call(this);
  }).call(e, n(8), n(37)(t));
}, function (t, e) {
  function n() {
    throw new Error("setTimeout has not been defined");
  }function r() {
    throw new Error("clearTimeout has not been defined");
  }function i(t) {
    if (l === setTimeout) return setTimeout(t, 0);if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);try {
      return l(t, 0);
    } catch (e) {
      try {
        return l.call(null, t, 0);
      } catch (e) {
        return l.call(this, t, 0);
      }
    }
  }function o(t) {
    if (f === clearTimeout) return clearTimeout(t);if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);try {
      return f(t);
    } catch (e) {
      try {
        return f.call(null, t);
      } catch (e) {
        return f.call(this, t);
      }
    }
  }function a() {
    v && d && (v = !1, d.length ? h = d.concat(h) : g = -1, h.length && s());
  }function s() {
    if (!v) {
      var t = i(a);v = !0;for (var e = h.length; e;) {
        for (d = h, h = []; ++g < e;) {
          d && d[g].run();
        }g = -1, e = h.length;
      }d = null, v = !1, o(t);
    }
  }function u(t, e) {
    this.fun = t, this.array = e;
  }function c() {}var l,
      f,
      p = t.exports = {};!function () {
    try {
      l = "function" == typeof setTimeout ? setTimeout : n;
    } catch (t) {
      l = n;
    }try {
      f = "function" == typeof clearTimeout ? clearTimeout : r;
    } catch (t) {
      f = r;
    }
  }();var d,
      h = [],
      v = !1,
      g = -1;p.nextTick = function (t) {
    var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }h.push(new u(t, e)), 1 !== h.length || v || i(s);
  }, u.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, p.cwd = function () {
    return "/";
  }, p.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, p.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  var r, i;r = n(29);var o = n(35);i = r = r || {}, "object" != _typeof(r.default) && "function" != typeof r.default || (i = r = r.default), "function" == typeof i && (i = i.options), i.render = o.render, i.staticRenderFns = o.staticRenderFns, t.exports = r;
}, function (t, e) {
  t.exports = { render: function render() {
      var t = this,
          e = t.$createElement;t._self._c || e;return t._m(0);
    }, staticRenderFns: [function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "container" }, [n("div", { staticClass: "row" }, [n("div", { staticClass: "col-md-8 col-md-offset-2" }, [n("div", { staticClass: "panel panel-default" }, [n("div", { staticClass: "panel-heading" }, [t._v("Example Component")]), t._v(" "), n("div", { staticClass: "panel-body" }, [t._v("\n                    I'm an example component!\n                ")])])])])]);
    }] };
}, function (t, e, n) {
  "use strict";
  (function (e) {
    /*!
    * Vue.js v2.1.10
    * (c) 2014-2017 Evan You
    * Released under the MIT License.
    */
    function n(t) {
      return null == t ? "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? JSON.stringify(t, null, 2) : String(t);
    }function r(t) {
      var e = parseFloat(t);return isNaN(e) ? t : e;
    }function i(t, e) {
      for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) {
        n[r[i]] = !0;
      }return e ? function (t) {
        return n[t.toLowerCase()];
      } : function (t) {
        return n[t];
      };
    }function o(t, e) {
      if (t.length) {
        var n = t.indexOf(e);if (n > -1) return t.splice(n, 1);
      }
    }function a(t, e) {
      return ai.call(t, e);
    }function s(t) {
      return "string" == typeof t || "number" == typeof t;
    }function u(t) {
      var e = Object.create(null);return function (n) {
        var r = e[n];return r || (e[n] = t(n));
      };
    }function c(t, e) {
      function n(n) {
        var r = arguments.length;return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
      }return n._length = t.length, n;
    }function l(t, e) {
      e = e || 0;for (var n = t.length - e, r = new Array(n); n--;) {
        r[n] = t[n + e];
      }return r;
    }function f(t, e) {
      for (var n in e) {
        t[n] = e[n];
      }return t;
    }function p(t) {
      return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
    }function d(t) {
      return pi.call(t) === di;
    }function h(t) {
      for (var e = {}, n = 0; n < t.length; n++) {
        t[n] && f(e, t[n]);
      }return e;
    }function v() {}function g(t) {
      return t.reduce(function (t, e) {
        return t.concat(e.staticKeys || []);
      }, []).join(",");
    }function m(t, e) {
      var n = p(t),
          r = p(e);return n && r ? JSON.stringify(t) === JSON.stringify(e) : !n && !r && String(t) === String(e);
    }function y(t, e) {
      for (var n = 0; n < t.length; n++) {
        if (m(t[n], e)) return n;
      }return -1;
    }function b(t) {
      var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
    }function _(t, e, n, r) {
      Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
    }function w(t) {
      if (!mi.test(t)) {
        var e = t.split(".");return function (t) {
          for (var n = 0; n < e.length; n++) {
            if (!t) return;t = t[e[n]];
          }return t;
        };
      }
    }function x(t) {
      return (/native code/.test(t.toString())
      );
    }function C(t) {
      Ni.target && Di.push(Ni.target), Ni.target = t;
    }function T() {
      Ni.target = Di.pop();
    }function $(t, e) {
      t.__proto__ = e;
    }function k(t, e, n) {
      for (var r = 0, i = n.length; r < i; r++) {
        var o = n[r];_(t, o, e[o]);
      }
    }function A(t, e) {
      if (p(t)) {
        var n;return a(t, "__ob__") && t.__ob__ instanceof Fi ? n = t.__ob__ : Pi.shouldConvert && !ki() && (Array.isArray(t) || d(t)) && Object.isExtensible(t) && !t._isVue && (n = new Fi(t)), e && n && n.vmCount++, n;
      }
    }function E(t, e, n, r) {
      var i = new Ni(),
          o = Object.getOwnPropertyDescriptor(t, e);if (!o || o.configurable !== !1) {
        var a = o && o.get,
            s = o && o.set,
            u = A(n);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
            var e = a ? a.call(t) : n;return Ni.target && (i.depend(), u && u.dep.depend(), Array.isArray(e) && j(e)), e;
          }, set: function set(e) {
            var r = a ? a.call(t) : n;e === r || e !== e && r !== r || (s ? s.call(t, e) : n = e, u = A(e), i.notify());
          } });
      }
    }function S(t, e, n) {
      if (Array.isArray(t)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;if (a(t, e)) return void (t[e] = n);var r = t.__ob__;if (!(t._isVue || r && r.vmCount)) return r ? (E(r.value, e, n), r.dep.notify(), n) : void (t[e] = n);
    }function O(t, e) {
      var n = t.__ob__;t._isVue || n && n.vmCount || a(t, e) && (delete t[e], n && n.dep.notify());
    }function j(t) {
      for (var e = void 0, n = 0, r = t.length; n < r; n++) {
        e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && j(e);
      }
    }function N(t, e) {
      if (!e) return t;for (var n, r, i, o = Object.keys(e), s = 0; s < o.length; s++) {
        n = o[s], r = t[n], i = e[n], a(t, n) ? d(r) && d(i) && N(r, i) : S(t, n, i);
      }return t;
    }function D(t, e) {
      return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
    }function I(t, e) {
      var n = Object.create(t || null);return e ? f(n, e) : n;
    }function R(t) {
      var e = t.props;if (e) {
        var n,
            r,
            i,
            o = {};if (Array.isArray(e)) for (n = e.length; n--;) {
          r = e[n], "string" == typeof r && (i = ui(r), o[i] = { type: null });
        } else if (d(e)) for (var a in e) {
          r = e[a], i = ui(a), o[i] = d(r) ? r : { type: r };
        }t.props = o;
      }
    }function L(t) {
      var e = t.directives;if (e) for (var n in e) {
        var r = e[n];"function" == typeof r && (e[n] = { bind: r, update: r });
      }
    }function P(t, e, n) {
      function r(r) {
        var i = qi[r] || Mi;l[r] = i(t[r], e[r], n, r);
      }R(e), L(e);var i = e.extends;if (i && (t = "function" == typeof i ? P(t, i.options, n) : P(t, i, n)), e.mixins) for (var o = 0, s = e.mixins.length; o < s; o++) {
        var u = e.mixins[o];u.prototype instanceof Ut && (u = u.options), t = P(t, u, n);
      }var c,
          l = {};for (c in t) {
        r(c);
      }for (c in e) {
        a(t, c) || r(c);
      }return l;
    }function F(t, e, n, r) {
      if ("string" == typeof n) {
        var i = t[e];if (a(i, n)) return i[n];var o = ui(n);if (a(i, o)) return i[o];var s = ci(o);if (a(i, s)) return i[s];var u = i[n] || i[o] || i[s];return u;
      }
    }function q(t, e, n, r) {
      var i = e[t],
          o = !a(n, t),
          s = n[t];if (B(Boolean, i.type) && (o && !a(i, "default") ? s = !1 : B(String, i.type) || "" !== s && s !== fi(t) || (s = !0)), void 0 === s) {
        s = M(r, i, t);var u = Pi.shouldConvert;Pi.shouldConvert = !0, A(s), Pi.shouldConvert = u;
      }return s;
    }function M(t, e, n) {
      if (a(e, "default")) {
        var r = e.default;return p(r), t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t[n] ? t[n] : "function" == typeof r && e.type !== Function ? r.call(t) : r;
      }
    }function H(t) {
      var e = t && t.toString().match(/^\s*function (\w+)/);return e && e[1];
    }function B(t, e) {
      if (!Array.isArray(e)) return H(e) === H(t);for (var n = 0, r = e.length; n < r; n++) {
        if (H(e[n]) === H(t)) return !0;
      }return !1;
    }function U(t) {
      return new Bi(void 0, void 0, void 0, String(t));
    }function W(t) {
      var e = new Bi(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions);return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isCloned = !0, e;
    }function z(t) {
      for (var e = new Array(t.length), n = 0; n < t.length; n++) {
        e[n] = W(t[n]);
      }return e;
    }function V(t, e, n, r, i) {
      if (t) {
        var o = n.$options._base;if (p(t) && (t = o.extend(t)), "function" == typeof t) {
          if (!t.cid) if (t.resolved) t = t.resolved;else if (t = Q(t, o, function () {
            n.$forceUpdate();
          }), !t) return;Bt(t), e = e || {};var a = tt(e, t);if (t.options.functional) return X(t, a, e, n, r);var s = e.on;e.on = e.nativeOn, t.options.abstract && (e = {}), nt(e);var u = t.options.name || i,
              c = new Bi("vue-component-" + t.cid + (u ? "-" + u : ""), e, void 0, void 0, void 0, n, { Ctor: t, propsData: a, listeners: s, tag: i, children: r });return c;
        }
      }
    }function X(t, e, n, r, i) {
      var o = {},
          a = t.options.props;if (a) for (var s in a) {
        o[s] = q(s, a, e);
      }var u = Object.create(r),
          c = function c(t, e, n, r) {
        return ft(u, t, e, n, r, !0);
      },
          l = t.options.render.call(null, c, { props: o, data: n, parent: r, children: i, slots: function slots() {
          return gt(i, r);
        } });return l instanceof Bi && (l.functionalContext = r, n.slot && ((l.data || (l.data = {})).slot = n.slot)), l;
    }function K(t, e, n, r) {
      var i = t.componentOptions,
          o = { _isComponent: !0, parent: e, propsData: i.propsData, _componentTag: i.tag, _parentVnode: t, _parentListeners: i.listeners, _renderChildren: i.children, _parentElm: n || null, _refElm: r || null },
          a = t.data.inlineTemplate;return a && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new i.Ctor(o);
    }function J(t, e, n, r) {
      if (!t.componentInstance || t.componentInstance._isDestroyed) {
        var i = t.componentInstance = K(t, Zi, n, r);i.$mount(e ? t.elm : void 0, e);
      } else if (t.data.keepAlive) {
        var o = t;G(o, o);
      }
    }function G(t, e) {
      var n = e.componentOptions,
          r = e.componentInstance = t.componentInstance;r._updateFromParent(n.propsData, n.listeners, e, n.children);
    }function Z(t) {
      t.componentInstance._isMounted || (t.componentInstance._isMounted = !0, Tt(t.componentInstance, "mounted")), t.data.keepAlive && (t.componentInstance._inactive = !1, Tt(t.componentInstance, "activated"));
    }function Y(t) {
      t.componentInstance._isDestroyed || (t.data.keepAlive ? (t.componentInstance._inactive = !0, Tt(t.componentInstance, "deactivated")) : t.componentInstance.$destroy());
    }function Q(t, e, n) {
      if (!t.requested) {
        t.requested = !0;var r = t.pendingCallbacks = [n],
            i = !0,
            o = function o(n) {
          if (p(n) && (n = e.extend(n)), t.resolved = n, !i) for (var o = 0, a = r.length; o < a; o++) {
            r[o](n);
          }
        },
            a = function a(t) {},
            s = t(o, a);return s && "function" == typeof s.then && !t.resolved && s.then(o, a), i = !1, t.resolved;
      }t.pendingCallbacks.push(n);
    }function tt(t, e) {
      var n = e.options.props;if (n) {
        var r = {},
            i = t.attrs,
            o = t.props,
            a = t.domProps;if (i || o || a) for (var s in n) {
          var u = fi(s);et(r, o, s, u, !0) || et(r, i, s, u) || et(r, a, s, u);
        }return r;
      }
    }function et(t, e, n, r, i) {
      if (e) {
        if (a(e, n)) return t[n] = e[n], i || delete e[n], !0;if (a(e, r)) return t[n] = e[r], i || delete e[r], !0;
      }return !1;
    }function nt(t) {
      t.hook || (t.hook = {});for (var e = 0; e < Xi.length; e++) {
        var n = Xi[e],
            r = t.hook[n],
            i = Vi[n];t.hook[n] = r ? rt(i, r) : i;
      }
    }function rt(t, e) {
      return function (n, r, i, o) {
        t(n, r, i, o), e(n, r, i, o);
      };
    }function it(t, e, n, r) {
      r += e;var i = t.__injected || (t.__injected = {});if (!i[r]) {
        i[r] = !0;var o = t[e];o ? t[e] = function () {
          o.apply(this, arguments), n.apply(this, arguments);
        } : t[e] = n;
      }
    }function ot(t) {
      var e = { fn: t, invoker: function invoker() {
          var t = arguments,
              n = e.fn;if (Array.isArray(n)) for (var r = 0; r < n.length; r++) {
            n[r].apply(null, t);
          } else n.apply(null, arguments);
        } };return e;
    }function at(t, e, n, r, i) {
      var o, a, s, u;for (o in t) {
        a = t[o], s = e[o], u = Ki(o), a && (s ? a !== s && (s.fn = a, t[o] = s) : (a.invoker || (a = t[o] = ot(a)), n(u.name, a.invoker, u.once, u.capture)));
      }for (o in e) {
        t[o] || (u = Ki(o), r(u.name, e[o].invoker, u.capture));
      }
    }function st(t) {
      for (var e = 0; e < t.length; e++) {
        if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
      }return t;
    }function ut(t) {
      return s(t) ? [U(t)] : Array.isArray(t) ? ct(t) : void 0;
    }function ct(t, e) {
      var n,
          r,
          i,
          o = [];for (n = 0; n < t.length; n++) {
        r = t[n], null != r && "boolean" != typeof r && (i = o[o.length - 1], Array.isArray(r) ? o.push.apply(o, ct(r, (e || "") + "_" + n)) : s(r) ? i && i.text ? i.text += String(r) : "" !== r && o.push(U(r)) : r.text && i && i.text ? o[o.length - 1] = U(i.text + r.text) : (r.tag && null == r.key && null != e && (r.key = "__vlist" + e + "_" + n + "__"), o.push(r)));
      }return o;
    }function lt(t) {
      return t && t.filter(function (t) {
        return t && t.componentOptions;
      })[0];
    }function ft(t, e, n, r, i, o) {
      return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o && (i = Gi), pt(t, e, n, r, i);
    }function pt(t, e, n, r, i) {
      if (n && n.__ob__) return zi();if (!e) return zi();Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), i === Gi ? r = ut(r) : i === Ji && (r = st(r));var o, a;if ("string" == typeof e) {
        var s;a = gi.getTagNamespace(e), o = gi.isReservedTag(e) ? new Bi(gi.parsePlatformTagName(e), n, r, void 0, void 0, t) : (s = F(t.$options, "components", e)) ? V(s, n, t, r, e) : new Bi(e, n, r, void 0, void 0, t);
      } else o = V(e, n, t, r);return o ? (a && dt(o, a), o) : zi();
    }function dt(t, e) {
      if (t.ns = e, "foreignObject" !== t.tag && t.children) for (var n = 0, r = t.children.length; n < r; n++) {
        var i = t.children[n];i.tag && !i.ns && dt(i, e);
      }
    }function ht(t) {
      t.$vnode = null, t._vnode = null, t._staticTrees = null;var e = t.$options._parentVnode,
          n = e && e.context;t.$slots = gt(t.$options._renderChildren, n), t.$scopedSlots = {}, t._c = function (e, n, r, i) {
        return ft(t, e, n, r, i, !1);
      }, t.$createElement = function (e, n, r, i) {
        return ft(t, e, n, r, i, !0);
      };
    }function vt(t) {
      function e(t, e, n) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) {
          t[r] && "string" != typeof t[r] && i(t[r], e + "_" + r, n);
        } else i(t, e, n);
      }function i(t, e, n) {
        t.isStatic = !0, t.key = e, t.isOnce = n;
      }t.prototype.$nextTick = function (t) {
        return Ei(t, this);
      }, t.prototype._render = function () {
        var t = this,
            e = t.$options,
            n = e.render,
            r = e.staticRenderFns,
            i = e._parentVnode;if (t._isMounted) for (var o in t.$slots) {
          t.$slots[o] = z(t.$slots[o]);
        }i && i.data.scopedSlots && (t.$scopedSlots = i.data.scopedSlots), r && !t._staticTrees && (t._staticTrees = []), t.$vnode = i;var a;try {
          a = n.call(t._renderProxy, t.$createElement);
        } catch (e) {
          if (!gi.errorHandler) throw e;gi.errorHandler.call(null, e, t), a = t._vnode;
        }return a instanceof Bi || (a = zi()), a.parent = i, a;
      }, t.prototype._s = n, t.prototype._v = U, t.prototype._n = r, t.prototype._e = zi, t.prototype._q = m, t.prototype._i = y, t.prototype._m = function (t, n) {
        var r = this._staticTrees[t];return r && !n ? Array.isArray(r) ? z(r) : W(r) : (r = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), e(r, "__static__" + t, !1), r);
      }, t.prototype._o = function (t, n, r) {
        return e(t, "__once__" + n + (r ? "_" + r : ""), !0), t;
      }, t.prototype._f = function (t) {
        return F(this.$options, "filters", t, !0) || vi;
      }, t.prototype._l = function (t, e) {
        var n, r, i, o, a;if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), r = 0, i = t.length; r < i; r++) {
          n[r] = e(t[r], r);
        } else if ("number" == typeof t) for (n = new Array(t), r = 0; r < t; r++) {
          n[r] = e(r + 1, r);
        } else if (p(t)) for (o = Object.keys(t), n = new Array(o.length), r = 0, i = o.length; r < i; r++) {
          a = o[r], n[r] = e(t[a], a, r);
        }return n;
      }, t.prototype._t = function (t, e, n, r) {
        var i = this.$scopedSlots[t];if (i) return n = n || {}, r && f(n, r), i(n) || e;var o = this.$slots[t];return o || e;
      }, t.prototype._b = function (t, e, n, r) {
        if (n) if (p(n)) {
          Array.isArray(n) && (n = h(n));for (var i in n) {
            if ("class" === i || "style" === i) t[i] = n[i];else {
              var o = t.attrs && t.attrs.type,
                  a = r || gi.mustUseProp(e, o, i) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});a[i] = n[i];
            }
          }
        } else ;return t;
      }, t.prototype._k = function (t, e, n) {
        var r = gi.keyCodes[e] || n;return Array.isArray(r) ? r.indexOf(t) === -1 : r !== t;
      };
    }function gt(t, e) {
      var n = {};if (!t) return n;for (var r, i, o = [], a = 0, s = t.length; a < s; a++) {
        if (i = t[a], (i.context === e || i.functionalContext === e) && i.data && (r = i.data.slot)) {
          var u = n[r] || (n[r] = []);"template" === i.tag ? u.push.apply(u, i.children) : u.push(i);
        } else o.push(i);
      }return o.length && (1 !== o.length || " " !== o[0].text && !o[0].isComment) && (n.default = o), n;
    }function mt(t) {
      t._events = Object.create(null), t._hasHookEvent = !1;var e = t.$options._parentListeners;e && _t(t, e);
    }function yt(t, e, n) {
      n ? Wi.$once(t, e) : Wi.$on(t, e);
    }function bt(t, e) {
      Wi.$off(t, e);
    }function _t(t, e, n) {
      Wi = t, at(e, n || {}, yt, bt, t);
    }function wt(t) {
      var e = /^hook:/;t.prototype.$on = function (t, n) {
        var r = this;return (r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0), r;
      }, t.prototype.$once = function (t, e) {
        function n() {
          r.$off(t, n), e.apply(r, arguments);
        }var r = this;return n.fn = e, r.$on(t, n), r;
      }, t.prototype.$off = function (t, e) {
        var n = this;if (!arguments.length) return n._events = Object.create(null), n;var r = n._events[t];if (!r) return n;if (1 === arguments.length) return n._events[t] = null, n;for (var i, o = r.length; o--;) {
          if (i = r[o], i === e || i.fn === e) {
            r.splice(o, 1);break;
          }
        }return n;
      }, t.prototype.$emit = function (t) {
        var e = this,
            n = e._events[t];if (n) {
          n = n.length > 1 ? l(n) : n;for (var r = l(arguments, 1), i = 0, o = n.length; i < o; i++) {
            n[i].apply(e, r);
          }
        }return e;
      };
    }function xt(t) {
      var e = t.$options,
          n = e.parent;if (n && !e.abstract) {
        for (; n.$options.abstract && n.$parent;) {
          n = n.$parent;
        }n.$children.push(t);
      }t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
    }function Ct(t) {
      t.prototype._mount = function (t, e) {
        var n = this;return n.$el = t, n.$options.render || (n.$options.render = zi), Tt(n, "beforeMount"), n._watcher = new io(n, function () {
          n._update(n._render(), e);
        }, v), e = !1, null == n.$vnode && (n._isMounted = !0, Tt(n, "mounted")), n;
      }, t.prototype._update = function (t, e) {
        var n = this;n._isMounted && Tt(n, "beforeUpdate");var r = n.$el,
            i = n._vnode,
            o = Zi;Zi = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), Zi = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, t.prototype._updateFromParent = function (t, e, n, r) {
        var i = this,
            o = !(!i.$options._renderChildren && !r);if (i.$options._parentVnode = n, i.$vnode = n, i._vnode && (i._vnode.parent = n), i.$options._renderChildren = r, t && i.$options.props) {
          Pi.shouldConvert = !1;for (var a = i.$options._propKeys || [], s = 0; s < a.length; s++) {
            var u = a[s];i[u] = q(u, i.$options.props, t, i);
          }Pi.shouldConvert = !0, i.$options.propsData = t;
        }if (e) {
          var c = i.$options._parentListeners;i.$options._parentListeners = e, _t(i, e, c);
        }o && (i.$slots = gt(r, n.context), i.$forceUpdate());
      }, t.prototype.$forceUpdate = function () {
        var t = this;t._watcher && t._watcher.update();
      }, t.prototype.$destroy = function () {
        var t = this;if (!t._isBeingDestroyed) {
          Tt(t, "beforeDestroy"), t._isBeingDestroyed = !0;var e = t.$parent;!e || e._isBeingDestroyed || t.$options.abstract || o(e.$children, t), t._watcher && t._watcher.teardown();for (var n = t._watchers.length; n--;) {
            t._watchers[n].teardown();
          }t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, Tt(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.__patch__(t._vnode, null);
        }
      };
    }function Tt(t, e) {
      var n = t.$options[e];if (n) for (var r = 0, i = n.length; r < i; r++) {
        n[r].call(t);
      }t._hasHookEvent && t.$emit("hook:" + e);
    }function $t() {
      Yi.length = 0, Qi = {}, to = eo = !1;
    }function kt() {
      eo = !0;var t, e, n;for (Yi.sort(function (t, e) {
        return t.id - e.id;
      }), no = 0; no < Yi.length; no++) {
        t = Yi[no], e = t.id, Qi[e] = null, t.run();
      }for (no = Yi.length; no--;) {
        t = Yi[no], n = t.vm, n._watcher === t && n._isMounted && Tt(n, "updated");
      }Ai && gi.devtools && Ai.emit("flush"), $t();
    }function At(t) {
      var e = t.id;if (null == Qi[e]) {
        if (Qi[e] = !0, eo) {
          for (var n = Yi.length - 1; n >= 0 && Yi[n].id > t.id;) {
            n--;
          }Yi.splice(Math.max(n, no) + 1, 0, t);
        } else Yi.push(t);to || (to = !0, Ei(kt));
      }
    }function Et(t) {
      oo.clear(), St(t, oo);
    }function St(t, e) {
      var n,
          r,
          i = Array.isArray(t);if ((i || p(t)) && Object.isExtensible(t)) {
        if (t.__ob__) {
          var o = t.__ob__.dep.id;if (e.has(o)) return;e.add(o);
        }if (i) for (n = t.length; n--;) {
          St(t[n], e);
        } else for (r = Object.keys(t), n = r.length; n--;) {
          St(t[r[n]], e);
        }
      }
    }function Ot(t) {
      t._watchers = [];var e = t.$options;e.props && jt(t, e.props), e.methods && Rt(t, e.methods), e.data ? Nt(t) : A(t._data = {}, !0), e.computed && Dt(t, e.computed), e.watch && Lt(t, e.watch);
    }function jt(t, e) {
      var n = t.$options.propsData || {},
          r = t.$options._propKeys = Object.keys(e),
          i = !t.$parent;Pi.shouldConvert = i;for (var o = function o(i) {
        var o = r[i];E(t, o, q(o, e, n, t));
      }, a = 0; a < r.length; a++) {
        o(a);
      }Pi.shouldConvert = !0;
    }function Nt(t) {
      var e = t.$options.data;e = t._data = "function" == typeof e ? e.call(t) : e || {}, d(e) || (e = {});for (var n = Object.keys(e), r = t.$options.props, i = n.length; i--;) {
        r && a(r, n[i]) || qt(t, n[i]);
      }A(e, !0);
    }function Dt(t, e) {
      for (var n in e) {
        var r = e[n];"function" == typeof r ? (ao.get = It(r, t), ao.set = v) : (ao.get = r.get ? r.cache !== !1 ? It(r.get, t) : c(r.get, t) : v, ao.set = r.set ? c(r.set, t) : v), Object.defineProperty(t, n, ao);
      }
    }function It(t, e) {
      var n = new io(e, t, v, { lazy: !0 });return function () {
        return n.dirty && n.evaluate(), Ni.target && n.depend(), n.value;
      };
    }function Rt(t, e) {
      for (var n in e) {
        t[n] = null == e[n] ? v : c(e[n], t);
      }
    }function Lt(t, e) {
      for (var n in e) {
        var r = e[n];if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
          Pt(t, n, r[i]);
        } else Pt(t, n, r);
      }
    }function Pt(t, e, n) {
      var r;d(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
    }function Ft(t) {
      var e = {};e.get = function () {
        return this._data;
      }, Object.defineProperty(t.prototype, "$data", e), t.prototype.$set = S, t.prototype.$delete = O, t.prototype.$watch = function (t, e, n) {
        var r = this;n = n || {}, n.user = !0;var i = new io(r, t, e, n);return n.immediate && e.call(r, i.value), function () {
          i.teardown();
        };
      };
    }function qt(t, e) {
      b(e) || Object.defineProperty(t, e, { configurable: !0, enumerable: !0, get: function get() {
          return t._data[e];
        }, set: function set(n) {
          t._data[e] = n;
        } });
    }function Mt(t) {
      t.prototype._init = function (t) {
        var e = this;e._uid = so++, e._isVue = !0, t && t._isComponent ? Ht(e, t) : e.$options = P(Bt(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, xt(e), mt(e), ht(e), Tt(e, "beforeCreate"), Ot(e), Tt(e, "created"), e.$options.el && e.$mount(e.$options.el);
      };
    }function Ht(t, e) {
      var n = t.$options = Object.create(t.constructor.options);n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
    }function Bt(t) {
      var e = t.options;if (t.super) {
        var n = t.super.options,
            r = t.superOptions,
            i = t.extendOptions;n !== r && (t.superOptions = n, i.render = e.render, i.staticRenderFns = e.staticRenderFns, i._scopeId = e._scopeId, e = t.options = P(n, i), e.name && (e.components[e.name] = t));
      }return e;
    }function Ut(t) {
      this._init(t);
    }function Wt(t) {
      t.use = function (t) {
        if (!t.installed) {
          var e = l(arguments, 1);return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this;
        }
      };
    }function zt(t) {
      t.mixin = function (t) {
        this.options = P(this.options, t);
      };
    }function Vt(t) {
      t.cid = 0;var e = 1;t.extend = function (t) {
        t = t || {};var n = this,
            r = n.cid,
            i = t._Ctor || (t._Ctor = {});if (i[r]) return i[r];var o = t.name || n.options.name,
            a = function a(t) {
          this._init(t);
        };return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = P(n.options, t), a.super = n, a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, gi._assetTypes.forEach(function (t) {
          a[t] = n[t];
        }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, i[r] = a, a;
      };
    }function Xt(t) {
      gi._assetTypes.forEach(function (e) {
        t[e] = function (t, n) {
          return n ? ("component" === e && d(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = { bind: n, update: n }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
        };
      });
    }function Kt(t) {
      return t && (t.Ctor.options.name || t.tag);
    }function Jt(t, e) {
      return "string" == typeof t ? t.split(",").indexOf(e) > -1 : t.test(e);
    }function Gt(t, e) {
      for (var n in t) {
        var r = t[n];if (r) {
          var i = Kt(r.componentOptions);i && !e(i) && (Zt(r), t[n] = null);
        }
      }
    }function Zt(t) {
      t && (t.componentInstance._inactive || Tt(t.componentInstance, "deactivated"), t.componentInstance.$destroy());
    }function Yt(t) {
      var e = {};e.get = function () {
        return gi;
      }, Object.defineProperty(t, "config", e), t.util = Hi, t.set = S, t.delete = O, t.nextTick = Ei, t.options = Object.create(null), gi._assetTypes.forEach(function (e) {
        t.options[e + "s"] = Object.create(null);
      }), t.options._base = t, f(t.options.components, lo), Wt(t), zt(t), Vt(t), Xt(t);
    }function Qt(t) {
      for (var e = t.data, n = t, r = t; r.componentInstance;) {
        r = r.componentInstance._vnode, r.data && (e = te(r.data, e));
      }for (; n = n.parent;) {
        n.data && (e = te(e, n.data));
      }return ee(e);
    }function te(t, e) {
      return { staticClass: ne(t.staticClass, e.staticClass), class: t.class ? [t.class, e.class] : e.class };
    }function ee(t) {
      var e = t.class,
          n = t.staticClass;return n || e ? ne(n, re(e)) : "";
    }function ne(t, e) {
      return t ? e ? t + " " + e : t : e || "";
    }function re(t) {
      var e = "";if (!t) return e;if ("string" == typeof t) return t;if (Array.isArray(t)) {
        for (var n, r = 0, i = t.length; r < i; r++) {
          t[r] && (n = re(t[r])) && (e += n + " ");
        }return e.slice(0, -1);
      }if (p(t)) {
        for (var o in t) {
          t[o] && (e += o + " ");
        }return e.slice(0, -1);
      }return e;
    }function ie(t) {
      return To(t) ? "svg" : "math" === t ? "math" : void 0;
    }function oe(t) {
      if (!bi) return !0;if (ko(t)) return !1;if (t = t.toLowerCase(), null != Ao[t]) return Ao[t];var e = document.createElement(t);return t.indexOf("-") > -1 ? Ao[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Ao[t] = /HTMLUnknownElement/.test(e.toString());
    }function ae(t) {
      if ("string" == typeof t) {
        if (t = document.querySelector(t), !t) return document.createElement("div");
      }return t;
    }function se(t, e) {
      var n = document.createElement(t);return "select" !== t ? n : (e.data && e.data.attrs && "multiple" in e.data.attrs && n.setAttribute("multiple", "multiple"), n);
    }function ue(t, e) {
      return document.createElementNS(xo[t], e);
    }function ce(t) {
      return document.createTextNode(t);
    }function le(t) {
      return document.createComment(t);
    }function fe(t, e, n) {
      t.insertBefore(e, n);
    }function pe(t, e) {
      t.removeChild(e);
    }function de(t, e) {
      t.appendChild(e);
    }function he(t) {
      return t.parentNode;
    }function ve(t) {
      return t.nextSibling;
    }function ge(t) {
      return t.tagName;
    }function me(t, e) {
      t.textContent = e;
    }function ye(t, e, n) {
      t.setAttribute(e, n);
    }function be(t, e) {
      var n = t.data.ref;if (n) {
        var r = t.context,
            i = t.componentInstance || t.elm,
            a = r.$refs;e ? Array.isArray(a[n]) ? o(a[n], i) : a[n] === i && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) && a[n].indexOf(i) < 0 ? a[n].push(i) : a[n] = [i] : a[n] = i;
      }
    }function _e(t) {
      return null == t;
    }function we(t) {
      return null != t;
    }function xe(t, e) {
      return t.key === e.key && t.tag === e.tag && t.isComment === e.isComment && !t.data == !e.data;
    }function Ce(t, e, n) {
      var r,
          i,
          o = {};for (r = e; r <= n; ++r) {
        i = t[r].key, we(i) && (o[i] = r);
      }return o;
    }function Te(t) {
      function e(t) {
        return new Bi(A.tagName(t).toLowerCase(), {}, [], void 0, t);
      }function n(t, e) {
        function n() {
          0 === --n.listeners && r(t);
        }return n.listeners = e, n;
      }function r(t) {
        var e = A.parentNode(t);e && A.removeChild(e, t);
      }function o(t, e, n, r, i) {
        if (t.isRootInsert = !i, !a(t, e, n, r)) {
          var o = t.data,
              s = t.children,
              u = t.tag;we(u) ? (t.elm = t.ns ? A.createElementNS(t.ns, u) : A.createElement(u, t), h(t), f(t, s, e), we(o) && d(t, e), l(n, t.elm, r)) : t.isComment ? (t.elm = A.createComment(t.text), l(n, t.elm, r)) : (t.elm = A.createTextNode(t.text), l(n, t.elm, r));
        }
      }function a(t, e, n, r) {
        var i = t.data;if (we(i)) {
          var o = we(t.componentInstance) && i.keepAlive;if (we(i = i.hook) && we(i = i.init) && i(t, !1, n, r), we(t.componentInstance)) return u(t, e), o && c(t, e, n, r), !0;
        }
      }function u(t, e) {
        t.data.pendingInsert && e.push.apply(e, t.data.pendingInsert), t.elm = t.componentInstance.$el, p(t) ? (d(t, e), h(t)) : (be(t), e.push(t));
      }function c(t, e, n, r) {
        for (var i, o = t; o.componentInstance;) {
          if (o = o.componentInstance._vnode, we(i = o.data) && we(i = i.transition)) {
            for (i = 0; i < $.activate.length; ++i) {
              $.activate[i](Oo, o);
            }e.push(o);break;
          }
        }l(n, t.elm, r);
      }function l(t, e, n) {
        t && (n ? A.insertBefore(t, e, n) : A.appendChild(t, e));
      }function f(t, e, n) {
        if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) {
          o(e[r], n, t.elm, null, !0);
        } else s(t.text) && A.appendChild(t.elm, A.createTextNode(t.text));
      }function p(t) {
        for (; t.componentInstance;) {
          t = t.componentInstance._vnode;
        }return we(t.tag);
      }function d(t, e) {
        for (var n = 0; n < $.create.length; ++n) {
          $.create[n](Oo, t);
        }C = t.data.hook, we(C) && (C.create && C.create(Oo, t), C.insert && e.push(t));
      }function h(t) {
        var e;we(e = t.context) && we(e = e.$options._scopeId) && A.setAttribute(t.elm, e, ""), we(e = Zi) && e !== t.context && we(e = e.$options._scopeId) && A.setAttribute(t.elm, e, "");
      }function v(t, e, n, r, i, a) {
        for (; r <= i; ++r) {
          o(n[r], a, t, e);
        }
      }function g(t) {
        var e,
            n,
            r = t.data;if (we(r)) for (we(e = r.hook) && we(e = e.destroy) && e(t), e = 0; e < $.destroy.length; ++e) {
          $.destroy[e](t);
        }if (we(e = t.children)) for (n = 0; n < t.children.length; ++n) {
          g(t.children[n]);
        }
      }function m(t, e, n, i) {
        for (; n <= i; ++n) {
          var o = e[n];we(o) && (we(o.tag) ? (y(o), g(o)) : r(o.elm));
        }
      }function y(t, e) {
        if (e || we(t.data)) {
          var i = $.remove.length + 1;for (e ? e.listeners += i : e = n(t.elm, i), we(C = t.componentInstance) && we(C = C._vnode) && we(C.data) && y(C, e), C = 0; C < $.remove.length; ++C) {
            $.remove[C](t, e);
          }we(C = t.data.hook) && we(C = C.remove) ? C(t, e) : e();
        } else r(t.elm);
      }function b(t, e, n, r, i) {
        for (var a, s, u, c, l = 0, f = 0, p = e.length - 1, d = e[0], h = e[p], g = n.length - 1, y = n[0], b = n[g], w = !i; l <= p && f <= g;) {
          _e(d) ? d = e[++l] : _e(h) ? h = e[--p] : xe(d, y) ? (_(d, y, r), d = e[++l], y = n[++f]) : xe(h, b) ? (_(h, b, r), h = e[--p], b = n[--g]) : xe(d, b) ? (_(d, b, r), w && A.insertBefore(t, d.elm, A.nextSibling(h.elm)), d = e[++l], b = n[--g]) : xe(h, y) ? (_(h, y, r), w && A.insertBefore(t, h.elm, d.elm), h = e[--p], y = n[++f]) : (_e(a) && (a = Ce(e, l, p)), s = we(y.key) ? a[y.key] : null, _e(s) ? (o(y, r, t, d.elm), y = n[++f]) : (u = e[s], xe(u, y) ? (_(u, y, r), e[s] = void 0, w && A.insertBefore(t, y.elm, d.elm), y = n[++f]) : (o(y, r, t, d.elm), y = n[++f])));
        }l > p ? (c = _e(n[g + 1]) ? null : n[g + 1].elm, v(t, c, n, f, g, r)) : f > g && m(t, e, l, p);
      }function _(t, e, n, r) {
        if (t !== e) {
          if (e.isStatic && t.isStatic && e.key === t.key && (e.isCloned || e.isOnce)) return e.elm = t.elm, void (e.componentInstance = t.componentInstance);var i,
              o = e.data,
              a = we(o);a && we(i = o.hook) && we(i = i.prepatch) && i(t, e);var s = e.elm = t.elm,
              u = t.children,
              c = e.children;if (a && p(e)) {
            for (i = 0; i < $.update.length; ++i) {
              $.update[i](t, e);
            }we(i = o.hook) && we(i = i.update) && i(t, e);
          }_e(e.text) ? we(u) && we(c) ? u !== c && b(s, u, c, n, r) : we(c) ? (we(t.text) && A.setTextContent(s, ""), v(s, null, c, 0, c.length - 1, n)) : we(u) ? m(s, u, 0, u.length - 1) : we(t.text) && A.setTextContent(s, "") : t.text !== e.text && A.setTextContent(s, e.text), a && we(i = o.hook) && we(i = i.postpatch) && i(t, e);
        }
      }function w(t, e, n) {
        if (n && t.parent) t.parent.data.pendingInsert = e;else for (var r = 0; r < e.length; ++r) {
          e[r].data.hook.insert(e[r]);
        }
      }function x(t, e, n) {
        e.elm = t;var r = e.tag,
            i = e.data,
            o = e.children;if (we(i) && (we(C = i.hook) && we(C = C.init) && C(e, !0), we(C = e.componentInstance))) return u(e, n), !0;if (we(r)) {
          if (we(o)) if (t.hasChildNodes()) {
            for (var a = !0, s = t.firstChild, c = 0; c < o.length; c++) {
              if (!s || !x(s, o[c], n)) {
                a = !1;break;
              }s = s.nextSibling;
            }if (!a || s) return !1;
          } else f(e, o, n);if (we(i)) for (var l in i) {
            if (!E(l)) {
              d(e, n);break;
            }
          }
        } else t.data !== e.text && (t.data = e.text);return !0;
      }var C,
          T,
          $ = {},
          k = t.modules,
          A = t.nodeOps;for (C = 0; C < jo.length; ++C) {
        for ($[jo[C]] = [], T = 0; T < k.length; ++T) {
          void 0 !== k[T][jo[C]] && $[jo[C]].push(k[T][jo[C]]);
        }
      }var E = i("attrs,style,class,staticClass,staticStyle,key");return function (t, n, r, i, a, s) {
        if (!n) return void (t && g(t));var u = !1,
            c = [];if (t) {
          var l = we(t.nodeType);if (!l && xe(t, n)) _(t, n, c, i);else {
            if (l) {
              if (1 === t.nodeType && t.hasAttribute("server-rendered") && (t.removeAttribute("server-rendered"), r = !0), r && x(t, n, c)) return w(n, c, !0), t;t = e(t);
            }var f = t.elm,
                d = A.parentNode(f);if (o(n, c, f._leaveCb ? null : d, A.nextSibling(f)), n.parent) {
              for (var h = n.parent; h;) {
                h.elm = n.elm, h = h.parent;
              }if (p(n)) for (var v = 0; v < $.create.length; ++v) {
                $.create[v](Oo, n.parent);
              }
            }null !== d ? m(d, [t], 0, 0) : we(t.tag) && g(t);
          }
        } else u = !0, o(n, c, a, s);return w(n, c, u), n.elm;
      };
    }function $e(t, e) {
      (t.data.directives || e.data.directives) && ke(t, e);
    }function ke(t, e) {
      var n,
          r,
          i,
          o = t === Oo,
          a = e === Oo,
          s = Ae(t.data.directives, t.context),
          u = Ae(e.data.directives, e.context),
          c = [],
          l = [];for (n in u) {
        r = s[n], i = u[n], r ? (i.oldValue = r.value, Se(i, "update", e, t), i.def && i.def.componentUpdated && l.push(i)) : (Se(i, "bind", e, t), i.def && i.def.inserted && c.push(i));
      }if (c.length) {
        var f = function f() {
          for (var n = 0; n < c.length; n++) {
            Se(c[n], "inserted", e, t);
          }
        };o ? it(e.data.hook || (e.data.hook = {}), "insert", f, "dir-insert") : f();
      }if (l.length && it(e.data.hook || (e.data.hook = {}), "postpatch", function () {
        for (var n = 0; n < l.length; n++) {
          Se(l[n], "componentUpdated", e, t);
        }
      }, "dir-postpatch"), !o) for (n in s) {
        u[n] || Se(s[n], "unbind", t, t, a);
      }
    }function Ae(t, e) {
      var n = Object.create(null);if (!t) return n;var r, i;for (r = 0; r < t.length; r++) {
        i = t[r], i.modifiers || (i.modifiers = Do), n[Ee(i)] = i, i.def = F(e.$options, "directives", i.name, !0);
      }return n;
    }function Ee(t) {
      return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
    }function Se(t, e, n, r, i) {
      var o = t.def && t.def[e];o && o(n.elm, t, n, r, i);
    }function Oe(t, e) {
      if (t.data.attrs || e.data.attrs) {
        var n,
            r,
            i,
            o = e.elm,
            a = t.data.attrs || {},
            s = e.data.attrs || {};s.__ob__ && (s = e.data.attrs = f({}, s));for (n in s) {
          r = s[n], i = a[n], i !== r && je(o, n, r);
        }xi && s.value !== a.value && je(o, "value", s.value);for (n in a) {
          null == s[n] && (bo(n) ? o.removeAttributeNS(yo, _o(n)) : go(n) || o.removeAttribute(n));
        }
      }
    }function je(t, e, n) {
      mo(e) ? wo(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : go(e) ? t.setAttribute(e, wo(n) || "false" === n ? "false" : "true") : bo(e) ? wo(n) ? t.removeAttributeNS(yo, _o(e)) : t.setAttributeNS(yo, e, n) : wo(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
    }function Ne(t, e) {
      var n = e.elm,
          r = e.data,
          i = t.data;if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
        var o = Qt(e),
            a = n._transitionClasses;a && (o = ne(o, re(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o);
      }
    }function De(t, _e4, n, r) {
      if (n) {
        var i = _e4,
            o = fo;_e4 = function e(n) {
          Ie(t, _e4, r, o), 1 === arguments.length ? i(n) : i.apply(null, arguments);
        };
      }fo.addEventListener(t, _e4, r);
    }function Ie(t, e, n, r) {
      (r || fo).removeEventListener(t, e, n);
    }function Re(t, e) {
      if (t.data.on || e.data.on) {
        var n = e.data.on || {},
            r = t.data.on || {};fo = e.elm, at(n, r, De, Ie, e.context);
      }
    }function Le(t, e) {
      if (t.data.domProps || e.data.domProps) {
        var n,
            r,
            i = e.elm,
            o = t.data.domProps || {},
            a = e.data.domProps || {};a.__ob__ && (a = e.data.domProps = f({}, a));for (n in o) {
          null == a[n] && (i[n] = "");
        }for (n in a) {
          if (r = a[n], "textContent" !== n && "innerHTML" !== n || (e.children && (e.children.length = 0), r !== o[n])) if ("value" === n) {
            i._value = r;var s = null == r ? "" : String(r);Pe(i, e, s) && (i.value = s);
          } else i[n] = r;
        }
      }
    }function Pe(t, e, n) {
      return !t.composing && ("option" === e.tag || Fe(t, n) || qe(e, n));
    }function Fe(t, e) {
      return document.activeElement !== t && t.value !== e;
    }function qe(t, e) {
      var n = t.elm.value,
          i = t.elm._vModifiers;return i && i.number || "number" === t.elm.type ? r(n) !== r(e) : i && i.trim ? n.trim() !== e.trim() : n !== e;
    }function Me(t) {
      var e = He(t.style);return t.staticStyle ? f(t.staticStyle, e) : e;
    }function He(t) {
      return Array.isArray(t) ? h(t) : "string" == typeof t ? qo(t) : t;
    }function Be(t, e) {
      var n,
          r = {};if (e) for (var i = t; i.componentInstance;) {
        i = i.componentInstance._vnode, i.data && (n = Me(i.data)) && f(r, n);
      }(n = Me(t.data)) && f(r, n);for (var o = t; o = o.parent;) {
        o.data && (n = Me(o.data)) && f(r, n);
      }return r;
    }function Ue(t, e) {
      var n = e.data,
          r = t.data;if (n.staticStyle || n.style || r.staticStyle || r.style) {
        var i,
            o,
            a = e.elm,
            s = t.data.staticStyle,
            u = t.data.style || {},
            c = s || u,
            l = He(e.data.style) || {};e.data.style = l.__ob__ ? f({}, l) : l;var p = Be(e, !0);for (o in c) {
          null == p[o] && Bo(a, o, "");
        }for (o in p) {
          i = p[o], i !== c[o] && Bo(a, o, null == i ? "" : i);
        }
      }
    }function We(t, e) {
      if (e && e.trim()) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
        return t.classList.add(e);
      }) : t.classList.add(e);else {
        var n = " " + t.getAttribute("class") + " ";n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
      }
    }function ze(t, e) {
      if (e && e.trim()) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
        return t.classList.remove(e);
      }) : t.classList.remove(e);else {
        for (var n = " " + t.getAttribute("class") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) {
          n = n.replace(r, " ");
        }t.setAttribute("class", n.trim());
      }
    }function Ve(t) {
      Qo(function () {
        Qo(t);
      });
    }function Xe(t, e) {
      (t._transitionClasses || (t._transitionClasses = [])).push(e), We(t, e);
    }function Ke(t, e) {
      t._transitionClasses && o(t._transitionClasses, e), ze(t, e);
    }function Je(t, e, n) {
      var r = Ge(t, e),
          i = r.type,
          o = r.timeout,
          a = r.propCount;if (!i) return n();var s = i === Xo ? Go : Yo,
          u = 0,
          c = function c() {
        t.removeEventListener(s, l), n();
      },
          l = function l(e) {
        e.target === t && ++u >= a && c();
      };setTimeout(function () {
        u < a && c();
      }, o + 1), t.addEventListener(s, l);
    }function Ge(t, e) {
      var n,
          r = window.getComputedStyle(t),
          i = r[Jo + "Delay"].split(", "),
          o = r[Jo + "Duration"].split(", "),
          a = Ze(i, o),
          s = r[Zo + "Delay"].split(", "),
          u = r[Zo + "Duration"].split(", "),
          c = Ze(s, u),
          l = 0,
          f = 0;e === Xo ? a > 0 && (n = Xo, l = a, f = o.length) : e === Ko ? c > 0 && (n = Ko, l = c, f = u.length) : (l = Math.max(a, c), n = l > 0 ? a > c ? Xo : Ko : null, f = n ? n === Xo ? o.length : u.length : 0);var p = n === Xo && ta.test(r[Jo + "Property"]);return { type: n, timeout: l, propCount: f, hasTransform: p };
    }function Ze(t, e) {
      for (; t.length < e.length;) {
        t = t.concat(t);
      }return Math.max.apply(null, e.map(function (e, n) {
        return Ye(e) + Ye(t[n]);
      }));
    }function Ye(t) {
      return 1e3 * Number(t.slice(0, -1));
    }function Qe(t, e) {
      var n = t.elm;n._leaveCb && (n._leaveCb.cancelled = !0, n._leaveCb());var r = en(t.data.transition);if (r && !n._enterCb && 1 === n.nodeType) {
        for (var i = r.css, o = r.type, a = r.enterClass, s = r.enterToClass, u = r.enterActiveClass, c = r.appearClass, l = r.appearToClass, f = r.appearActiveClass, p = r.beforeEnter, d = r.enter, h = r.afterEnter, v = r.enterCancelled, g = r.beforeAppear, m = r.appear, y = r.afterAppear, b = r.appearCancelled, _ = Zi, w = Zi.$vnode; w && w.parent;) {
          w = w.parent, _ = w.context;
        }var x = !_._isMounted || !t.isRootInsert;if (!x || m || "" === m) {
          var C = x ? c : a,
              T = x ? f : u,
              $ = x ? l : s,
              k = x ? g || p : p,
              A = x && "function" == typeof m ? m : d,
              E = x ? y || h : h,
              S = x ? b || v : v,
              O = i !== !1 && !xi,
              j = A && (A._length || A.length) > 1,
              N = n._enterCb = nn(function () {
            O && (Ke(n, $), Ke(n, T)), N.cancelled ? (O && Ke(n, C), S && S(n)) : E && E(n), n._enterCb = null;
          });t.data.show || it(t.data.hook || (t.data.hook = {}), "insert", function () {
            var e = n.parentNode,
                r = e && e._pending && e._pending[t.key];r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, N);
          }, "transition-insert"), k && k(n), O && (Xe(n, C), Xe(n, T), Ve(function () {
            Xe(n, $), Ke(n, C), N.cancelled || j || Je(n, o, N);
          })), t.data.show && (e && e(), A && A(n, N)), O || j || N();
        }
      }
    }function tn(t, e) {
      function n() {
        m.cancelled || (t.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[t.key] = t), l && l(r), v && (Xe(r, s), Xe(r, c), Ve(function () {
          Xe(r, u), Ke(r, s), m.cancelled || g || Je(r, a, m);
        })), f && f(r, m), v || g || m());
      }var r = t.elm;r._enterCb && (r._enterCb.cancelled = !0, r._enterCb());var i = en(t.data.transition);if (!i) return e();if (!r._leaveCb && 1 === r.nodeType) {
        var o = i.css,
            a = i.type,
            s = i.leaveClass,
            u = i.leaveToClass,
            c = i.leaveActiveClass,
            l = i.beforeLeave,
            f = i.leave,
            p = i.afterLeave,
            d = i.leaveCancelled,
            h = i.delayLeave,
            v = o !== !1 && !xi,
            g = f && (f._length || f.length) > 1,
            m = r._leaveCb = nn(function () {
          r.parentNode && r.parentNode._pending && (r.parentNode._pending[t.key] = null), v && (Ke(r, u), Ke(r, c)), m.cancelled ? (v && Ke(r, s), d && d(r)) : (e(), p && p(r)), r._leaveCb = null;
        });h ? h(n) : n();
      }
    }function en(t) {
      if (t) {
        if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
          var e = {};return t.css !== !1 && f(e, ea(t.name || "v")), f(e, t), e;
        }return "string" == typeof t ? ea(t) : void 0;
      }
    }function nn(t) {
      var e = !1;return function () {
        e || (e = !0, t());
      };
    }function rn(t, e) {
      e.data.show || Qe(e);
    }function on(t, e, n) {
      var r = e.value,
          i = t.multiple;if (!i || Array.isArray(r)) {
        for (var o, a, s = 0, u = t.options.length; s < u; s++) {
          if (a = t.options[s], i) o = y(r, sn(a)) > -1, a.selected !== o && (a.selected = o);else if (m(sn(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
        }i || (t.selectedIndex = -1);
      }
    }function an(t, e) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (m(sn(e[n]), t)) return !1;
      }return !0;
    }function sn(t) {
      return "_value" in t ? t._value : t.value;
    }function un(t) {
      t.target.composing = !0;
    }function cn(t) {
      t.target.composing = !1, ln(t.target, "input");
    }function ln(t, e) {
      var n = document.createEvent("HTMLEvents");n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }function fn(t) {
      return !t.componentInstance || t.data && t.data.transition ? t : fn(t.componentInstance._vnode);
    }function pn(t) {
      var e = t && t.componentOptions;return e && e.Ctor.options.abstract ? pn(lt(e.children)) : t;
    }function dn(t) {
      var e = {},
          n = t.$options;for (var r in n.propsData) {
        e[r] = t[r];
      }var i = n._parentListeners;for (var o in i) {
        e[ui(o)] = i[o].fn;
      }return e;
    }function hn(t, e) {
      return (/\d-keep-alive$/.test(e.tag) ? t("keep-alive") : null
      );
    }function vn(t) {
      for (; t = t.parent;) {
        if (t.data.transition) return !0;
      }
    }function gn(t, e) {
      return e.key === t.key && e.tag === t.tag;
    }function mn(t) {
      t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }function yn(t) {
      t.data.newPos = t.elm.getBoundingClientRect();
    }function bn(t) {
      var e = t.data.pos,
          n = t.data.newPos,
          r = e.left - n.left,
          i = e.top - n.top;if (r || i) {
        t.data.moved = !0;var o = t.elm.style;o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
      }
    }function _n(t, e) {
      var n = document.createElement("div");return n.innerHTML = '<div a="' + t + '">', n.innerHTML.indexOf(e) > 0;
    }function wn(t) {
      return ha = ha || document.createElement("div"), ha.innerHTML = t, ha.textContent;
    }function xn(t, e) {
      return e && (t = t.replace(ss, "\n")), t.replace(os, "<").replace(as, ">").replace(us, "&").replace(cs, '"');
    }function Cn(t, e) {
      function n(e) {
        f += e, t = t.substring(e);
      }function r() {
        var e = t.match($a);if (e) {
          var r = { tagName: e[1], attrs: [], start: f };n(e[0].length);for (var i, o; !(i = t.match(ka)) && (o = t.match(xa));) {
            n(o[0].length), r.attrs.push(o);
          }if (i) return r.unarySlash = i[1], n(i[0].length), r.end = f, r;
        }
      }function i(t) {
        var n = t.tagName,
            r = t.unarySlash;c && ("p" === s && ya(n) && o(s), ma(n) && s === n && o(n));for (var i = l(n) || "html" === n && "head" === s || !!r, a = t.attrs.length, f = new Array(a), p = 0; p < a; p++) {
          var d = t.attrs[p];ja && d[0].indexOf('""') === -1 && ("" === d[3] && delete d[3], "" === d[4] && delete d[4], "" === d[5] && delete d[5]);var h = d[3] || d[4] || d[5] || "";f[p] = { name: d[1], value: xn(h, e.shouldDecodeNewlines) };
        }i || (u.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: f }), s = n, r = ""), e.start && e.start(n, f, i, t.start, t.end);
      }function o(t, n, r) {
        var i, o;if (null == n && (n = f), null == r && (r = f), t && (o = t.toLowerCase()), t) for (i = u.length - 1; i >= 0 && u[i].lowerCasedTag !== o; i--) {} else i = 0;if (i >= 0) {
          for (var a = u.length - 1; a >= i; a--) {
            e.end && e.end(u[a].tag, n, r);
          }u.length = i, s = i && u[i - 1].tag;
        } else "br" === o ? e.start && e.start(t, [], !0, n, r) : "p" === o && (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r));
      }for (var a, s, u = [], c = e.expectHTML, l = e.isUnaryTag || hi, f = 0; t;) {
        if (a = t, s && rs(s)) {
          var p = s.toLowerCase(),
              d = is[p] || (is[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
              h = 0,
              v = t.replace(d, function (t, n, r) {
            return h = r.length, "script" !== p && "style" !== p && "noscript" !== p && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), e.chars && e.chars(n), "";
          });f += t.length - v.length, t = v, o(p, f - h, f);
        } else {
          var g = t.indexOf("<");if (0 === g) {
            if (Sa.test(t)) {
              var m = t.indexOf("-->");if (m >= 0) {
                n(m + 3);continue;
              }
            }if (Oa.test(t)) {
              var y = t.indexOf("]>");if (y >= 0) {
                n(y + 2);continue;
              }
            }var b = t.match(Ea);if (b) {
              n(b[0].length);continue;
            }var _ = t.match(Aa);if (_) {
              var w = f;n(_[0].length), o(_[1], w, f);continue;
            }var x = r();if (x) {
              i(x);continue;
            }
          }var C = void 0,
              T = void 0,
              $ = void 0;if (g > 0) {
            for (T = t.slice(g); !(Aa.test(T) || $a.test(T) || Sa.test(T) || Oa.test(T) || ($ = T.indexOf("<", 1), $ < 0));) {
              g += $, T = t.slice(g);
            }C = t.substring(0, g), n(g);
          }g < 0 && (C = t, t = ""), e.chars && C && e.chars(C);
        }if (t === a && e.chars) {
          e.chars(t);break;
        }
      }o();
    }function Tn(t) {
      function e() {
        (a || (a = [])).push(t.slice(h, i).trim()), h = i + 1;
      }var n,
          r,
          i,
          o,
          a,
          s = !1,
          u = !1,
          c = !1,
          l = !1,
          f = 0,
          p = 0,
          d = 0,
          h = 0;for (i = 0; i < t.length; i++) {
        if (r = n, n = t.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);else if (u) 34 === n && 92 !== r && (u = !1);else if (c) 96 === n && 92 !== r && (c = !1);else if (l) 47 === n && 92 !== r && (l = !1);else if (124 !== n || 124 === t.charCodeAt(i + 1) || 124 === t.charCodeAt(i - 1) || f || p || d) {
          switch (n) {case 34:
              u = !0;break;case 39:
              s = !0;break;case 96:
              c = !0;break;case 40:
              d++;break;case 41:
              d--;break;case 91:
              p++;break;case 93:
              p--;break;case 123:
              f++;break;case 125:
              f--;}if (47 === n) {
            for (var v = i - 1, g = void 0; v >= 0 && (g = t.charAt(v), " " === g); v--) {}g && /[\w$]/.test(g) || (l = !0);
          }
        } else void 0 === o ? (h = i + 1, o = t.slice(0, i).trim()) : e();
      }if (void 0 === o ? o = t.slice(0, i).trim() : 0 !== h && e(), a) for (i = 0; i < a.length; i++) {
        o = $n(o, a[i]);
      }return o;
    }function $n(t, e) {
      var n = e.indexOf("(");if (n < 0) return '_f("' + e + '")(' + t + ")";var r = e.slice(0, n),
          i = e.slice(n + 1);return '_f("' + r + '")(' + t + "," + i;
    }function kn(t, e) {
      var n = e ? ps(e) : ls;if (n.test(t)) {
        for (var r, i, o = [], a = n.lastIndex = 0; r = n.exec(t);) {
          i = r.index, i > a && o.push(JSON.stringify(t.slice(a, i)));var s = Tn(r[1].trim());o.push("_s(" + s + ")"), a = i + r[0].length;
        }return a < t.length && o.push(JSON.stringify(t.slice(a))), o.join("+");
      }
    }function An(t) {
      console.error("[Vue parser]: " + t);
    }function En(t, e) {
      return t ? t.map(function (t) {
        return t[e];
      }).filter(function (t) {
        return t;
      }) : [];
    }function Sn(t, e, n) {
      (t.props || (t.props = [])).push({ name: e, value: n });
    }function On(t, e, n) {
      (t.attrs || (t.attrs = [])).push({ name: e, value: n });
    }function jn(t, e, n, r, i, o) {
      (t.directives || (t.directives = [])).push({ name: e, rawName: n, value: r, arg: i, modifiers: o });
    }function Nn(t, e, n, r, i) {
      r && r.capture && (delete r.capture, e = "!" + e), r && r.once && (delete r.once, e = "~" + e);var o;r && r.native ? (delete r.native, o = t.nativeEvents || (t.nativeEvents = {})) : o = t.events || (t.events = {});var a = { value: n, modifiers: r },
          s = o[e];Array.isArray(s) ? i ? s.unshift(a) : s.push(a) : s ? o[e] = i ? [a, s] : [s, a] : o[e] = a;
    }function Dn(t, e, n) {
      var r = In(t, ":" + e) || In(t, "v-bind:" + e);if (null != r) return Tn(r);if (n !== !1) {
        var i = In(t, e);if (null != i) return JSON.stringify(i);
      }
    }function In(t, e) {
      var n;if (null != (n = t.attrsMap[e])) for (var r = t.attrsList, i = 0, o = r.length; i < o; i++) {
        if (r[i].name === e) {
          r.splice(i, 1);break;
        }
      }return n;
    }function Rn(t) {
      if (Da = t, Na = Da.length, Ra = La = Pa = 0, t.indexOf("[") < 0 || t.lastIndexOf("]") < Na - 1) return { exp: t, idx: null };for (; !Pn();) {
        Ia = Ln(), Fn(Ia) ? Mn(Ia) : 91 === Ia && qn(Ia);
      }return { exp: t.substring(0, La), idx: t.substring(La + 1, Pa) };
    }function Ln() {
      return Da.charCodeAt(++Ra);
    }function Pn() {
      return Ra >= Na;
    }function Fn(t) {
      return 34 === t || 39 === t;
    }function qn(t) {
      var e = 1;for (La = Ra; !Pn();) {
        if (t = Ln(), Fn(t)) Mn(t);else if (91 === t && e++, 93 === t && e--, 0 === e) {
          Pa = Ra;break;
        }
      }
    }function Mn(t) {
      for (var e = t; !Pn() && (t = Ln(), t !== e);) {}
    }function Hn(t, e) {
      Fa = e.warn || An, qa = e.getTagNamespace || hi, Ma = e.mustUseProp || hi, Ha = e.isPreTag || hi, Ba = En(e.modules, "preTransformNode"), Ua = En(e.modules, "transformNode"), Wa = En(e.modules, "postTransformNode"), za = e.delimiters;var n,
          r,
          i = [],
          o = e.preserveWhitespace !== !1,
          a = !1,
          s = !1;return Cn(t, { expectHTML: e.expectHTML, isUnaryTag: e.isUnaryTag, shouldDecodeNewlines: e.shouldDecodeNewlines, start: function start(t, o, u) {
          function c(t) {}var l = r && r.ns || qa(t);wi && "svg" === l && (o = or(o));var f = { type: 1, tag: t, attrsList: o, attrsMap: rr(o), parent: r, children: [] };l && (f.ns = l), ir(f) && !ki() && (f.forbidden = !0);for (var p = 0; p < Ba.length; p++) {
            Ba[p](f, e);
          }if (a || (Bn(f), f.pre && (a = !0)), Ha(f.tag) && (s = !0), a) Un(f);else {
            Vn(f), Xn(f), Zn(f), Wn(f), f.plain = !f.key && !o.length, zn(f), Yn(f), Qn(f);for (var d = 0; d < Ua.length; d++) {
              Ua[d](f, e);
            }tr(f);
          }if (n ? i.length || n.if && (f.elseif || f.else) && (c(f), Gn(n, { exp: f.elseif, block: f })) : (n = f, c(n)), r && !f.forbidden) if (f.elseif || f.else) Kn(f, r);else if (f.slotScope) {
            r.plain = !1;var h = f.slotTarget || "default";(r.scopedSlots || (r.scopedSlots = {}))[h] = f;
          } else r.children.push(f), f.parent = r;u || (r = f, i.push(f));for (var v = 0; v < Wa.length; v++) {
            Wa[v](f, e);
          }
        }, end: function end() {
          var t = i[i.length - 1],
              e = t.children[t.children.length - 1];e && 3 === e.type && " " === e.text && t.children.pop(), i.length -= 1, r = i[i.length - 1], t.pre && (a = !1), Ha(t.tag) && (s = !1);
        }, chars: function chars(t) {
          if (r && (!wi || "textarea" !== r.tag || r.attrsMap.placeholder !== t)) {
            var e = r.children;if (t = s || t.trim() ? _s(t) : o && e.length ? " " : "") {
              var n;!a && " " !== t && (n = kn(t, za)) ? e.push({ type: 2, expression: n, text: t }) : " " === t && " " === e[e.length - 1].text || r.children.push({ type: 3, text: t });
            }
          }
        } }), n;
    }function Bn(t) {
      null != In(t, "v-pre") && (t.pre = !0);
    }function Un(t) {
      var e = t.attrsList.length;if (e) for (var n = t.attrs = new Array(e), r = 0; r < e; r++) {
        n[r] = { name: t.attrsList[r].name, value: JSON.stringify(t.attrsList[r].value) };
      } else t.pre || (t.plain = !0);
    }function Wn(t) {
      var e = Dn(t, "key");e && (t.key = e);
    }function zn(t) {
      var e = Dn(t, "ref");e && (t.ref = e, t.refInFor = er(t));
    }function Vn(t) {
      var e;if (e = In(t, "v-for")) {
        var n = e.match(hs);if (!n) return;t.for = n[2].trim();var r = n[1].trim(),
            i = r.match(vs);i ? (t.alias = i[1].trim(), t.iterator1 = i[2].trim(), i[3] && (t.iterator2 = i[3].trim())) : t.alias = r;
      }
    }function Xn(t) {
      var e = In(t, "v-if");if (e) t.if = e, Gn(t, { exp: e, block: t });else {
        null != In(t, "v-else") && (t.else = !0);var n = In(t, "v-else-if");n && (t.elseif = n);
      }
    }function Kn(t, e) {
      var n = Jn(e.children);n && n.if && Gn(n, { exp: t.elseif, block: t });
    }function Jn(t) {
      for (var e = t.length; e--;) {
        if (1 === t[e].type) return t[e];t.pop();
      }
    }function Gn(t, e) {
      t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
    }function Zn(t) {
      var e = In(t, "v-once");null != e && (t.once = !0);
    }function Yn(t) {
      if ("slot" === t.tag) t.slotName = Dn(t, "name");else {
        var e = Dn(t, "slot");e && (t.slotTarget = '""' === e ? '"default"' : e), "template" === t.tag && (t.slotScope = In(t, "scope"));
      }
    }function Qn(t) {
      var e;(e = Dn(t, "is")) && (t.component = e), null != In(t, "inline-template") && (t.inlineTemplate = !0);
    }function tr(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u,
          c = t.attrsList;for (e = 0, n = c.length; e < n; e++) {
        if (r = i = c[e].name, o = c[e].value, ds.test(r)) {
          if (t.hasBindings = !0, s = nr(r), s && (r = r.replace(bs, "")), gs.test(r)) r = r.replace(gs, ""), o = Tn(o), u = !1, s && (s.prop && (u = !0, r = ui(r), "innerHtml" === r && (r = "innerHTML")), s.camel && (r = ui(r))), u || Ma(t.tag, t.attrsMap.type, r) ? Sn(t, r, o) : On(t, r, o);else if (ms.test(r)) r = r.replace(ms, ""), Nn(t, r, o, s);else {
            r = r.replace(ds, "");var l = r.match(ys);l && (a = l[1]) && (r = r.slice(0, -(a.length + 1))), jn(t, r, i, o, a, s);
          }
        } else {
          On(t, r, JSON.stringify(o));
        }
      }
    }function er(t) {
      for (var e = t; e;) {
        if (void 0 !== e.for) return !0;e = e.parent;
      }return !1;
    }function nr(t) {
      var e = t.match(bs);if (e) {
        var n = {};return e.forEach(function (t) {
          n[t.slice(1)] = !0;
        }), n;
      }
    }function rr(t) {
      for (var e = {}, n = 0, r = t.length; n < r; n++) {
        e[t[n].name] = t[n].value;
      }return e;
    }function ir(t) {
      return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type);
    }function or(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        var r = t[n];ws.test(r.name) || (r.name = r.name.replace(xs, ""), e.push(r));
      }return e;
    }function ar(t, e) {
      t && (Va = Cs(e.staticKeys || ""), Xa = e.isReservedTag || hi, ur(t), cr(t, !1));
    }function sr(t) {
      return i("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""));
    }function ur(t) {
      if (t.static = fr(t), 1 === t.type) {
        if (!Xa(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;for (var e = 0, n = t.children.length; e < n; e++) {
          var r = t.children[e];ur(r), r.static || (t.static = !1);
        }
      }
    }function cr(t, e) {
      if (1 === t.type) {
        if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);if (t.staticRoot = !1, t.children) for (var n = 0, r = t.children.length; n < r; n++) {
          cr(t.children[n], e || !!t.for);
        }t.ifConditions && lr(t.ifConditions, e);
      }
    }function lr(t, e) {
      for (var n = 1, r = t.length; n < r; n++) {
        cr(t[n].block, e);
      }
    }function fr(t) {
      return 2 !== t.type && (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || oi(t.tag) || !Xa(t.tag) || pr(t) || !Object.keys(t).every(Va))));
    }function pr(t) {
      for (; t.parent;) {
        if (t = t.parent, "template" !== t.tag) return !1;if (t.for) return !0;
      }return !1;
    }function dr(t, e) {
      var n = e ? "nativeOn:{" : "on:{";for (var r in t) {
        n += '"' + r + '":' + hr(r, t[r]) + ",";
      }return n.slice(0, -1) + "}";
    }function hr(t, e) {
      if (e) {
        if (Array.isArray(e)) return "[" + e.map(function (e) {
          return hr(t, e);
        }).join(",") + "]";if (e.modifiers) {
          var n = "",
              r = [];for (var i in e.modifiers) {
            As[i] ? n += As[i] : r.push(i);
          }r.length && (n = vr(r) + n);var o = $s.test(e.value) ? e.value + "($event)" : e.value;return "function($event){" + n + o + "}";
        }return Ts.test(e.value) || $s.test(e.value) ? e.value : "function($event){" + e.value + "}";
      }return "function(){}";
    }function vr(t) {
      return "if(" + t.map(gr).join("&&") + ")return;";
    }function gr(t) {
      var e = parseInt(t, 10);if (e) return "$event.keyCode!==" + e;var n = ks[t];return "_k($event.keyCode," + JSON.stringify(t) + (n ? "," + JSON.stringify(n) : "") + ")";
    }function mr(t, e) {
      t.wrapData = function (n) {
        return "_b(" + n + ",'" + t.tag + "'," + e.value + (e.modifiers && e.modifiers.prop ? ",true" : "") + ")";
      };
    }function yr(t, e) {
      var n = Qa,
          r = Qa = [],
          i = ts;ts = 0, es = e, Ka = e.warn || An, Ja = En(e.modules, "transformCode"), Ga = En(e.modules, "genData"), Za = e.directives || {}, Ya = e.isReservedTag || hi;var o = t ? br(t) : '_c("div")';return Qa = n, ts = i, { render: "with(this){return " + o + "}", staticRenderFns: r };
    }function br(t) {
      if (t.staticRoot && !t.staticProcessed) return _r(t);if (t.once && !t.onceProcessed) return wr(t);if (t.for && !t.forProcessed) return Tr(t);if (t.if && !t.ifProcessed) return xr(t);if ("template" !== t.tag || t.slotTarget) {
        if ("slot" === t.tag) return Lr(t);var e;if (t.component) e = Pr(t.component, t);else {
          var n = t.plain ? void 0 : $r(t),
              r = t.inlineTemplate ? null : Or(t, !0);e = "_c('" + t.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")";
        }for (var i = 0; i < Ja.length; i++) {
          e = Ja[i](t, e);
        }return e;
      }return Or(t) || "void 0";
    }function _r(t) {
      return t.staticProcessed = !0, Qa.push("with(this){return " + br(t) + "}"), "_m(" + (Qa.length - 1) + (t.staticInFor ? ",true" : "") + ")";
    }function wr(t) {
      if (t.onceProcessed = !0, t.if && !t.ifProcessed) return xr(t);if (t.staticInFor) {
        for (var e = "", n = t.parent; n;) {
          if (n.for) {
            e = n.key;break;
          }n = n.parent;
        }return e ? "_o(" + br(t) + "," + ts++ + (e ? "," + e : "") + ")" : br(t);
      }return _r(t);
    }function xr(t) {
      return t.ifProcessed = !0, Cr(t.ifConditions.slice());
    }function Cr(t) {
      function e(t) {
        return t.once ? wr(t) : br(t);
      }if (!t.length) return "_e()";var n = t.shift();return n.exp ? "(" + n.exp + ")?" + e(n.block) + ":" + Cr(t) : "" + e(n.block);
    }function Tr(t) {
      var e = t.for,
          n = t.alias,
          r = t.iterator1 ? "," + t.iterator1 : "",
          i = t.iterator2 ? "," + t.iterator2 : "";return t.forProcessed = !0, "_l((" + e + "),function(" + n + r + i + "){return " + br(t) + "})";
    }function $r(t) {
      var e = "{",
          n = kr(t);n && (e += n + ","), t.key && (e += "key:" + t.key + ","), t.ref && (e += "ref:" + t.ref + ","), t.refInFor && (e += "refInFor:true,"), t.pre && (e += "pre:true,"), t.component && (e += 'tag:"' + t.tag + '",');for (var r = 0; r < Ga.length; r++) {
        e += Ga[r](t);
      }if (t.attrs && (e += "attrs:{" + Fr(t.attrs) + "},"), t.props && (e += "domProps:{" + Fr(t.props) + "},"), t.events && (e += dr(t.events) + ","), t.nativeEvents && (e += dr(t.nativeEvents, !0) + ","), t.slotTarget && (e += "slot:" + t.slotTarget + ","), t.scopedSlots && (e += Er(t.scopedSlots) + ","), t.inlineTemplate) {
        var i = Ar(t);i && (e += i + ",");
      }return e = e.replace(/,$/, "") + "}", t.wrapData && (e = t.wrapData(e)), e;
    }function kr(t) {
      var e = t.directives;if (e) {
        var n,
            r,
            i,
            o,
            a = "directives:[",
            s = !1;for (n = 0, r = e.length; n < r; n++) {
          i = e[n], o = !0;var u = Za[i.name] || Es[i.name];u && (o = !!u(t, i, Ka)), o && (s = !0, a += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},");
        }return s ? a.slice(0, -1) + "]" : void 0;
      }
    }function Ar(t) {
      var e = t.children[0];if (1 === e.type) {
        var n = yr(e, es);return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function (t) {
          return "function(){" + t + "}";
        }).join(",") + "]}";
      }
    }function Er(t) {
      return "scopedSlots:{" + Object.keys(t).map(function (e) {
        return Sr(e, t[e]);
      }).join(",") + "}";
    }function Sr(t, e) {
      return t + ":function(" + String(e.attrsMap.scope) + "){return " + ("template" === e.tag ? Or(e) || "void 0" : br(e)) + "}";
    }function Or(t, e) {
      var n = t.children;if (n.length) {
        var r = n[0];if (1 === n.length && r.for && "template" !== r.tag && "slot" !== r.tag) return br(r);var i = jr(n);return "[" + n.map(Ir).join(",") + "]" + (e && i ? "," + i : "");
      }
    }function jr(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        var r = t[n];if (1 === r.type) {
          if (Nr(r) || r.ifConditions && r.ifConditions.some(function (t) {
            return Nr(t.block);
          })) {
            e = 2;break;
          }(Dr(r) || r.ifConditions && r.ifConditions.some(function (t) {
            return Dr(t.block);
          })) && (e = 1);
        }
      }return e;
    }function Nr(t) {
      return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
    }function Dr(t) {
      return !Ya(t.tag);
    }function Ir(t) {
      return 1 === t.type ? br(t) : Rr(t);
    }function Rr(t) {
      return "_v(" + (2 === t.type ? t.expression : qr(JSON.stringify(t.text))) + ")";
    }function Lr(t) {
      var e = t.slotName || '"default"',
          n = Or(t),
          r = "_t(" + e + (n ? "," + n : ""),
          i = t.attrs && "{" + t.attrs.map(function (t) {
        return ui(t.name) + ":" + t.value;
      }).join(",") + "}",
          o = t.attrsMap["v-bind"];return !i && !o || n || (r += ",null"), i && (r += "," + i), o && (r += (i ? "" : ",null") + "," + o), r + ")";
    }function Pr(t, e) {
      var n = e.inlineTemplate ? null : Or(e, !0);return "_c(" + t + "," + $r(e) + (n ? "," + n : "") + ")";
    }function Fr(t) {
      for (var e = "", n = 0; n < t.length; n++) {
        var r = t[n];e += '"' + r.name + '":' + qr(r.value) + ",";
      }return e.slice(0, -1);
    }function qr(t) {
      return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }function Mr(t, e) {
      var n = Hn(t.trim(), e);ar(n, e);var r = yr(n, e);return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
    }function Hr(t, e) {
      var n = (e.warn || An, In(t, "class"));n && (t.staticClass = JSON.stringify(n));var r = Dn(t, "class", !1);r && (t.classBinding = r);
    }function Br(t) {
      var e = "";return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e;
    }function Ur(t, e) {
      var n = (e.warn || An, In(t, "style"));if (n) {
        t.staticStyle = JSON.stringify(qo(n));
      }var r = Dn(t, "style", !1);r && (t.styleBinding = r);
    }function Wr(t) {
      var e = "";return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e;
    }function zr(t, e, n) {
      ns = n;var r = e.value,
          i = e.modifiers,
          o = t.tag,
          a = t.attrsMap.type;return "select" === o ? Jr(t, r, i) : "input" === o && "checkbox" === a ? Vr(t, r, i) : "input" === o && "radio" === a ? Xr(t, r, i) : Kr(t, r, i), !0;
    }function Vr(t, e, n) {
      var r = n && n.number,
          i = Dn(t, "value") || "null",
          o = Dn(t, "true-value") || "true",
          a = Dn(t, "false-value") || "false";Sn(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === o ? ":(" + e + ")" : ":_q(" + e + "," + o + ")")), Nn(t, "click", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + e + "=$$a.concat($$v))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + e + "=$$c}", null, !0);
    }function Xr(t, e, n) {
      var r = n && n.number,
          i = Dn(t, "value") || "null";i = r ? "_n(" + i + ")" : i, Sn(t, "checked", "_q(" + e + "," + i + ")"), Nn(t, "click", Gr(e, i), null, !0);
    }function Kr(t, e, n) {
      var r = t.attrsMap.type,
          i = n || {},
          o = i.lazy,
          a = i.number,
          s = i.trim,
          u = o || wi && "range" === r ? "change" : "input",
          c = !o && "range" !== r,
          l = "input" === t.tag || "textarea" === t.tag,
          f = l ? "$event.target.value" + (s ? ".trim()" : "") : s ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";f = a || "number" === r ? "_n(" + f + ")" : f;var p = Gr(e, f);l && c && (p = "if($event.target.composing)return;" + p), Sn(t, "value", l ? "_s(" + e + ")" : "(" + e + ")"), Nn(t, u, p, null, !0), (s || a || "number" === r) && Nn(t, "blur", "$forceUpdate()");
    }function Jr(t, e, n) {
      var r = n && n.number,
          i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})" + (null == t.attrsMap.multiple ? "[0]" : ""),
          o = Gr(e, i);Nn(t, "change", o, null, !0);
    }function Gr(t, e) {
      var n = Rn(t);return null === n.idx ? t + "=" + e : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + t + "=" + e + "}else{$$exp.splice($$idx, 1, " + e + ")}";
    }function Zr(t, e) {
      e.value && Sn(t, "textContent", "_s(" + e.value + ")");
    }function Yr(t, e) {
      e.value && Sn(t, "innerHTML", "_s(" + e.value + ")");
    }function Qr(t, e) {
      return e = e ? f(f({}, Is), e) : Is, Mr(t, e);
    }function ti(t, e, n) {
      var r = (e && e.warn || Oi, e && e.delimiters ? String(e.delimiters) + t : t);if (Ds[r]) return Ds[r];var i = {},
          o = Qr(t, e);i.render = ei(o.render);var a = o.staticRenderFns.length;i.staticRenderFns = new Array(a);for (var s = 0; s < a; s++) {
        i.staticRenderFns[s] = ei(o.staticRenderFns[s]);
      }return Ds[r] = i;
    }function ei(t) {
      try {
        return new Function(t);
      } catch (t) {
        return v;
      }
    }function ni(t) {
      if (t.outerHTML) return t.outerHTML;var e = document.createElement("div");return e.appendChild(t.cloneNode(!0)), e.innerHTML;
    }var ri,
        ii,
        oi = i("slot,component", !0),
        ai = Object.prototype.hasOwnProperty,
        si = /-(\w)/g,
        ui = u(function (t) {
      return t.replace(si, function (t, e) {
        return e ? e.toUpperCase() : "";
      });
    }),
        ci = u(function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }),
        li = /([^-])([A-Z])/g,
        fi = u(function (t) {
      return t.replace(li, "$1-$2").replace(li, "$1-$2").toLowerCase();
    }),
        pi = Object.prototype.toString,
        di = "[object Object]",
        hi = function hi() {
      return !1;
    },
        vi = function vi(t) {
      return t;
    },
        gi = { optionMergeStrategies: Object.create(null), silent: !1, devtools: !1, errorHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: hi, isUnknownElement: hi, getTagNamespace: v, parsePlatformTagName: vi, mustUseProp: hi, _assetTypes: ["component", "directive", "filter"], _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"], _maxUpdateCount: 100 },
        mi = /[^\w.$]/,
        yi = "__proto__" in {},
        bi = "undefined" != typeof window,
        _i = bi && window.navigator.userAgent.toLowerCase(),
        wi = _i && /msie|trident/.test(_i),
        xi = _i && _i.indexOf("msie 9.0") > 0,
        Ci = _i && _i.indexOf("edge/") > 0,
        Ti = _i && _i.indexOf("android") > 0,
        $i = _i && /iphone|ipad|ipod|ios/.test(_i),
        ki = function ki() {
      return void 0 === ri && (ri = !bi && "undefined" != typeof e && "server" === e.process.env.VUE_ENV), ri;
    },
        Ai = bi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        Ei = function () {
      function t() {
        r = !1;var t = n.slice(0);n.length = 0;for (var e = 0; e < t.length; e++) {
          t[e]();
        }
      }var e,
          n = [],
          r = !1;if ("undefined" != typeof Promise && x(Promise)) {
        var i = Promise.resolve(),
            o = function o(t) {
          console.error(t);
        };e = function e() {
          i.then(t).catch(o), $i && setTimeout(v);
        };
      } else if ("undefined" == typeof MutationObserver || !x(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) e = function e() {
        setTimeout(t, 0);
      };else {
        var a = 1,
            s = new MutationObserver(t),
            u = document.createTextNode(String(a));s.observe(u, { characterData: !0 }), e = function e() {
          a = (a + 1) % 2, u.data = String(a);
        };
      }return function (t, i) {
        var o;if (n.push(function () {
          t && t.call(i), o && o(i);
        }), r || (r = !0, e()), !t && "undefined" != typeof Promise) return new Promise(function (t) {
          o = t;
        });
      };
    }();ii = "undefined" != typeof Set && x(Set) ? Set : function () {
      function t() {
        this.set = Object.create(null);
      }return t.prototype.has = function (t) {
        return this.set[t] === !0;
      }, t.prototype.add = function (t) {
        this.set[t] = !0;
      }, t.prototype.clear = function () {
        this.set = Object.create(null);
      }, t;
    }();var Si,
        Oi = v,
        ji = 0,
        Ni = function Ni() {
      this.id = ji++, this.subs = [];
    };Ni.prototype.addSub = function (t) {
      this.subs.push(t);
    }, Ni.prototype.removeSub = function (t) {
      o(this.subs, t);
    }, Ni.prototype.depend = function () {
      Ni.target && Ni.target.addDep(this);
    }, Ni.prototype.notify = function () {
      for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) {
        t[e].update();
      }
    }, Ni.target = null;var Di = [],
        Ii = Array.prototype,
        Ri = Object.create(Ii);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
      var e = Ii[t];_(Ri, t, function () {
        for (var n = arguments, r = arguments.length, i = new Array(r); r--;) {
          i[r] = n[r];
        }var o,
            a = e.apply(this, i),
            s = this.__ob__;switch (t) {case "push":
            o = i;break;case "unshift":
            o = i;break;case "splice":
            o = i.slice(2);}return o && s.observeArray(o), s.dep.notify(), a;
      });
    });var Li = Object.getOwnPropertyNames(Ri),
        Pi = { shouldConvert: !0, isSettingProps: !1 },
        Fi = function Fi(t) {
      if (this.value = t, this.dep = new Ni(), this.vmCount = 0, _(t, "__ob__", this), Array.isArray(t)) {
        var e = yi ? $ : k;e(t, Ri, Li), this.observeArray(t);
      } else this.walk(t);
    };Fi.prototype.walk = function (t) {
      for (var e = Object.keys(t), n = 0; n < e.length; n++) {
        E(t, e[n], t[e[n]]);
      }
    }, Fi.prototype.observeArray = function (t) {
      for (var e = 0, n = t.length; e < n; e++) {
        A(t[e]);
      }
    };var qi = gi.optionMergeStrategies;qi.data = function (t, e, n) {
      return n ? t || e ? function () {
        var r = "function" == typeof e ? e.call(n) : e,
            i = "function" == typeof t ? t.call(n) : void 0;return r ? N(r, i) : i;
      } : void 0 : e ? "function" != typeof e ? t : t ? function () {
        return N(e.call(this), t.call(this));
      } : e : t;
    }, gi._lifecycleHooks.forEach(function (t) {
      qi[t] = D;
    }), gi._assetTypes.forEach(function (t) {
      qi[t + "s"] = I;
    }), qi.watch = function (t, e) {
      if (!e) return t;if (!t) return e;var n = {};f(n, t);for (var r in e) {
        var i = n[r],
            o = e[r];i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : [o];
      }return n;
    }, qi.props = qi.methods = qi.computed = function (t, e) {
      if (!e) return t;if (!t) return e;var n = Object.create(null);return f(n, t), f(n, e), n;
    };var Mi = function Mi(t, e) {
      return void 0 === e ? t : e;
    },
        Hi = Object.freeze({ defineReactive: E, _toString: n, toNumber: r, makeMap: i, isBuiltInTag: oi, remove: o, hasOwn: a, isPrimitive: s, cached: u, camelize: ui, capitalize: ci, hyphenate: fi, bind: c, toArray: l, extend: f, isObject: p, isPlainObject: d, toObject: h, noop: v, no: hi, identity: vi, genStaticKeys: g, looseEqual: m, looseIndexOf: y, isReserved: b, def: _, parsePath: w, hasProto: yi, inBrowser: bi, UA: _i, isIE: wi, isIE9: xi, isEdge: Ci, isAndroid: Ti, isIOS: $i, isServerRendering: ki, devtools: Ai, nextTick: Ei, get _Set() {
        return ii;
      }, mergeOptions: P, resolveAsset: F, get warn() {
        return Oi;
      }, get formatComponentName() {
        return Si;
      }, validateProp: q }),
        Bi = function Bi(t, e, n, r, i, o, a) {
      this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1;
    },
        Ui = { child: {} };Ui.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(Bi.prototype, Ui);var Wi,
        zi = function zi() {
      var t = new Bi();return t.text = "", t.isComment = !0, t;
    },
        Vi = { init: J, prepatch: G, insert: Z, destroy: Y },
        Xi = Object.keys(Vi),
        Ki = u(function (t) {
      var e = "~" === t.charAt(0);t = e ? t.slice(1) : t;var n = "!" === t.charAt(0);return t = n ? t.slice(1) : t, { name: t, once: e, capture: n };
    }),
        Ji = 1,
        Gi = 2,
        Zi = null,
        Yi = [],
        Qi = {},
        to = !1,
        eo = !1,
        no = 0,
        ro = 0,
        io = function io(t, e, n, r) {
      this.vm = t, t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++ro, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ii(), this.newDepIds = new ii(), this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = w(e), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
    };io.prototype.get = function () {
      C(this);var t = this.getter.call(this.vm, this.vm);return this.deep && Et(t), T(), this.cleanupDeps(), t;
    }, io.prototype.addDep = function (t) {
      var e = t.id;this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }, io.prototype.cleanupDeps = function () {
      for (var t = this, e = this.deps.length; e--;) {
        var n = t.deps[e];t.newDepIds.has(n.id) || n.removeSub(t);
      }var r = this.depIds;this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
    }, io.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : At(this);
    }, io.prototype.run = function () {
      if (this.active) {
        var t = this.get();if (t !== this.value || p(t) || this.deep) {
          var e = this.value;if (this.value = t, this.user) try {
            this.cb.call(this.vm, t, e);
          } catch (t) {
            if (!gi.errorHandler) throw t;gi.errorHandler.call(null, t, this.vm);
          } else this.cb.call(this.vm, t, e);
        }
      }
    }, io.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, io.prototype.depend = function () {
      for (var t = this, e = this.deps.length; e--;) {
        t.deps[e].depend();
      }
    }, io.prototype.teardown = function () {
      var t = this;if (this.active) {
        this.vm._isBeingDestroyed || o(this.vm._watchers, this);for (var e = this.deps.length; e--;) {
          t.deps[e].removeSub(t);
        }this.active = !1;
      }
    };var oo = new ii(),
        ao = { enumerable: !0, configurable: !0, get: v, set: v },
        so = 0;Mt(Ut), Ft(Ut), wt(Ut), Ct(Ut), vt(Ut);var uo = [String, RegExp],
        co = { name: "keep-alive", abstract: !0, props: { include: uo, exclude: uo }, created: function created() {
        this.cache = Object.create(null);
      }, destroyed: function destroyed() {
        var t = this;for (var e in this.cache) {
          Zt(t.cache[e]);
        }
      }, watch: { include: function include(t) {
          Gt(this.cache, function (e) {
            return Jt(t, e);
          });
        }, exclude: function exclude(t) {
          Gt(this.cache, function (e) {
            return !Jt(t, e);
          });
        } }, render: function render() {
        var t = lt(this.$slots.default),
            e = t && t.componentOptions;if (e) {
          var n = Kt(e);if (n && (this.include && !Jt(this.include, n) || this.exclude && Jt(this.exclude, n))) return t;var r = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;this.cache[r] ? t.componentInstance = this.cache[r].componentInstance : this.cache[r] = t, t.data.keepAlive = !0;
        }return t;
      } },
        lo = { KeepAlive: co };Yt(Ut), Object.defineProperty(Ut.prototype, "$isServer", { get: ki }), Ut.version = "2.1.10";var fo,
        po,
        ho = i("input,textarea,option,select"),
        vo = function vo(t, e, n) {
      return "value" === n && ho(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
    },
        go = i("contenteditable,draggable,spellcheck"),
        mo = i("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        yo = "http://www.w3.org/1999/xlink",
        bo = function bo(t) {
      return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
    },
        _o = function _o(t) {
      return bo(t) ? t.slice(6, t.length) : "";
    },
        wo = function wo(t) {
      return null == t || t === !1;
    },
        xo = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
        Co = i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
        To = i("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        $o = function $o(t) {
      return "pre" === t;
    },
        ko = function ko(t) {
      return Co(t) || To(t);
    },
        Ao = Object.create(null),
        Eo = Object.freeze({ createElement: se, createElementNS: ue, createTextNode: ce, createComment: le, insertBefore: fe, removeChild: pe, appendChild: de, parentNode: he, nextSibling: ve, tagName: ge, setTextContent: me, setAttribute: ye }),
        So = { create: function create(t, e) {
        be(e);
      }, update: function update(t, e) {
        t.data.ref !== e.data.ref && (be(t, !0), be(e));
      }, destroy: function destroy(t) {
        be(t, !0);
      } },
        Oo = new Bi("", {}, []),
        jo = ["create", "activate", "update", "remove", "destroy"],
        No = { create: $e, update: $e, destroy: function destroy(t) {
        $e(t, Oo);
      } },
        Do = Object.create(null),
        Io = [So, No],
        Ro = { create: Oe, update: Oe },
        Lo = { create: Ne,
      update: Ne },
        Po = { create: Re, update: Re },
        Fo = { create: Le, update: Le },
        qo = u(function (t) {
      var e = {},
          n = /;(?![^(]*\))/g,
          r = /:(.+)/;return t.split(n).forEach(function (t) {
        if (t) {
          var n = t.split(r);n.length > 1 && (e[n[0].trim()] = n[1].trim());
        }
      }), e;
    }),
        Mo = /^--/,
        Ho = /\s*!important$/,
        Bo = function Bo(t, e, n) {
      Mo.test(e) ? t.style.setProperty(e, n) : Ho.test(n) ? t.style.setProperty(e, n.replace(Ho, ""), "important") : t.style[Wo(e)] = n;
    },
        Uo = ["Webkit", "Moz", "ms"],
        Wo = u(function (t) {
      if (po = po || document.createElement("div"), t = ui(t), "filter" !== t && t in po.style) return t;for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Uo.length; n++) {
        var r = Uo[n] + e;if (r in po.style) return r;
      }
    }),
        zo = { create: Ue, update: Ue },
        Vo = bi && !xi,
        Xo = "transition",
        Ko = "animation",
        Jo = "transition",
        Go = "transitionend",
        Zo = "animation",
        Yo = "animationend";Vo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Jo = "WebkitTransition", Go = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Zo = "WebkitAnimation", Yo = "webkitAnimationEnd"));var Qo = bi && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
        ta = /\b(transform|all)(,|$)/,
        ea = u(function (t) {
      return { enterClass: t + "-enter", leaveClass: t + "-leave", appearClass: t + "-enter", enterToClass: t + "-enter-to", leaveToClass: t + "-leave-to", appearToClass: t + "-enter-to", enterActiveClass: t + "-enter-active", leaveActiveClass: t + "-leave-active", appearActiveClass: t + "-enter-active" };
    }),
        na = bi ? { create: rn, activate: rn, remove: function remove(t, e) {
        t.data.show ? e() : tn(t, e);
      } } : {},
        ra = [Ro, Lo, Po, Fo, zo, na],
        ia = ra.concat(Io),
        oa = Te({ nodeOps: Eo, modules: ia });xi && document.addEventListener("selectionchange", function () {
      var t = document.activeElement;t && t.vmodel && ln(t, "input");
    });var aa = { inserted: function inserted(t, e, n) {
        if ("select" === n.tag) {
          var r = function r() {
            on(t, e, n.context);
          };r(), (wi || Ci) && setTimeout(r, 0);
        } else "textarea" !== n.tag && "text" !== t.type || (t._vModifiers = e.modifiers, e.modifiers.lazy || (Ti || (t.addEventListener("compositionstart", un), t.addEventListener("compositionend", cn)), xi && (t.vmodel = !0)));
      }, componentUpdated: function componentUpdated(t, e, n) {
        if ("select" === n.tag) {
          on(t, e, n.context);var r = t.multiple ? e.value.some(function (e) {
            return an(e, t.options);
          }) : e.value !== e.oldValue && an(e.value, t.options);r && ln(t, "change");
        }
      } },
        sa = { bind: function bind(t, e, n) {
        var r = e.value;n = fn(n);var i = n.data && n.data.transition,
            o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;r && i && !xi ? (n.data.show = !0, Qe(n, function () {
          t.style.display = o;
        })) : t.style.display = r ? o : "none";
      }, update: function update(t, e, n) {
        var r = e.value,
            i = e.oldValue;if (r !== i) {
          n = fn(n);var o = n.data && n.data.transition;o && !xi ? (n.data.show = !0, r ? Qe(n, function () {
            t.style.display = t.__vOriginalDisplay;
          }) : tn(n, function () {
            t.style.display = "none";
          })) : t.style.display = r ? t.__vOriginalDisplay : "none";
        }
      }, unbind: function unbind(t, e, n, r, i) {
        i || (t.style.display = t.__vOriginalDisplay);
      } },
        ua = { model: aa, show: sa },
        ca = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String },
        la = { name: "transition", props: ca, abstract: !0, render: function render(t) {
        var e = this,
            n = this.$slots.default;if (n && (n = n.filter(function (t) {
          return t.tag;
        }), n.length)) {
          var r = this.mode,
              i = n[0];if (vn(this.$vnode)) return i;var o = pn(i);if (!o) return i;if (this._leaving) return hn(t, i);var a = "__transition-" + this._uid + "-",
              u = o.key = null == o.key ? a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key,
              c = (o.data || (o.data = {})).transition = dn(this),
              l = this._vnode,
              p = pn(l);if (o.data.directives && o.data.directives.some(function (t) {
            return "show" === t.name;
          }) && (o.data.show = !0), p && p.data && !gn(o, p)) {
            var d = p && (p.data.transition = f({}, c));if ("out-in" === r) return this._leaving = !0, it(d, "afterLeave", function () {
              e._leaving = !1, e.$forceUpdate();
            }, u), hn(t, i);if ("in-out" === r) {
              var h,
                  v = function v() {
                h();
              };it(c, "afterEnter", v, u), it(c, "enterCancelled", v, u), it(d, "delayLeave", function (t) {
                h = t;
              }, u);
            }
          }return i;
        }
      } },
        fa = f({ tag: String, moveClass: String }, ca);delete fa.mode;var pa = { props: fa, render: function render(t) {
        for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = dn(this), s = 0; s < i.length; s++) {
          var u = i[s];if (u.tag) if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) o.push(u), n[u.key] = u, (u.data || (u.data = {})).transition = a;else ;
        }if (r) {
          for (var c = [], l = [], f = 0; f < r.length; f++) {
            var p = r[f];p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? c.push(p) : l.push(p);
          }this.kept = t(e, null, c), this.removed = l;
        }return t(e, null, o);
      }, beforeUpdate: function beforeUpdate() {
        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
      }, updated: function updated() {
        var t = this.prevChildren,
            e = this.moveClass || (this.name || "v") + "-move";if (t.length && this.hasMove(t[0].elm, e)) {
          t.forEach(mn), t.forEach(yn), t.forEach(bn);document.body.offsetHeight;t.forEach(function (t) {
            if (t.data.moved) {
              var n = t.elm,
                  r = n.style;Xe(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Go, n._moveCb = function t(r) {
                r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Go, t), n._moveCb = null, Ke(n, e));
              });
            }
          });
        }
      }, methods: { hasMove: function hasMove(t, e) {
          if (!Vo) return !1;if (null != this._hasMove) return this._hasMove;Xe(t, e);var n = Ge(t);return Ke(t, e), this._hasMove = n.hasTransform;
        } } },
        da = { Transition: la, TransitionGroup: pa };Ut.config.isUnknownElement = oe, Ut.config.isReservedTag = ko, Ut.config.getTagNamespace = ie, Ut.config.mustUseProp = vo, f(Ut.options.directives, ua), f(Ut.options.components, da), Ut.prototype.__patch__ = bi ? oa : v, Ut.prototype.$mount = function (t, e) {
      return t = t && bi ? ae(t) : void 0, this._mount(t, e);
    }, setTimeout(function () {
      gi.devtools && Ai && Ai.emit("init", Ut);
    }, 0);var ha,
        va = !!bi && _n("\n", "&#10;"),
        ga = i("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr", !0),
        ma = i("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source", !0),
        ya = i("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track", !0),
        ba = /([^\s"'<>\/=]+)/,
        _a = /(?:=)/,
        wa = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
        xa = new RegExp("^\\s*" + ba.source + "(?:\\s*(" + _a.source + ")\\s*(?:" + wa.join("|") + "))?"),
        Ca = "[a-zA-Z_][\\w\\-\\.]*",
        Ta = "((?:" + Ca + "\\:)?" + Ca + ")",
        $a = new RegExp("^<" + Ta),
        ka = /^\s*(\/?)>/,
        Aa = new RegExp("^<\\/" + Ta + "[^>]*>"),
        Ea = /^<!DOCTYPE [^>]+>/i,
        Sa = /^<!--/,
        Oa = /^<!\[/,
        ja = !1;"x".replace(/x(.)?/g, function (t, e) {
      ja = "" === e;
    });var Na,
        Da,
        Ia,
        Ra,
        La,
        Pa,
        Fa,
        qa,
        Ma,
        Ha,
        Ba,
        Ua,
        Wa,
        za,
        Va,
        Xa,
        Ka,
        Ja,
        Ga,
        Za,
        Ya,
        Qa,
        ts,
        es,
        ns,
        rs = i("script,style", !0),
        is = {},
        os = /&lt;/g,
        as = /&gt;/g,
        ss = /&#10;/g,
        us = /&amp;/g,
        cs = /&quot;/g,
        ls = /\{\{((?:.|\n)+?)\}\}/g,
        fs = /[-.*+?^${}()|[\]\/\\]/g,
        ps = u(function (t) {
      var e = t[0].replace(fs, "\\$&"),
          n = t[1].replace(fs, "\\$&");return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
    }),
        ds = /^v-|^@|^:/,
        hs = /(.*?)\s+(?:in|of)\s+(.*)/,
        vs = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
        gs = /^:|^v-bind:/,
        ms = /^@|^v-on:/,
        ys = /:(.*)$/,
        bs = /\.[^.]+/g,
        _s = u(wn),
        ws = /^xmlns:NS\d+/,
        xs = /^NS\d+:/,
        Cs = u(sr),
        Ts = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
        $s = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
        ks = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
        As = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: "if($event.target !== $event.currentTarget)return;", ctrl: "if(!$event.ctrlKey)return;", shift: "if(!$event.shiftKey)return;", alt: "if(!$event.altKey)return;", meta: "if(!$event.metaKey)return;" },
        Es = { bind: mr, cloak: v },
        Ss = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), { staticKeys: ["staticClass"], transformNode: Hr, genData: Br }),
        Os = { staticKeys: ["staticStyle"], transformNode: Ur, genData: Wr },
        js = [Ss, Os],
        Ns = { model: zr, text: Zr, html: Yr },
        Ds = Object.create(null),
        Is = { expectHTML: !0, modules: js, staticKeys: g(js), directives: Ns, isReservedTag: ko, isUnaryTag: ga, mustUseProp: vo, getTagNamespace: ie, isPreTag: $o },
        Rs = u(function (t) {
      var e = ae(t);return e && e.innerHTML;
    }),
        Ls = Ut.prototype.$mount;Ut.prototype.$mount = function (t, e) {
      if (t = t && ae(t), t === document.body || t === document.documentElement) return this;var n = this.$options;if (!n.render) {
        var r = n.template;if (r) {
          if ("string" == typeof r) "#" === r.charAt(0) && (r = Rs(r));else {
            if (!r.nodeType) return this;r = r.innerHTML;
          }
        } else t && (r = ni(t));if (r) {
          var i = ti(r, { warn: Oi, shouldDecodeNewlines: va, delimiters: n.delimiters }, this),
              o = i.render,
              a = i.staticRenderFns;n.render = o, n.staticRenderFns = a;
        }
      }return Ls.call(this, t, e);
    }, Ut.compile = ti, t.exports = Ut;
  }).call(e, n(8));
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
        return t.l;
      } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
        return t.i;
      } }), t.webpackPolyfill = 1), t;
  };
}, function (t, e, n) {
  n(9), t.exports = n(10);
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(7);


/***/ })
/******/ ]);