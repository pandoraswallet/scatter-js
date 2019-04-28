var eosjs_jsonrpc =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId]) {
			/******/ 			return installedModules[moduleId].exports;
			/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
			/******/ 			i: moduleId,
			/******/ 			l: false,
			/******/ 			exports: {}
			/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.l = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
		/******/ 		if(!__webpack_require__.o(exports, name)) {
			/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
			/******/ 		}
		/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
		/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			/******/ 		}
		/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
		/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
		/******/ 		if(mode & 1) value = __webpack_require__(value);
		/******/ 		if(mode & 8) return value;
		/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		/******/ 		var ns = Object.create(null);
		/******/ 		__webpack_require__.r(ns);
		/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		/******/ 		return ns;
		/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
		/******/ 		var getter = module && module.__esModule ?
			/******/ 			function getDefault() { return module['default']; } :
			/******/ 			function getModuleExports() { return module; };
		/******/ 		__webpack_require__.d(getter, 'a', getter);
		/******/ 		return getter;
		/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eosjs-jsonrpc.ts");
	/******/ })
/************************************************************************/
/******/ ({

	/***/ "./node_modules/webpack/buildin/global.js":
	/*!***********************************!*\
	  !*** (webpack)/buildin/global.js ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

		var g;

// This works in non-strict mode
		g = (function() {
			return this;
		})();

		try {
			// This works if eval is allowed (see CSP)
			g = g || Function("return this")() || (1, eval)("this");
		} catch (e) {
			// This works if the window reference is available
			if (typeof window === "object") g = window;
		}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

		module.exports = g;


		/***/ }),

	/***/ "./src/eosjs-jsonrpc.ts":
	/*!******************************!*\
	  !*** ./src/eosjs-jsonrpc.ts ***!
	  \******************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		/* WEBPACK VAR INJECTION */(function(global) {
			/**
			 * @module JSON-RPC
			 */
			var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
				return new (P || (P = Promise))(function (resolve, reject) {
					function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
					function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
					function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
					step((generator = generator.apply(thisArg, _arguments || [])).next());
				});
			};
			var __generator = (this && this.__generator) || function (thisArg, body) {
				var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
				return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
				function verb(n) { return function (v) { return step([n, v]); }; }
				function step(op) {
					if (f) throw new TypeError("Generator is already executing.");
					while (_) try {
						if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
						if (y = 0, t) op = [op[0] & 2, t.value];
						switch (op[0]) {
							case 0: case 1: t = op; break;
							case 4: _.label++; return { value: op[1], done: false };
							case 5: _.label++; y = op[1]; op = [0]; continue;
							case 7: op = _.ops.pop(); _.trys.pop(); continue;
							default:
								if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
								if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
								if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
								if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
								if (t[2]) _.ops.pop();
								_.trys.pop(); continue;
						}
						op = body.call(thisArg, _);
					} catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
					if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
				}
			};
			var __values = (this && this.__values) || function (o) {
				var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
				if (m) return m.call(o);
				return {
					next: function () {
						if (o && i >= o.length) o = void 0;
						return { value: o && o[i++], done: !o };
					}
				};
			};
			Object.defineProperty(exports, "__esModule", { value: true });
			var eosjs_numeric_1 = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
			var eosjs_rpcerror_1 = __webpack_require__(/*! ./eosjs-rpcerror */ "./src/eosjs-rpcerror.ts");
			function arrayToHex(data) {
				var e_1, _a;
				var result = "";
				try {
					for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
						var x = data_1_1.value;
						result += ("00" + x.toString(16)).slice(-2);
					}
				}
				catch (e_1_1) { e_1 = { error: e_1_1 }; }
				finally {
					try {
						if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
					}
					finally { if (e_1) throw e_1.error; }
				}
				return result;
			}
			/** Make RPC calls */
			var JsonRpc = /** @class */ (function () {
				/**
				 * @param args
				 *    * `fetch`:
				 *      * browsers: leave `null` or `undefined`
				 *      * node: provide an implementation
				 */
				function JsonRpc(endpoint, args) {
					if (args === void 0) { args = {}; }
					this.endpoint = endpoint;
					if (args.fetch) {
						this.fetchBuiltin = args.fetch;
					}
					else {
						this.fetchBuiltin = global.fetch;
					}
				}
				/** Post `body` to `endpoint + path`. Throws detailed error information in `RpcError` when available. */
				JsonRpc.prototype.fetch = function (path, body) {
					return __awaiter(this, void 0, void 0, function () {
						var response, json, f, e_2;
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0:
									_a.trys.push([0, 3, , 4]);
									f = this.fetchBuiltin;
									return [4 /*yield*/, f(this.endpoint + path, {
										body: JSON.stringify(body),
										method: "POST",
									})];
								case 1:
									response = _a.sent();
									return [4 /*yield*/, response.json()];
								case 2:
									json = _a.sent();
									if (json.processed && json.processed.except) {
										throw new eosjs_rpcerror_1.RpcError(json);
									}
									return [3 /*break*/, 4];
								case 3:
									e_2 = _a.sent();
									e_2.isFetchError = true;
									throw e_2;
								case 4:
									if (!response.ok) {
										throw new eosjs_rpcerror_1.RpcError(json);
									}
									return [2 /*return*/, json];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_abi` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.get_abi = function (account_name) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_abi", { account_name: account_name })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_account` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.get_account = function (account_name) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_account", { account_name: account_name })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_block_header_state` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.get_block_header_state = function (block_num_or_id) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block_header_state", { block_num_or_id: block_num_or_id })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_block` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.get_block = function (block_num_or_id) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block", { block_num_or_id: block_num_or_id })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_code` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.get_code = function (account_name) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_code", { account_name: account_name })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_currency_balance` */
				JsonRpc.prototype.get_currency_balance = function (code, account, symbol) {
					if (symbol === void 0) { symbol = null; }
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_balance", { code: code, account: account, symbol: symbol })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_currency_stats` */
				JsonRpc.prototype.get_currency_stats = function (code, symbol) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_stats", { code: code, symbol: symbol })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_info` */
				JsonRpc.prototype.get_info = function () {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_info", {})];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_producer_schedule` */
				JsonRpc.prototype.get_producer_schedule = function () {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producer_schedule", {})];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_producers` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.get_producers = function (json, lower_bound, limit) {
					if (json === void 0) { json = true; }
					if (lower_bound === void 0) { lower_bound = ""; }
					if (limit === void 0) { limit = 50; }
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producers", { json: json, lower_bound: lower_bound, limit: limit })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_raw_code_and_abi` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.get_raw_code_and_abi = function (account_name) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_raw_code_and_abi", { account_name: account_name })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/chain/get_table_rows` */
				JsonRpc.prototype.get_table_rows = function (_a) {
					var _b = _a.json, json = _b === void 0 ? true : _b, code = _a.code, scope = _a.scope, table = _a.table, _c = _a.table_key, table_key = _c === void 0 ? "" : _c, _d = _a.lower_bound, lower_bound = _d === void 0 ? "" : _d, _e = _a.upper_bound, upper_bound = _e === void 0 ? "" : _e, _f = _a.limit, limit = _f === void 0 ? 10 : _f;
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_g) {
							switch (_g.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_table_rows", {
									json: json,
									code: code,
									scope: scope,
									table: table,
									table_key: table_key,
									lower_bound: lower_bound,
									upper_bound: upper_bound,
									limit: limit,
								})];
								case 1: return [2 /*return*/, _g.sent()];
							}
						});
					});
				};
				/** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
				JsonRpc.prototype.getRequiredKeys = function (args) {
					return __awaiter(this, void 0, void 0, function () {
						var _a;
						return __generator(this, function (_b) {
							switch (_b.label) {
								case 0:
									_a = eosjs_numeric_1.convertLegacyPublicKeys;
									return [4 /*yield*/, this.fetch("/v1/chain/get_required_keys", {
										transaction: args.transaction,
										available_keys: args.availableKeys,
									})];
								case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).required_keys])];
							}
						});
					});
				};
				/** Push a serialized transaction */
				JsonRpc.prototype.push_transaction = function (_a) {
					var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction;
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_b) {
							switch (_b.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/chain/push_transaction", {
									signatures: signatures,
									compression: 0,
									packed_context_free_data: "",
									packed_trx: arrayToHex(serializedTransaction),
								})];
								case 1: return [2 /*return*/, _b.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/db_size/get` */
				JsonRpc.prototype.db_size_get = function () {
					return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
						switch (_a.label) {
							case 0: return [4 /*yield*/, this.fetch("/v1/db_size/get", {})];
							case 1: return [2 /*return*/, _a.sent()];
						}
					}); });
				};
				/** Raw call to `/v1/history/get_actions` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.history_get_actions = function (account_name, pos, offset) {
					if (pos === void 0) { pos = null; }
					if (offset === void 0) { offset = null; }
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/history/get_actions", { account_name: account_name, pos: pos, offset: offset })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/history/get_transaction` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.history_get_transaction = function (id, block_num_hint) {
					if (block_num_hint === void 0) { block_num_hint = null; }
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/history/get_transaction", { id: id, block_num_hint: block_num_hint })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/history/get_key_accounts` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.history_get_key_accounts = function (public_key) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/history/get_key_accounts", { public_key: public_key })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				/** Raw call to `/v1/history/get_controlled_accounts` */
				// tslint:disable-next-line:variable-name
				JsonRpc.prototype.history_get_controlled_accounts = function (controlling_account) {
					return __awaiter(this, void 0, void 0, function () {
						return __generator(this, function (_a) {
							switch (_a.label) {
								case 0: return [4 /*yield*/, this.fetch("/v1/history/get_controlled_accounts", { controlling_account: controlling_account })];
								case 1: return [2 /*return*/, _a.sent()];
							}
						});
					});
				};
				return JsonRpc;
			}()); // JsonRpc
			exports.JsonRpc = JsonRpc;

			/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

		/***/ }),

	/***/ "./src/eosjs-numeric.ts":
	/*!******************************!*\
	  !*** ./src/eosjs-numeric.ts ***!
	  \******************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		/**
		 * @module Numeric
		 */
// copyright defined in eosjs/LICENSE.txt

		var __read = (this && this.__read) || function (o, n) {
			var m = typeof Symbol === "function" && o[Symbol.iterator];
			if (!m) return o;
			var i = m.call(o), r, ar = [], e;
			try {
				while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
			}
			catch (error) { e = { error: error }; }
			finally {
				try {
					if (r && !r.done && (m = i["return"])) m.call(i);
				}
				finally { if (e) throw e.error; }
			}
			return ar;
		};
		var __spread = (this && this.__spread) || function () {
			for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
			return ar;
		};
		var __values = (this && this.__values) || function (o) {
			var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
			if (m) return m.call(o);
			return {
				next: function () {
					if (o && i >= o.length) o = void 0;
					return { value: o && o[i++], done: !o };
				}
			};
		};
		Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
		var ripemd160 = __webpack_require__(/*! ./ripemd */ "./src/ripemd.js").RIPEMD160.hash;
		var base58Chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
		var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		function create_base58_map() {
			var base58M = Array(256).fill(-1);
			for (var i = 0; i < base58Chars.length; ++i) {
				base58M[base58Chars.charCodeAt(i)] = i;
			}
			return base58M;
		}
		var base58Map = create_base58_map();
		function create_base64_map() {
			var base64M = Array(256).fill(-1);
			for (var i = 0; i < base64Chars.length; ++i) {
				base64M[base64Chars.charCodeAt(i)] = i;
			}
			base64M["=".charCodeAt(0)] = 0;
			return base64M;
		}
		var base64Map = create_base64_map();
		/** Is `bignum` a negative number? */
		function isNegative(bignum) {
			return (bignum[bignum.length - 1] & 0x80) !== 0;
		}
		exports.isNegative = isNegative;
		/** Negate `bignum` */
		function negate(bignum) {
			var carry = 1;
			for (var i = 0; i < bignum.length; ++i) {
				var x = (~bignum[i] & 0xff) + carry;
				bignum[i] = x;
				carry = x >> 8;
			}
		}
		exports.negate = negate;
		/**
		 * Convert an unsigned decimal number in `s` to a bignum
		 * @param size bignum size (bytes)
		 */
		function decimalToBinary(size, s) {
			var result = new Uint8Array(size);
			for (var i = 0; i < s.length; ++i) {
				var srcDigit = s.charCodeAt(i);
				if (srcDigit < "0".charCodeAt(0) || srcDigit > "9".charCodeAt(0)) {
					throw new Error("invalid number");
				}
				var carry = srcDigit - "0".charCodeAt(0);
				for (var j = 0; j < size; ++j) {
					var x = result[j] * 10 + carry;
					result[j] = x;
					carry = x >> 8;
				}
				if (carry) {
					throw new Error("number is out of range");
				}
			}
			return result;
		}
		exports.decimalToBinary = decimalToBinary;
		/**
		 * Convert a signed decimal number in `s` to a bignum
		 * @param size bignum size (bytes)
		 */
		function signedDecimalToBinary(size, s) {
			var negative = s[0] === "-";
			if (negative) {
				s = s.substr(1);
			}
			var result = decimalToBinary(size, s);
			if (negative) {
				negate(result);
				if (!isNegative(result)) {
					throw new Error("number is out of range");
				}
			}
			else if (isNegative(result)) {
				throw new Error("number is out of range");
			}
			return result;
		}
		exports.signedDecimalToBinary = signedDecimalToBinary;
		/**
		 * Convert `bignum` to an unsigned decimal number
		 * @param minDigits 0-pad result to this many digits
		 */
		function binaryToDecimal(bignum, minDigits) {
			if (minDigits === void 0) { minDigits = 1; }
			var result = Array(minDigits).fill("0".charCodeAt(0));
			for (var i = bignum.length - 1; i >= 0; --i) {
				var carry = bignum[i];
				for (var j = 0; j < result.length; ++j) {
					var x = ((result[j] - "0".charCodeAt(0)) << 8) + carry;
					result[j] = "0".charCodeAt(0) + x % 10;
					carry = (x / 10) | 0;
				}
				while (carry) {
					result.push("0".charCodeAt(0) + carry % 10);
					carry = (carry / 10) | 0;
				}
			}
			result.reverse();
			return String.fromCharCode.apply(String, __spread(result));
		}
		exports.binaryToDecimal = binaryToDecimal;
		/**
		 * Convert `bignum` to a signed decimal number
		 * @param minDigits 0-pad result to this many digits
		 */
		function signedBinaryToDecimal(bignum, minDigits) {
			if (minDigits === void 0) { minDigits = 1; }
			if (isNegative(bignum)) {
				var x = bignum.slice();
				negate(x);
				return "-" + binaryToDecimal(x, minDigits);
			}
			return binaryToDecimal(bignum, minDigits);
		}
		exports.signedBinaryToDecimal = signedBinaryToDecimal;
		/**
		 * Convert an unsigned base-58 number in `s` to a bignum
		 * @param size bignum size (bytes)
		 */
		function base58ToBinary(size, s) {
			var result = new Uint8Array(size);
			for (var i = 0; i < s.length; ++i) {
				var carry = base58Map[s.charCodeAt(i)];
				if (carry < 0) {
					throw new Error("invalid base-58 value");
				}
				for (var j = 0; j < size; ++j) {
					var x = result[j] * 58 + carry;
					result[j] = x;
					carry = x >> 8;
				}
				if (carry) {
					throw new Error("base-58 value is out of range");
				}
			}
			result.reverse();
			return result;
		}
		exports.base58ToBinary = base58ToBinary;
		/**
		 * Convert `bignum` to a base-58 number
		 * @param minDigits 0-pad result to this many digits
		 */
		function binaryToBase58(bignum, minDigits) {
			if (minDigits === void 0) { minDigits = 1; }
			var e_1, _a, e_2, _b;
			var result = [];
			try {
				for (var bignum_1 = __values(bignum), bignum_1_1 = bignum_1.next(); !bignum_1_1.done; bignum_1_1 = bignum_1.next()) {
					var byte = bignum_1_1.value;
					var carry = byte;
					for (var j = 0; j < result.length; ++j) {
						var x = (base58Map[result[j]] << 8) + carry;
						result[j] = base58Chars.charCodeAt(x % 58);
						carry = (x / 58) | 0;
					}
					while (carry) {
						result.push(base58Chars.charCodeAt(carry % 58));
						carry = (carry / 58) | 0;
					}
				}
			}
			catch (e_1_1) { e_1 = { error: e_1_1 }; }
			finally {
				try {
					if (bignum_1_1 && !bignum_1_1.done && (_a = bignum_1.return)) _a.call(bignum_1);
				}
				finally { if (e_1) throw e_1.error; }
			}
			try {
				for (var bignum_2 = __values(bignum), bignum_2_1 = bignum_2.next(); !bignum_2_1.done; bignum_2_1 = bignum_2.next()) {
					var byte = bignum_2_1.value;
					if (byte) {
						break;
					}
					else {
						result.push("1".charCodeAt(0));
					}
				}
			}
			catch (e_2_1) { e_2 = { error: e_2_1 }; }
			finally {
				try {
					if (bignum_2_1 && !bignum_2_1.done && (_b = bignum_2.return)) _b.call(bignum_2);
				}
				finally { if (e_2) throw e_2.error; }
			}
			result.reverse();
			return String.fromCharCode.apply(String, __spread(result));
		}
		exports.binaryToBase58 = binaryToBase58;
		/** Convert an unsigned base-64 number in `s` to a bignum */
		function base64ToBinary(s) {
			var len = s.length;
			if ((len & 3) === 1 && s[len - 1] === "=") {
				len -= 1;
			} // fc appends an extra '='
			if ((len & 3) !== 0) {
				throw new Error("base-64 value is not padded correctly");
			}
			var groups = len >> 2;
			var bytes = groups * 3;
			if (len > 0 && s[len - 1] === "=") {
				if (s[len - 2] === "=") {
					bytes -= 2;
				}
				else {
					bytes -= 1;
				}
			}
			var result = new Uint8Array(bytes);
			for (var group = 0; group < groups; ++group) {
				var digit0 = base64Map[s.charCodeAt(group * 4 + 0)];
				var digit1 = base64Map[s.charCodeAt(group * 4 + 1)];
				var digit2 = base64Map[s.charCodeAt(group * 4 + 2)];
				var digit3 = base64Map[s.charCodeAt(group * 4 + 3)];
				result[group * 3 + 0] = (digit0 << 2) | (digit1 >> 4);
				if (group * 3 + 1 < bytes) {
					result[group * 3 + 1] = ((digit1 & 15) << 4) | (digit2 >> 2);
				}
				if (group * 3 + 2 < bytes) {
					result[group * 3 + 2] = ((digit2 & 3) << 6) | digit3;
				}
			}
			return result;
		}
		exports.base64ToBinary = base64ToBinary;
		/** Public key data size, excluding type field */
		exports.publicKeyDataSize = 33;
		/** Private key data size, excluding type field */
		exports.privateKeyDataSize = 32;
		/** Signature data size, excluding type field */
		exports.signatureDataSize = 65;
		function digestSuffixRipemd160(data, suffix) {
			var d = new Uint8Array(data.length + suffix.length);
			for (var i = 0; i < data.length; ++i) {
				d[i] = data[i];
			}
			for (var i = 0; i < suffix.length; ++i) {
				d[data.length + i] = suffix.charCodeAt(i);
			}
			return ripemd160(d);
		}
		function stringToKey(s, type, size, suffix) {
			var whole = base58ToBinary(size + 4, s);
			var result = { type: type, data: new Uint8Array(whole.buffer, 0, size) };
			var digest = new Uint8Array(digestSuffixRipemd160(result.data, suffix));
			if (digest[0] !== whole[size + 0] || digest[1] !== whole[size + 1]
				|| digest[2] !== whole[size + 2] || digest[3] !== whole[size + 3]) {
				throw new Error("checksum doesn't match");
			}
			return result;
		}
		function keyToString(key, suffix, prefix) {
			var digest = new Uint8Array(digestSuffixRipemd160(key.data, suffix));
			var whole = new Uint8Array(key.data.length + 4);
			for (var i = 0; i < key.data.length; ++i) {
				whole[i] = key.data[i];
			}
			for (var i = 0; i < 4; ++i) {
				whole[i + key.data.length] = digest[i];
			}
			return prefix + binaryToBase58(whole);
		}
		/** Convert key in `s` to binary form */
		function stringToPublicKey(s) {
			if (typeof s !== "string") {
				throw new Error("expected string containing public key");
			}
			if (s.substr(0, 3) === "EOS") {
				var whole = base58ToBinary(exports.publicKeyDataSize + 4, s.substr(3));
				var key = { type: 0 /* k1 */, data: new Uint8Array(exports.publicKeyDataSize) };
				for (var i = 0; i < exports.publicKeyDataSize; ++i) {
					key.data[i] = whole[i];
				}
				var digest = new Uint8Array(ripemd160(key.data));
				if (digest[0] !== whole[exports.publicKeyDataSize] || digest[1] !== whole[34]
					|| digest[2] !== whole[35] || digest[3] !== whole[36]) {
					throw new Error("checksum doesn't match");
				}
				return key;
			}
			else if (s.substr(0, 7) === "PUB_K1_") {
				return stringToKey(s.substr(7), 0 /* k1 */, exports.publicKeyDataSize, "K1");
			}
			else if (s.substr(0, 7) === "PUB_R1_") {
				return stringToKey(s.substr(7), 1 /* r1 */, exports.publicKeyDataSize, "R1");
			}
			else {
				throw new Error("unrecognized public key format");
			}
		}
		exports.stringToPublicKey = stringToPublicKey;
		/** Convert `key` to string (base-58) form */
		function publicKeyToString(key) {
			if (key.type === 0 /* k1 */ && key.data.length === exports.publicKeyDataSize) {
				return keyToString(key, "K1", "PUB_K1_");
			}
			else if (key.type === 1 /* r1 */ && key.data.length === exports.publicKeyDataSize) {
				return keyToString(key, "R1", "PUB_R1_");
			}
			else {
				throw new Error("unrecognized public key format");
			}
		}
		exports.publicKeyToString = publicKeyToString;
		/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
		 * Leaves other formats untouched
		 */
		function convertLegacyPublicKey(s) {
			if (s.substr(0, 3) === "EOS") {
				return publicKeyToString(stringToPublicKey(s));
			}
			return s;
		}
		exports.convertLegacyPublicKey = convertLegacyPublicKey;
		/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
		 * Leaves other formats untouched
		 */
		function convertLegacyPublicKeys(keys) {
			return keys.map(convertLegacyPublicKey);
		}
		exports.convertLegacyPublicKeys = convertLegacyPublicKeys;
		/** Convert key in `s` to binary form */
		function stringToPrivateKey(s) {
			if (typeof s !== "string") {
				throw new Error("expected string containing private key");
			}
			if (s.substr(0, 7) === "PVT_R1_") {
				return stringToKey(s.substr(7), 1 /* r1 */, exports.privateKeyDataSize, "R1");
			}
			else {
				throw new Error("unrecognized private key format");
			}
		}
		exports.stringToPrivateKey = stringToPrivateKey;
		/** Convert `key` to string (base-58) form */
		function privateKeyToString(key) {
			if (key.type === 1 /* r1 */) {
				return keyToString(key, "R1", "PVT_R1_");
			}
			else {
				throw new Error("unrecognized private key format");
			}
		}
		exports.privateKeyToString = privateKeyToString;
		/** Convert key in `s` to binary form */
		function stringToSignature(s) {
			if (typeof s !== "string") {
				throw new Error("expected string containing signature");
			}
			if (s.substr(0, 7) === "SIG_K1_") {
				return stringToKey(s.substr(7), 0 /* k1 */, exports.signatureDataSize, "K1");
			}
			else if (s.substr(0, 7) === "SIG_R1_") {
				return stringToKey(s.substr(7), 1 /* r1 */, exports.signatureDataSize, "R1");
			}
			else {
				throw new Error("unrecognized signature format");
			}
		}
		exports.stringToSignature = stringToSignature;
		/** Convert `signature` to string (base-58) form */
		function signatureToString(signature) {
			if (signature.type === 0 /* k1 */) {
				return keyToString(signature, "K1", "SIG_K1_");
			}
			else if (signature.type === 1 /* r1 */) {
				return keyToString(signature, "R1", "SIG_R1_");
			}
			else {
				throw new Error("unrecognized signature format");
			}
		}
		exports.signatureToString = signatureToString;


		/***/ }),

	/***/ "./src/eosjs-rpcerror.ts":
	/*!*******************************!*\
	  !*** ./src/eosjs-rpcerror.ts ***!
	  \*******************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";

		/**
		 * @module RPC-Error
		 */
		var __extends = (this && this.__extends) || (function () {
			var extendStatics = Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
				function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
			return function (d, b) {
				extendStatics(d, b);
				function __() { this.constructor = d; }
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		/** Holds detailed error information */
		var RpcError = /** @class */ (function (_super) {
			__extends(RpcError, _super);
			function RpcError(json) {
				var _this = this;
				if (json.error && json.error.details && json.error.details.length && json.error.details[0].message) {
					_this = _super.call(this, json.error.details[0].message) || this;
				}
				else if (json.processed && json.processed.except && json.processed.except.message) {
					_this = _super.call(this, json.processed.except.message) || this;
				}
				else {
					_this = _super.call(this, json.message) || this;
				}
				Object.setPrototypeOf(_this, RpcError.prototype);
				_this.json = json;
				return _this;
			}
			return RpcError;
		}(Error));
		exports.RpcError = RpcError;


		/***/ }),

	/***/ "./src/ripemd.js":
	/*!***********************!*\
	  !*** ./src/ripemd.js ***!
	  \***********************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
// https://gist.githubusercontent.com/wlzla000/bac83df6d3c51916c4dd0bc947e46947/raw/7ee3462b095ab22580ddaf191f44a590da6fe33b/RIPEMD-160.js

		/*
			RIPEMD-160.js

				developed
					by K. (https://github.com/wlzla000)
					on December 27-29, 2017,

				licensed under


				the MIT license

				Copyright (c) 2017 K.

				 Permission is hereby granted, free of charge, to any person
				obtaining a copy of this software and associated documentation
				files (the "Software"), to deal in the Software without
				restriction, including without limitation the rights to use,
				copy, modify, merge, publish, distribute, sublicense, and/or
				sell copies of the Software, and to permit persons to whom the
				Software is furnished to do so, subject to the following
				conditions:

				 The above copyright notice and this permission notice shall be
				included in all copies or substantial portions of the Software.

				 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
				EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
				OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
				NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
				HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
				WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
				FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
				OTHER DEALINGS IN THE SOFTWARE.
		*/



		class RIPEMD160
		{
			constructor()
			{
				// https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf
				// http://shodhganga.inflibnet.ac.in/bitstream/10603/22978/13/13_appendix.pdf
			}

			static get_n_pad_bytes(message_size /* in bytes, 1 byte is 8 bits. */)
			{
				//  Obtain the number of bytes needed to pad the message.
				// It does not contain the size of the message size information.
				/*
					https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf

					The Cryptographic Hash Function RIPEMD-160

					written by
						Bart Preneel,
						Hans Dobbertin,
						Antoon Bosselaers
					in
						1997.

					--------------------------------------------------

					§5     Description of RIPEMD-160

					......

					 In order to guarantee that the total input size is a
					multiple of 512 bits, the input is padded in the same
					way as for all the members of the MD4-family: one
					appends a single 1 followed by a string of 0s (the
					number of 0s lies between 0 and 511); the last 64 bits
					of the extended input contain the binary representation
					of the input size in bits, least significant byte first.
				*/
				/*
					https://tools.ietf.org/rfc/rfc1186.txt

					RFC 1186: MD4 Message Digest Algorithm.

					written by
						Ronald Linn Rivest
					in
						October 1990.

					--------------------------------------------------

					§3     MD4 Algorithm Description

					......

					Step 1. Append padding bits

					 The message is "padded" (extended) so that its length
					(in bits) is congruent to 448, modulo 512. That is, the
					message is extended so that it is just 64 bits shy of
					being a multiple of 512 bits long. Padding is always
					performed, even if the length of the message is already
					congruent to 448, modulo 512 (in which case 512 bits of
					padding are added).

					 Padding is performed as follows: a single "1" bit is
					appended to the message, and then enough zero bits are
					appended so that the length in bits of the padded
					message becomes congruent to 448, modulo 512.

					Step 2. Append length

					 A 64-bit representation of b (the length of the message
					before the padding bits were added) is appended to the
					result of the previous step. In the unlikely event that
					b is greater than 2^64, then only the low-order 64 bits
					of b are used. (These bits are appended as two 32-bit
					words and appended low-order word first in accordance
					with the previous conventions.)

					 At this point the resulting message (after padding with
					bits and with b) has a length that is an exact multiple
					of 512 bits. Equivalently, this message has a length
					that is an exact multiple of 16 (32-bit) words. Let
					M[0 ... N-1] denote the words of the resulting message,
					where N is a multiple of 16.
				*/
				// https://crypto.stackexchange.com/a/32407/54568
				/*
					Example case  # 1
						[0 bit: message.]
						[1 bit: 1.]
						[447 bits: 0.]
						[64 bits: message size information.]

					Example case  # 2
						[512-bits: message]
						[1 bit: 1.]
						[447 bits: 0.]
						[64 bits: message size information.]

					Example case  # 3
						[(512 - 64 = 448) bits: message.]
						[1 bit: 1.]
						[511 bits: 0.]
						[64 bits: message size information.]

					Example case  # 4
						[(512 - 65 = 447) bits: message.]
						[1 bit: 1.]
						[0 bit: 0.]
						[64 bits: message size information.]
				*/
				// The number of padding zero bits:
				//      511 - [{(message size in bits) + 64} (mod 512)]
				return 64 - ((message_size + 8) & 0b00111111 /* 63 */);
			}
			static pad(message /* An ArrayBuffer. */)
			{
				const message_size = message.byteLength;
				const n_pad = RIPEMD160.get_n_pad_bytes(message_size);

				//  `Number.MAX_SAFE_INTEGER` is ((2 ** 53) - 1) and
				// bitwise operation in Javascript is done on 32-bits operands.
				const divmod = (dividend, divisor) => [
					Math.floor(dividend / divisor),
					dividend % divisor
				];
				/*
		To shift

		   00000000 000????? ???????? ???????? ???????? ???????? ???????? ????????
											 t o
		   00000000 ???????? ???????? ???????? ???????? ???????? ???????? ?????000

		--------------------------------------------------------------------------------

		Method #1

			00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
		   [00000000 000AAAAA AAAAAAAA AAAAAAAA] (<A> captured)
		   [00000000 AAAAAAAA AAAAAAAA AAAAA000] (<A> shifted)
								 (<B> captured) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
							 (<B> shifted) [BBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
		   [00000000 AAAAAAAA AAAAAAAA AAAAABBB] (<A> & <B_2> merged)
		   [00000000 AAAAAAAA AAAAAAAA AAAAABBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
			00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

				const uint32_max_plus_1 = 0x100000000; // (2 ** 32)
				const [
					msg_byte_size_most, // Value range [0, (2 ** 21) - 1].
					msg_byte_size_least // Value range [0, (2 ** 32) - 1].
				] = divmod(message_size, uint32_max_plus_1);
				const [
					carry, // Value range [0, 7].
					msg_bit_size_least // Value range [0, (2 ** 32) - 8].
				] = divmod(message_byte_size_least * 8, uint32_max_plus_1);
				const message_bit_size_most = message_byte_size_most * 8
					+ carry; // Value range [0, (2 ** 24) - 1].

		--------------------------------------------------------------------------------

		Method #2
			00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
			  [00000 000AAAAA AAAAAAAA AAAAAAAA  AAA] (<A> captured)
								 (<B> captured) [000BBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
								  (<B> shifted) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
		   [00000000 AAAAAAAA AAAAAAAA AAAAAAAA][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
			00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

				*/
				const [
					msg_bit_size_most,
					msg_bit_size_least
				] = divmod(message_size, 536870912 /* (2 ** 29) */)
					.map((x, index) => (index ? (x * 8) : x));

				// `ArrayBuffer.transfer()` is not supported.
				const padded = new Uint8Array(message_size + n_pad + 8);
				padded.set(new Uint8Array(message), 0);
				const data_view = new DataView(padded.buffer);
				data_view.setUint8(message_size, 0b10000000);
				data_view.setUint32(
					message_size + n_pad,
					msg_bit_size_least,
					true // Little-endian
				);
				data_view.setUint32(
					message_size + n_pad + 4,
					msg_bit_size_most,
					true // Little-endian
				);

				return padded.buffer;
			}

			static f(j, x, y, z)
			{
				if(0 <= j && j <= 15)
				{ // Exclusive-OR
					return x ^ y ^ z;
				}
				if(16 <= j && j <= 31)
				{ // Multiplexing (muxing)
					return (x & y) | (~x & z);
				}
				if(32 <= j && j <= 47)
				{
					return (x | ~y) ^ z;
				}
				if(48 <= j && j <= 63)
				{ // Multiplexing (muxing)
					return (x & z) | (y & ~z);
				}
				if(64 <= j && j <= 79)
				{
					return x ^ (y | ~z);
				}
			}
			static K(j)
			{
				if(0 <= j && j <= 15)
				{
					return 0x00000000;
				}
				if(16 <= j && j <= 31)
				{
					// Math.floor((2 ** 30) * Math.SQRT2)
					return 0x5A827999;
				}
				if(32 <= j && j <= 47)
				{
					// Math.floor((2 ** 30) * Math.sqrt(3))
					return 0x6ED9EBA1;
				}
				if(48 <= j && j <= 63)
				{
					// Math.floor((2 ** 30) * Math.sqrt(5))
					return 0x8F1BBCDC;
				}
				if(64 <= j && j <= 79)
				{
					// Math.floor((2 ** 30) * Math.sqrt(7))
					return 0xA953FD4E;
				}
			}
			static KP(j) // K'
			{
				if(0 <= j && j <= 15)
				{
					// Math.floor((2 ** 30) * Math.cbrt(2))
					return 0x50A28BE6;
				}
				if(16 <= j && j <= 31)
				{
					// Math.floor((2 ** 30) * Math.cbrt(3))
					return 0x5C4DD124;
				}
				if(32 <= j && j <= 47)
				{
					// Math.floor((2 ** 30) * Math.cbrt(5))
					return 0x6D703EF3;
				}
				if(48 <= j && j <= 63)
				{
					// Math.floor((2 ** 30) * Math.cbrt(7))
					return 0x7A6D76E9;
				}
				if(64 <= j && j <= 79)
				{
					return 0x00000000;
				}
			}
			static add_modulo32(/* ...... */)
			{
				// 1.  Modulo addition (addition modulo) is associative.
				//    https://proofwiki.org/wiki/Modulo_Addition_is_Associative
				// 2.  Bitwise operation in Javascript
				//    is done on 32-bits operands
				//    and results in a 32-bits value.
				return Array
					.from(arguments)
					.reduce((a, b) => (a + b), 0) | 0;
			}
			static rol32(value, count)
			{ // Cyclic left shift (rotate) on 32-bits value.
				return (value << count) | (value >>> (32 - count));
			}
			static hash(message /* An ArrayBuffer. */)
			{
				//////////       Padding       //////////

				// The padded message.
				const padded = RIPEMD160.pad(message);

				//////////     Compression     //////////

				// Message word selectors.
				const r = [
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
					7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
					3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
					1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
					4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
				];
				const rP = [ // r'
					5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
					6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
					15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
					8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
					12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
				];

				// Amounts for 'rotate left' operation.
				const s = [
					11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
					7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
					11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
					11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
					9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
				];
				const sP = [ // s'
					8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
					9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
					9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
					15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
					8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
				];

				// The size, in bytes, of a word.
				const word_size = 4;

				// The size, in bytes, of a 16-words block.
				const block_size = 64;

				// The number of the 16-words blocks.
				const t = padded.byteLength / block_size;

				//  The message after padding consists of t 16-word blocks that
				// are denoted with X_i[j], with 0≤i≤(t − 1) and 0≤j≤15.
				const X = (new Array(t))
					.fill(undefined)
					.map((_, i) => new Proxy(
						new DataView(
							padded, i * block_size, block_size
						), {
							get(block_view, j)
							{
								return block_view.getUint32(
									j * word_size,
									true // Little-endian
								);
							}
						}));

				//  The result of RIPEMD-160 is contained in five 32-bit words,
				// which form the internal state of the algorithm. The final
				// content of these five 32-bit words is converted to a 160-bit
				// string, again using the little-endian convention.
				let h = [
					0x67452301, // h_0
					0xEFCDAB89, // h_1
					0x98BADCFE, // h_2
					0x10325476, // h_3
					0xC3D2E1F0  // h_4
				];

				for(let i = 0; i < t; ++i)
				{
					let A = h[0], B = h[1], C = h[2], D = h[3], E = h[4];
					let AP = A, BP = B, CP = C, DP = D, EP = E;
					for(let j = 0; j < 80; ++j)
					{
						// Left rounds
						let T = RIPEMD160.add_modulo32(
							RIPEMD160.rol32(
								RIPEMD160.add_modulo32(
									A,
									RIPEMD160.f(j, B, C, D),
									X[i][r[j]],
									RIPEMD160.K(j)
								),
								s[j]
							),
							E
						);
						A = E;
						E = D;
						D = RIPEMD160.rol32(C, 10);
						C = B;
						B = T;

						// Right rounds
						T = RIPEMD160.add_modulo32(
							RIPEMD160.rol32(
								RIPEMD160.add_modulo32(
									AP,
									RIPEMD160.f(
										79 - j,
										BP,
										CP,
										DP
									),
									X[i][rP[j]],
									RIPEMD160.KP(j)
								),
								sP[j]
							),
							EP
						);
						AP = EP;
						EP = DP;
						DP = RIPEMD160.rol32(CP, 10);
						CP = BP;
						BP = T;
					}
					let T = RIPEMD160.add_modulo32(h[1], C, DP);
					h[1] = RIPEMD160.add_modulo32(h[2], D, EP);
					h[2] = RIPEMD160.add_modulo32(h[3], E, AP);
					h[3] = RIPEMD160.add_modulo32(h[4], A, BP);
					h[4] = RIPEMD160.add_modulo32(h[0], B, CP);
					h[0] = T;
				}

				//  The final output string then consists of the concatenatation
				// of h_0, h_1, h_2, h_3, and h_4 after converting each h_i to a
				// 4-byte string using the little-endian convention.
				const result = new ArrayBuffer(20);
				const data_view = new DataView(result);
				h.forEach((h_i, i) => data_view.setUint32(i * 4, h_i, true));
				return result;
			}
		}

		module.exports = {
			RIPEMD160
		}


		/***/ })

	/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9baWRdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tpZF0vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtanNvbnJwYy50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL2Vvc2pzLW51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vW2lkXS8uL3NyYy9lb3Nqcy1ycGNlcnJvci50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL3JpcGVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0dBRUc7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LElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3pDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUN2QixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDeEQ7S0FDSjtJQUNE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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJlb3Nqcy1qc29ucnBjLWRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW9zanMtanNvbnJwYy50c1wiKTtcbiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2ggKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgSlNPTi1SUENcclxuICovXHJcblxyXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxyXG5cclxuaW1wb3J0IHsgQXV0aG9yaXR5UHJvdmlkZXIsIEF1dGhvcml0eVByb3ZpZGVyQXJncyB9IGZyb20gXCIuL2Vvc2pzLWFwaVwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0TGVnYWN5UHVibGljS2V5cyB9IGZyb20gXCIuL2Vvc2pzLW51bWVyaWNcIjtcclxuaW1wb3J0IHsgUnBjRXJyb3IgfSBmcm9tIFwiLi9lb3Nqcy1ycGNlcnJvclwiO1xyXG5cclxuLyoqIFN0cnVjdHVyZWQgZm9ybWF0IGZvciBhYmlzICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWJpIHtcclxuICAgIHZlcnNpb246IHN0cmluZztcclxuICAgIHR5cGVzOiBBcnJheTx7IG5ld190eXBlX25hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nIH0+O1xyXG4gICAgc3RydWN0czogQXJyYXk8eyBuYW1lOiBzdHJpbmcsIGJhc2U6IHN0cmluZywgZmllbGRzOiBBcnJheTx7IG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nIH0+IH0+O1xyXG4gICAgYWN0aW9uczogQXJyYXk8eyBuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgcmljYXJkaWFuX2NvbnRyYWN0OiBzdHJpbmcgfT47XHJcbiAgICB0YWJsZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGluZGV4X3R5cGU6IHN0cmluZywga2V5X25hbWVzOiBzdHJpbmdbXSwga2V5X3R5cGVzOiBzdHJpbmdbXSB9PjtcclxuICAgIHJpY2FyZGlhbl9jbGF1c2VzOiBBcnJheTx7IGlkOiBzdHJpbmcsIGJvZHk6IHN0cmluZyB9PjtcclxuICAgIGVycm9yX21lc3NhZ2VzOiBBcnJheTx7IGVycm9yX2NvZGU6IHN0cmluZywgZXJyb3JfbXNnOiBzdHJpbmcgfT47XHJcbiAgICBhYmlfZXh0ZW5zaW9uczogQXJyYXk8eyB0YWc6IG51bWJlciwgdmFsdWU6IHN0cmluZyB9PjtcclxuICAgIHZhcmlhbnRzPzogQXJyYXk8eyBuYW1lOiBzdHJpbmcsIHR5cGVzOiBzdHJpbmdbXSB9PjtcclxufVxyXG5cclxuLyoqIFJldHVybiB2YWx1ZSBvZiBgL3YxL2NoYWluL2dldF9hYmlgICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0QWJpUmVzdWx0IHtcclxuICAgIGFjY291bnRfbmFtZTogc3RyaW5nO1xyXG4gICAgYWJpOiBBYmk7XHJcbn1cclxuXHJcbi8qKiBTdWJzZXQgb2YgYEdldEJsb2NrUmVzdWx0YCBuZWVkZWQgdG8gY2FsY3VsYXRlIFRBUG9TIGZpZWxkcyBpbiB0cmFuc2FjdGlvbnMgKi9cclxuZXhwb3J0IGludGVyZmFjZSBCbG9ja1RhcG9zSW5mbyB7XHJcbiAgICB0aW1lc3RhbXA6IHN0cmluZztcclxuICAgIGJsb2NrX251bTogbnVtYmVyO1xyXG4gICAgcmVmX2Jsb2NrX3ByZWZpeDogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogUmV0dXJuIHZhbHVlIG9mIGAvdjEvY2hhaW4vZ2V0X2Jsb2NrYCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldEJsb2NrUmVzdWx0IHtcclxuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xyXG4gICAgcHJvZHVjZXI6IHN0cmluZztcclxuICAgIGNvbmZpcm1lZDogbnVtYmVyO1xyXG4gICAgcHJldmlvdXM6IHN0cmluZztcclxuICAgIHRyYW5zYWN0aW9uX21yb290OiBzdHJpbmc7XHJcbiAgICBhY3Rpb25fbXJvb3Q6IHN0cmluZztcclxuICAgIHNjaGVkdWxlX3ZlcnNpb246IG51bWJlcjtcclxuICAgIHByb2R1Y2VyX3NpZ25hdHVyZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGJsb2NrX251bTogbnVtYmVyO1xyXG4gICAgcmVmX2Jsb2NrX3ByZWZpeDogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogUmV0dXJuIHZhbHVlIG9mIGAvdjEvY2hhaW4vZ2V0X2NvZGVgICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0Q29kZVJlc3VsdCB7XHJcbiAgICBhY2NvdW50X25hbWU6IHN0cmluZztcclxuICAgIGNvZGVfaGFzaDogc3RyaW5nO1xyXG4gICAgd2FzdDogc3RyaW5nO1xyXG4gICAgd2FzbTogc3RyaW5nO1xyXG4gICAgYWJpOiBBYmk7XHJcbn1cclxuXHJcbi8qKiBSZXR1cm4gdmFsdWUgb2YgYC92MS9jaGFpbi9nZXRfaW5mb2AgKi9cclxuZXhwb3J0IGludGVyZmFjZSBHZXRJbmZvUmVzdWx0IHtcclxuICAgIHNlcnZlcl92ZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBjaGFpbl9pZDogc3RyaW5nO1xyXG4gICAgaGVhZF9ibG9ja19udW06IG51bWJlcjtcclxuICAgIGxhc3RfaXJyZXZlcnNpYmxlX2Jsb2NrX251bTogbnVtYmVyO1xyXG4gICAgbGFzdF9pcnJldmVyc2libGVfYmxvY2tfaWQ6IHN0cmluZztcclxuICAgIGhlYWRfYmxvY2tfaWQ6IHN0cmluZztcclxuICAgIGhlYWRfYmxvY2tfdGltZTogc3RyaW5nO1xyXG4gICAgaGVhZF9ibG9ja19wcm9kdWNlcjogc3RyaW5nO1xyXG4gICAgdmlydHVhbF9ibG9ja19jcHVfbGltaXQ6IG51bWJlcjtcclxuICAgIHZpcnR1YWxfYmxvY2tfbmV0X2xpbWl0OiBudW1iZXI7XHJcbiAgICBibG9ja19jcHVfbGltaXQ6IG51bWJlcjtcclxuICAgIGJsb2NrX25ldF9saW1pdDogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogUmV0dXJuIHZhbHVlIG9mIGAvdjEvY2hhaW4vZ2V0X3Jhd19jb2RlX2FuZF9hYmlgICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0UmF3Q29kZUFuZEFiaVJlc3VsdCB7XHJcbiAgICBhY2NvdW50X25hbWU6IHN0cmluZztcclxuICAgIHdhc206IHN0cmluZztcclxuICAgIGFiaTogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQXJndW1lbnRzIGZvciBgcHVzaF90cmFuc2FjdGlvbmAgKi9cclxuZXhwb3J0IGludGVyZmFjZSBQdXNoVHJhbnNhY3Rpb25BcmdzIHtcclxuICAgIHNpZ25hdHVyZXM6IHN0cmluZ1tdO1xyXG4gICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uOiBVaW50OEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheVRvSGV4KGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCB4IG9mIGRhdGEpIHtcclxuICAgICAgICByZXN1bHQgKz0gKFwiMDBcIiArIHgudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKiogTWFrZSBSUEMgY2FsbHMgKi9cclxuZXhwb3J0IGNsYXNzIEpzb25ScGMgaW1wbGVtZW50cyBBdXRob3JpdHlQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZW5kcG9pbnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBmZXRjaEJ1aWx0aW46IChpbnB1dD86IFJlcXVlc3QgfCBzdHJpbmcsIGluaXQ/OiBSZXF1ZXN0SW5pdCkgPT4gUHJvbWlzZTxSZXNwb25zZT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICogICAgKiBgZmV0Y2hgOlxyXG4gICAgICogICAgICAqIGJyb3dzZXJzOiBsZWF2ZSBgbnVsbGAgb3IgYHVuZGVmaW5lZGBcclxuICAgICAqICAgICAgKiBub2RlOiBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVuZHBvaW50OiBzdHJpbmcsIGFyZ3M6XHJcbiAgICAgICAgeyBmZXRjaD86IChpbnB1dD86IHN0cmluZyB8IFJlcXVlc3QsIGluaXQ/OiBSZXF1ZXN0SW5pdCkgPT4gUHJvbWlzZTxSZXNwb25zZT4gfSA9IHt9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50O1xyXG4gICAgICAgIGlmIChhcmdzLmZldGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hCdWlsdGluID0gYXJncy5mZXRjaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoQnVpbHRpbiA9IChnbG9iYWwgYXMgYW55KS5mZXRjaDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFBvc3QgYGJvZHlgIHRvIGBlbmRwb2ludCArIHBhdGhgLiBUaHJvd3MgZGV0YWlsZWQgZXJyb3IgaW5mb3JtYXRpb24gaW4gYFJwY0Vycm9yYCB3aGVuIGF2YWlsYWJsZS4gKi9cclxuICAgIHB1YmxpYyBhc3luYyBmZXRjaChwYXRoOiBzdHJpbmcsIGJvZHk6IGFueSkge1xyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBsZXQganNvbjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5mZXRjaEJ1aWx0aW47XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZih0aGlzLmVuZHBvaW50ICsgcGF0aCwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKGpzb24ucHJvY2Vzc2VkICYmIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJwY0Vycm9yKGpzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBlLmlzRmV0Y2hFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJwY0Vycm9yKGpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ganNvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfYWJpYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIHB1YmxpYyBhc3luYyBnZXRfYWJpKGFjY291bnRfbmFtZTogc3RyaW5nKTogUHJvbWlzZTxHZXRBYmlSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfYWJpXCIsIHsgYWNjb3VudF9uYW1lIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9hY2NvdW50YCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIHB1YmxpYyBhc3luYyBnZXRfYWNjb3VudChhY2NvdW50X25hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2FjY291bnRcIiwgeyBhY2NvdW50X25hbWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2Jsb2NrX2hlYWRlcl9zdGF0ZWAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2Jsb2NrX2hlYWRlcl9zdGF0ZShibG9ja19udW1fb3JfaWQ6IG51bWJlciB8IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2Jsb2NrX2hlYWRlcl9zdGF0ZVwiLCB7IGJsb2NrX251bV9vcl9pZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfYmxvY2tgICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgcHVibGljIGFzeW5jIGdldF9ibG9jayhibG9ja19udW1fb3JfaWQ6IG51bWJlciB8IHN0cmluZyk6IFByb21pc2U8R2V0QmxvY2tSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfYmxvY2tcIiwgeyBibG9ja19udW1fb3JfaWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2NvZGVgICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgcHVibGljIGFzeW5jIGdldF9jb2RlKGFjY291bnRfbmFtZTogc3RyaW5nKTogUHJvbWlzZTxHZXRDb2RlUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2NvZGVcIiwgeyBhY2NvdW50X25hbWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X2JhbGFuY2VgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2N1cnJlbmN5X2JhbGFuY2UoY29kZTogc3RyaW5nLCBhY2NvdW50OiBzdHJpbmcsIHN5bWJvbDogc3RyaW5nID0gbnVsbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X2JhbGFuY2VcIiwgeyBjb2RlLCBhY2NvdW50LCBzeW1ib2wgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X3N0YXRzYCAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldF9jdXJyZW5jeV9zdGF0cyhjb2RlOiBzdHJpbmcsIHN5bWJvbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfY3VycmVuY3lfc3RhdHNcIiwgeyBjb2RlLCBzeW1ib2wgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2luZm9gICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2luZm8oKTogUHJvbWlzZTxHZXRJbmZvUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2luZm9cIiwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9wcm9kdWNlcl9zY2hlZHVsZWAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRfcHJvZHVjZXJfc2NoZWR1bGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcHJvZHVjZXJfc2NoZWR1bGVcIiwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9wcm9kdWNlcnNgICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgcHVibGljIGFzeW5jIGdldF9wcm9kdWNlcnMoanNvbiA9IHRydWUsIGxvd2VyX2JvdW5kID0gXCJcIiwgbGltaXQgPSA1MCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X3Byb2R1Y2Vyc1wiLCB7IGpzb24sIGxvd2VyX2JvdW5kLCBsaW1pdCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfcmF3X2NvZGVfYW5kX2FiaWAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X3Jhd19jb2RlX2FuZF9hYmkoYWNjb3VudF9uYW1lOiBzdHJpbmcpOiBQcm9taXNlPEdldFJhd0NvZGVBbmRBYmlSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcmF3X2NvZGVfYW5kX2FiaVwiLCB7IGFjY291bnRfbmFtZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfdGFibGVfcm93c2AgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRfdGFibGVfcm93cyh7XHJcbiAgICAgICAganNvbiA9IHRydWUsXHJcbiAgICAgICAgY29kZSxcclxuICAgICAgICBzY29wZSxcclxuICAgICAgICB0YWJsZSxcclxuICAgICAgICB0YWJsZV9rZXkgPSBcIlwiLFxyXG4gICAgICAgIGxvd2VyX2JvdW5kID0gXCJcIixcclxuICAgICAgICB1cHBlcl9ib3VuZCA9IFwiXCIsXHJcbiAgICAgICAgbGltaXQgPSAxMCB9OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFxyXG4gICAgICAgICAgICBcIi92MS9jaGFpbi9nZXRfdGFibGVfcm93c1wiLCB7XHJcbiAgICAgICAgICAgICAgICBqc29uLFxyXG4gICAgICAgICAgICAgICAgY29kZSxcclxuICAgICAgICAgICAgICAgIHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgdGFibGUsXHJcbiAgICAgICAgICAgICAgICB0YWJsZV9rZXksXHJcbiAgICAgICAgICAgICAgICBsb3dlcl9ib3VuZCxcclxuICAgICAgICAgICAgICAgIHVwcGVyX2JvdW5kLFxyXG4gICAgICAgICAgICAgICAgbGltaXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgc3Vic2V0IG9mIGBhdmFpbGFibGVLZXlzYCBuZWVkZWQgdG8gbWVldCBhdXRob3JpdGllcyBpbiBgdHJhbnNhY3Rpb25gLiBJbXBsZW1lbnRzIGBBdXRob3JpdHlQcm92aWRlcmAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRSZXF1aXJlZEtleXMoYXJnczogQXV0aG9yaXR5UHJvdmlkZXJBcmdzKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiBjb252ZXJ0TGVnYWN5UHVibGljS2V5cygoYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcmVxdWlyZWRfa2V5c1wiLCB7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uOiBhcmdzLnRyYW5zYWN0aW9uLFxyXG4gICAgICAgICAgICBhdmFpbGFibGVfa2V5czogYXJncy5hdmFpbGFibGVLZXlzLFxyXG4gICAgICAgIH0pKS5yZXF1aXJlZF9rZXlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUHVzaCBhIHNlcmlhbGl6ZWQgdHJhbnNhY3Rpb24gKi9cclxuICAgIHB1YmxpYyBhc3luYyBwdXNoX3RyYW5zYWN0aW9uKHsgc2lnbmF0dXJlcywgc2VyaWFsaXplZFRyYW5zYWN0aW9uIH06IFB1c2hUcmFuc2FjdGlvbkFyZ3MpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL3B1c2hfdHJhbnNhY3Rpb25cIiwge1xyXG4gICAgICAgICAgICBzaWduYXR1cmVzLFxyXG4gICAgICAgICAgICBjb21wcmVzc2lvbjogMCxcclxuICAgICAgICAgICAgcGFja2VkX2NvbnRleHRfZnJlZV9kYXRhOiBcIlwiLFxyXG4gICAgICAgICAgICBwYWNrZWRfdHJ4OiBhcnJheVRvSGV4KHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvZGJfc2l6ZS9nZXRgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZGJfc2l6ZV9nZXQoKSB7IHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2RiX3NpemUvZ2V0XCIsIHt9KTsgfVxyXG5cclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2hpc3RvcnkvZ2V0X2FjdGlvbnNgICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgcHVibGljIGFzeW5jIGhpc3RvcnlfZ2V0X2FjdGlvbnMoYWNjb3VudF9uYW1lOiBzdHJpbmcsIHBvczogbnVtYmVyID0gbnVsbCwgb2Zmc2V0OiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvaGlzdG9yeS9nZXRfYWN0aW9uc1wiLCB7IGFjY291bnRfbmFtZSwgcG9zLCBvZmZzZXQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvaGlzdG9yeS9nZXRfdHJhbnNhY3Rpb25gICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgcHVibGljIGFzeW5jIGhpc3RvcnlfZ2V0X3RyYW5zYWN0aW9uKGlkOiBzdHJpbmcsIGJsb2NrX251bV9oaW50OiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvaGlzdG9yeS9nZXRfdHJhbnNhY3Rpb25cIiwgeyBpZCwgYmxvY2tfbnVtX2hpbnQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvaGlzdG9yeS9nZXRfa2V5X2FjY291bnRzYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIHB1YmxpYyBhc3luYyBoaXN0b3J5X2dldF9rZXlfYWNjb3VudHMocHVibGljX2tleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvaGlzdG9yeS9nZXRfa2V5X2FjY291bnRzXCIsIHsgcHVibGljX2tleSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9oaXN0b3J5L2dldF9jb250cm9sbGVkX2FjY291bnRzYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIHB1YmxpYyBhc3luYyBoaXN0b3J5X2dldF9jb250cm9sbGVkX2FjY291bnRzKGNvbnRyb2xsaW5nX2FjY291bnQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2hpc3RvcnkvZ2V0X2NvbnRyb2xsZWRfYWNjb3VudHNcIiwgeyBjb250cm9sbGluZ19hY2NvdW50IH0pO1xyXG4gICAgfVxyXG59IC8vIEpzb25ScGNcclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgTnVtZXJpY1xyXG4gKi9cclxuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXZhci1yZXF1aXJlc1xyXG5jb25zdCByaXBlbWQxNjAgPSByZXF1aXJlKFwiLi9yaXBlbWRcIikuUklQRU1EMTYwLmhhc2ggYXMgKGE6IFVpbnQ4QXJyYXkpID0+IEFycmF5QnVmZmVyO1xyXG5cclxuY29uc3QgYmFzZTU4Q2hhcnMgPSBcIjEyMzQ1Njc4OUFCQ0RFRkdISktMTU5QUVJTVFVWV1hZWmFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXpcIjtcclxuY29uc3QgYmFzZTY0Q2hhcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9iYXNlNThfbWFwKCkge1xyXG4gICAgY29uc3QgYmFzZTU4TSA9IEFycmF5KDI1NikuZmlsbCgtMSkgYXMgbnVtYmVyW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2U1OENoYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgYmFzZTU4TVtiYXNlNThDaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmFzZTU4TTtcclxufVxyXG5cclxuY29uc3QgYmFzZTU4TWFwID0gY3JlYXRlX2Jhc2U1OF9tYXAoKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9iYXNlNjRfbWFwKCkge1xyXG4gICAgY29uc3QgYmFzZTY0TSA9IEFycmF5KDI1NikuZmlsbCgtMSkgYXMgbnVtYmVyW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2U2NENoYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgYmFzZTY0TVtiYXNlNjRDaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XHJcbiAgICB9XHJcbiAgICBiYXNlNjRNW1wiPVwiLmNoYXJDb2RlQXQoMCldID0gMDtcclxuICAgIHJldHVybiBiYXNlNjRNO1xyXG59XHJcblxyXG5jb25zdCBiYXNlNjRNYXAgPSBjcmVhdGVfYmFzZTY0X21hcCgpO1xyXG5cclxuLyoqIElzIGBiaWdudW1gIGEgbmVnYXRpdmUgbnVtYmVyPyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZShiaWdudW06IFVpbnQ4QXJyYXkpIHtcclxuICAgIHJldHVybiAoYmlnbnVtW2JpZ251bS5sZW5ndGggLSAxXSAmIDB4ODApICE9PSAwO1xyXG59XHJcblxyXG4vKiogTmVnYXRlIGBiaWdudW1gICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUoYmlnbnVtOiBVaW50OEFycmF5KSB7XHJcbiAgICBsZXQgY2FycnkgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaWdudW0ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBjb25zdCB4ID0gKH5iaWdudW1baV0gJiAweGZmKSArIGNhcnJ5O1xyXG4gICAgICAgIGJpZ251bVtpXSA9IHg7XHJcbiAgICAgICAgY2FycnkgPSB4ID4+IDg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxyXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShzaXplKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IHNyY0RpZ2l0ID0gcy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChzcmNEaWdpdCA8IFwiMFwiLmNoYXJDb2RlQXQoMCkgfHwgc3JjRGlnaXQgPiBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgbnVtYmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FycnkgPSBzcmNEaWdpdCAtIFwiMFwiLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyArK2opIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IHJlc3VsdFtqXSAqIDEwICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIGlzIG91dCBvZiByYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBhIHNpZ25lZCBkZWNpbWFsIG51bWJlciBpbiBgc2AgdG8gYSBiaWdudW1cclxuICogQHBhcmFtIHNpemUgYmlnbnVtIHNpemUgKGJ5dGVzKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZERlY2ltYWxUb0JpbmFyeShzaXplOiBudW1iZXIsIHM6IHN0cmluZykge1xyXG4gICAgY29uc3QgbmVnYXRpdmUgPSBzWzBdID09PSBcIi1cIjtcclxuICAgIGlmIChuZWdhdGl2ZSkge1xyXG4gICAgICAgIHMgPSBzLnN1YnN0cigxKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGRlY2ltYWxUb0JpbmFyeShzaXplLCBzKTtcclxuICAgIGlmIChuZWdhdGl2ZSkge1xyXG4gICAgICAgIG5lZ2F0ZShyZXN1bHQpO1xyXG4gICAgICAgIGlmICghaXNOZWdhdGl2ZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpc05lZ2F0aXZlKHJlc3VsdCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgaXMgb3V0IG9mIHJhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXJcclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvRGVjaW1hbChiaWdudW06IFVpbnQ4QXJyYXksIG1pbkRpZ2l0cyA9IDEpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5KG1pbkRpZ2l0cykuZmlsbChcIjBcIi5jaGFyQ29kZUF0KDApKSBhcyBudW1iZXJbXTtcclxuICAgIGZvciAobGV0IGkgPSBiaWdudW0ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICBsZXQgY2FycnkgPSBiaWdudW1baV07XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9ICgocmVzdWx0W2pdIC0gXCIwXCIuY2hhckNvZGVBdCgwKSkgPDwgOCkgKyBjYXJyeTtcclxuICAgICAgICAgICAgcmVzdWx0W2pdID0gXCIwXCIuY2hhckNvZGVBdCgwKSArIHggJSAxMDtcclxuICAgICAgICAgICAgY2FycnkgPSAoeCAvIDEwKSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcIjBcIi5jaGFyQ29kZUF0KDApICsgY2FycnkgJSAxMCk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gMTApIHwgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzdWx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYSBzaWduZWQgZGVjaW1hbCBudW1iZXJcclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZEJpbmFyeVRvRGVjaW1hbChiaWdudW06IFVpbnQ4QXJyYXksIG1pbkRpZ2l0cyA9IDEpIHtcclxuICAgIGlmIChpc05lZ2F0aXZlKGJpZ251bSkpIHtcclxuICAgICAgICBjb25zdCB4ID0gYmlnbnVtLnNsaWNlKCk7XHJcbiAgICAgICAgbmVnYXRlKHgpO1xyXG4gICAgICAgIHJldHVybiBcIi1cIiArIGJpbmFyeVRvRGVjaW1hbCh4LCBtaW5EaWdpdHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJpbmFyeVRvRGVjaW1hbChiaWdudW0sIG1pbkRpZ2l0cyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGJhc2UtNTggbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxyXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmFzZTU4VG9CaW5hcnkoc2l6ZTogbnVtYmVyLCBzOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gYmFzZTU4TWFwW3MuY2hhckNvZGVBdChpKV07XHJcbiAgICAgICAgaWYgKGNhcnJ5IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGJhc2UtNTggdmFsdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSByZXN1bHRbal0gKiA1OCArIGNhcnJ5O1xyXG4gICAgICAgICAgICByZXN1bHRbal0gPSB4O1xyXG4gICAgICAgICAgICBjYXJyeSA9IHggPj4gODtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhcnJ5KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhc2UtNTggdmFsdWUgaXMgb3V0IG9mIHJhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBgYmlnbnVtYCB0byBhIGJhc2UtNTggbnVtYmVyXHJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlUb0Jhc2U1OChiaWdudW06IFVpbnQ4QXJyYXksIG1pbkRpZ2l0cyA9IDEpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdIGFzIG51bWJlcltdO1xyXG4gICAgZm9yIChjb25zdCBieXRlIG9mIGJpZ251bSkge1xyXG4gICAgICAgIGxldCBjYXJyeSA9IGJ5dGU7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IChiYXNlNThNYXBbcmVzdWx0W2pdXSA8PCA4KSArIGNhcnJ5O1xyXG4gICAgICAgICAgICByZXN1bHRbal0gPSBiYXNlNThDaGFycy5jaGFyQ29kZUF0KHggJSA1OCk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gKHggLyA1OCkgfCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYmFzZTU4Q2hhcnMuY2hhckNvZGVBdChjYXJyeSAlIDU4KSk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gNTgpIHwgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGJ5dGUgb2YgYmlnbnVtKSB7XHJcbiAgICAgICAgaWYgKGJ5dGUpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goXCIxXCIuY2hhckNvZGVBdCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnJlc3VsdCk7XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGJhc2UtNjQgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VG9CaW5hcnkoczogc3RyaW5nKSB7XHJcbiAgICBsZXQgbGVuID0gcy5sZW5ndGg7XHJcbiAgICBpZiAoKGxlbiAmIDMpID09PSAxICYmIHNbbGVuIC0gMV0gPT09IFwiPVwiKSB7XHJcbiAgICAgICAgbGVuIC09IDE7XHJcbiAgICB9IC8vIGZjIGFwcGVuZHMgYW4gZXh0cmEgJz0nXHJcbiAgICBpZiAoKGxlbiAmIDMpICE9PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZS02NCB2YWx1ZSBpcyBub3QgcGFkZGVkIGNvcnJlY3RseVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdyb3VwcyA9IGxlbiA+PiAyO1xyXG4gICAgbGV0IGJ5dGVzID0gZ3JvdXBzICogMztcclxuICAgIGlmIChsZW4gPiAwICYmIHNbbGVuIC0gMV0gPT09IFwiPVwiKSB7XHJcbiAgICAgICAgaWYgKHNbbGVuIC0gMl0gPT09IFwiPVwiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzIC09IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnl0ZXMgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShieXRlcyk7XHJcblxyXG4gICAgZm9yIChsZXQgZ3JvdXAgPSAwOyBncm91cCA8IGdyb3VwczsgKytncm91cCkge1xyXG4gICAgICAgIGNvbnN0IGRpZ2l0MCA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMCldO1xyXG4gICAgICAgIGNvbnN0IGRpZ2l0MSA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMSldO1xyXG4gICAgICAgIGNvbnN0IGRpZ2l0MiA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMildO1xyXG4gICAgICAgIGNvbnN0IGRpZ2l0MyA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMyldO1xyXG4gICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAwXSA9IChkaWdpdDAgPDwgMikgfCAoZGlnaXQxID4+IDQpO1xyXG4gICAgICAgIGlmIChncm91cCAqIDMgKyAxIDwgYnl0ZXMpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDFdID0gKChkaWdpdDEgJiAxNSkgPDwgNCkgfCAoZGlnaXQyID4+IDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JvdXAgKiAzICsgMiA8IGJ5dGVzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAyXSA9ICgoZGlnaXQyICYgMykgPDwgNikgfCBkaWdpdDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqIEtleSB0eXBlcyB0aGlzIGxpYnJhcnkgc3VwcG9ydHMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gS2V5VHlwZSB7XHJcbiAgICBrMSA9IDAsXHJcbiAgICByMSA9IDEsXHJcbn1cclxuXHJcbi8qKiBQdWJsaWMga2V5IGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cclxuZXhwb3J0IGNvbnN0IHB1YmxpY0tleURhdGFTaXplID0gMzM7XHJcblxyXG4vKiogUHJpdmF0ZSBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xyXG5leHBvcnQgY29uc3QgcHJpdmF0ZUtleURhdGFTaXplID0gMzI7XHJcblxyXG4vKiogU2lnbmF0dXJlIGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cclxuZXhwb3J0IGNvbnN0IHNpZ25hdHVyZURhdGFTaXplID0gNjU7XHJcblxyXG4vKiogUHVibGljIGtleSwgcHJpdmF0ZSBrZXksIG9yIHNpZ25hdHVyZSBpbiBiaW5hcnkgZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEtleSB7XHJcbiAgICB0eXBlOiBLZXlUeXBlO1xyXG4gICAgZGF0YTogVWludDhBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlnZXN0U3VmZml4UmlwZW1kMTYwKGRhdGE6IFVpbnQ4QXJyYXksIHN1ZmZpeDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGggKyBzdWZmaXgubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGRbaV0gPSBkYXRhW2ldO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWZmaXgubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBkW2RhdGEubGVuZ3RoICsgaV0gPSBzdWZmaXguY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByaXBlbWQxNjAoZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvS2V5KHM6IHN0cmluZywgdHlwZTogS2V5VHlwZSwgc2l6ZTogbnVtYmVyLCBzdWZmaXg6IHN0cmluZyk6IEtleSB7XHJcbiAgICBjb25zdCB3aG9sZSA9IGJhc2U1OFRvQmluYXJ5KHNpemUgKyA0LCBzKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHsgdHlwZSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkod2hvbGUuYnVmZmVyLCAwLCBzaXplKSB9O1xyXG4gICAgY29uc3QgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkoZGlnZXN0U3VmZml4UmlwZW1kMTYwKHJlc3VsdC5kYXRhLCBzdWZmaXgpKTtcclxuICAgIGlmIChkaWdlc3RbMF0gIT09IHdob2xlW3NpemUgKyAwXSB8fCBkaWdlc3RbMV0gIT09IHdob2xlW3NpemUgKyAxXVxyXG4gICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbc2l6ZSArIDJdIHx8IGRpZ2VzdFszXSAhPT0gd2hvbGVbc2l6ZSArIDNdKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2hlY2tzdW0gZG9lc24ndCBtYXRjaFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleVRvU3RyaW5nKGtleTogS2V5LCBzdWZmaXg6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KGRpZ2VzdFN1ZmZpeFJpcGVtZDE2MChrZXkuZGF0YSwgc3VmZml4KSk7XHJcbiAgICBjb25zdCB3aG9sZSA9IG5ldyBVaW50OEFycmF5KGtleS5kYXRhLmxlbmd0aCArIDQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkuZGF0YS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHdob2xlW2ldID0ga2V5LmRhdGFbaV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgIHdob2xlW2kgKyBrZXkuZGF0YS5sZW5ndGhdID0gZGlnZXN0W2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWZpeCArIGJpbmFyeVRvQmFzZTU4KHdob2xlKTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9QdWJsaWNLZXkoczogc3RyaW5nKTogS2V5IHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHB1YmxpYyBrZXlcIik7XHJcbiAgICB9XHJcbiAgICBpZiAocy5zdWJzdHIoMCwgMykgPT09IFwiRU9TXCIpIHtcclxuICAgICAgICBjb25zdCB3aG9sZSA9IGJhc2U1OFRvQmluYXJ5KHB1YmxpY0tleURhdGFTaXplICsgNCwgcy5zdWJzdHIoMykpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHsgdHlwZTogS2V5VHlwZS5rMSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkocHVibGljS2V5RGF0YVNpemUpIH07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdWJsaWNLZXlEYXRhU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgIGtleS5kYXRhW2ldID0gd2hvbGVbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KHJpcGVtZDE2MChrZXkuZGF0YSkpO1xyXG4gICAgICAgIGlmIChkaWdlc3RbMF0gIT09IHdob2xlW3B1YmxpY0tleURhdGFTaXplXSB8fCBkaWdlc3RbMV0gIT09IHdob2xlWzM0XVxyXG4gICAgICAgICAgICB8fCBkaWdlc3RbMl0gIT09IHdob2xlWzM1XSB8fCBkaWdlc3RbM10gIT09IHdob2xlWzM2XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjaGVja3N1bSBkb2Vzbid0IG1hdGNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfSBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJQVUJfSzFfXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIHB1YmxpY0tleURhdGFTaXplLCBcIksxXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJQVUJfUjFfXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIHB1YmxpY0tleURhdGFTaXplLCBcIlIxXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgcHVibGljIGtleSBmb3JtYXRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHVibGljS2V5VG9TdHJpbmcoa2V5OiBLZXkpIHtcclxuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5rMSAmJiBrZXkuZGF0YS5sZW5ndGggPT09IHB1YmxpY0tleURhdGFTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgXCJLMVwiLCBcIlBVQl9LMV9cIik7XHJcbiAgICB9IGVsc2UgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLnIxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gcHVibGljS2V5RGF0YVNpemUpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIlIxXCIsIFwiUFVCX1IxX1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogSWYgYSBrZXkgaXMgaW4gdGhlIGxlZ2FjeSBmb3JtYXQgKGBFT1NgIHByZWZpeCksIHRoZW4gY29udmVydCBpdCB0byB0aGUgbmV3IGZvcm1hdCAoYFBVQl9LMV9gKS5cclxuICogTGVhdmVzIG90aGVyIGZvcm1hdHMgdW50b3VjaGVkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlZ2FjeVB1YmxpY0tleShzOiBzdHJpbmcpIHtcclxuICAgIGlmIChzLnN1YnN0cigwLCAzKSA9PT0gXCJFT1NcIikge1xyXG4gICAgICAgIHJldHVybiBwdWJsaWNLZXlUb1N0cmluZyhzdHJpbmdUb1B1YmxpY0tleShzKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXHJcbiAqIExlYXZlcyBvdGhlciBmb3JtYXRzIHVudG91Y2hlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzKGtleXM6IHN0cmluZ1tdKSB7XHJcbiAgICByZXR1cm4ga2V5cy5tYXAoY29udmVydExlZ2FjeVB1YmxpY0tleSk7XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvUHJpdmF0ZUtleShzOiBzdHJpbmcpOiBLZXkge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHJpdmF0ZSBrZXlcIik7XHJcbiAgICB9XHJcbiAgICBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiUFZUX1IxX1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLnIxLCBwcml2YXRlS2V5RGF0YVNpemUsIFwiUjFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwcml2YXRlIGtleSBmb3JtYXRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJpdmF0ZUtleVRvU3RyaW5nKGtleTogS2V5KSB7XHJcbiAgICBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUucjEpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIlIxXCIsIFwiUFZUX1IxX1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHByaXZhdGUga2V5IGZvcm1hdFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9TaWduYXR1cmUoczogc3RyaW5nKTogS2V5IHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHNpZ25hdHVyZVwiKTtcclxuICAgIH1cclxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJTSUdfSzFfXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIHNpZ25hdHVyZURhdGFTaXplLCBcIksxXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJTSUdfUjFfXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIHNpZ25hdHVyZURhdGFTaXplLCBcIlIxXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgc2lnbmF0dXJlIGZvcm1hdFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIENvbnZlcnQgYHNpZ25hdHVyZWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1N0cmluZyhzaWduYXR1cmU6IEtleSkge1xyXG4gICAgaWYgKHNpZ25hdHVyZS50eXBlID09PSBLZXlUeXBlLmsxKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgXCJLMVwiLCBcIlNJR19LMV9cIik7XHJcbiAgICB9IGVsc2UgaWYgKHNpZ25hdHVyZS50eXBlID09PSBLZXlUeXBlLnIxKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgXCJSMVwiLCBcIlNJR19SMV9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0XCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIFJQQy1FcnJvclxyXG4gKi9cclxuXHJcbi8qKiBIb2xkcyBkZXRhaWxlZCBlcnJvciBpbmZvcm1hdGlvbiAqL1xyXG5leHBvcnQgY2xhc3MgUnBjRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKiogRGV0YWlsZWQgZXJyb3IgaW5mb3JtYXRpb24gKi9cclxuICAgIHB1YmxpYyBqc29uOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbjogYW55KSB7XHJcbiAgICAgICAgaWYgKGpzb24uZXJyb3IgJiYganNvbi5lcnJvci5kZXRhaWxzICYmIGpzb24uZXJyb3IuZGV0YWlscy5sZW5ndGggJiYganNvbi5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgc3VwZXIoanNvbi5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5wcm9jZXNzZWQgJiYganNvbi5wcm9jZXNzZWQuZXhjZXB0ICYmIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdC5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGpzb24ucHJvY2Vzc2VkLmV4Y2VwdC5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlcihqc29uLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgUnBjRXJyb3IucHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLmpzb24gPSBqc29uO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vd2x6bGEwMDAvYmFjODNkZjZkM2M1MTkxNmM0ZGQwYmM5NDdlNDY5NDcvcmF3LzdlZTM0NjJiMDk1YWIyMjU4MGRkYWYxOTFmNDRhNTkwZGE2ZmUzM2IvUklQRU1ELTE2MC5qc1xyXG5cclxuLypcclxuXHRSSVBFTUQtMTYwLmpzXHJcblxyXG5cdFx0ZGV2ZWxvcGVkXHJcblx0XHRcdGJ5IEsuIChodHRwczovL2dpdGh1Yi5jb20vd2x6bGEwMDApXHJcblx0XHRcdG9uIERlY2VtYmVyIDI3LTI5LCAyMDE3LFxyXG5cclxuXHRcdGxpY2Vuc2VkIHVuZGVyXHJcblxyXG5cclxuXHRcdHRoZSBNSVQgbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoYykgMjAxNyBLLlxyXG5cclxuXHRcdCBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxyXG5cdFx0b2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cclxuXHRcdGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxyXG5cdFx0cmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXHJcblx0XHRjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuXHRcdHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXHJcblx0XHRTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xyXG5cdFx0Y29uZGl0aW9uczpcclxuXHJcblx0XHQgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuXHRcdGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdCBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG5cdFx0RVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXHJcblx0XHRPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG5cdFx0Tk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcclxuXHRcdEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxyXG5cdFx0V0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcblx0XHRGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXHJcblx0XHRPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIFJJUEVNRDE2MFxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdC8vIGh0dHBzOi8vd2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NlYXJjaD9xPWNhY2hlOkNuTE9nb2xUSFlFSjpodHRwczovL3d3dy5jb3NpYy5lc2F0Lmt1bGV1dmVuLmJlL3B1YmxpY2F0aW9ucy9hcnRpY2xlLTMxNy5wZGZcclxuXHRcdC8vIGh0dHA6Ly9zaG9kaGdhbmdhLmluZmxpYm5ldC5hYy5pbi9iaXRzdHJlYW0vMTA2MDMvMjI5NzgvMTMvMTNfYXBwZW5kaXgucGRmXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0X25fcGFkX2J5dGVzKG1lc3NhZ2Vfc2l6ZSAvKiBpbiBieXRlcywgMSBieXRlIGlzIDggYml0cy4gKi8pXHJcblx0e1xyXG5cdFx0Ly8gIE9idGFpbiB0aGUgbnVtYmVyIG9mIGJ5dGVzIG5lZWRlZCB0byBwYWQgdGhlIG1lc3NhZ2UuXHJcblx0XHQvLyBJdCBkb2VzIG5vdCBjb250YWluIHRoZSBzaXplIG9mIHRoZSBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXHJcblx0XHQvKlxyXG5cdFx0XHRodHRwczovL3dlYmNhY2hlLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zZWFyY2g/cT1jYWNoZTpDbkxPZ29sVEhZRUo6aHR0cHM6Ly93d3cuY29zaWMuZXNhdC5rdWxldXZlbi5iZS9wdWJsaWNhdGlvbnMvYXJ0aWNsZS0zMTcucGRmXHJcblxyXG5cdFx0XHRUaGUgQ3J5cHRvZ3JhcGhpYyBIYXNoIEZ1bmN0aW9uIFJJUEVNRC0xNjBcclxuXHJcblx0XHRcdHdyaXR0ZW4gYnlcclxuXHRcdFx0XHRCYXJ0IFByZW5lZWwsXHJcblx0XHRcdFx0SGFucyBEb2JiZXJ0aW4sXHJcblx0XHRcdFx0QW50b29uIEJvc3NlbGFlcnNcclxuXHRcdFx0aW5cclxuXHRcdFx0XHQxOTk3LlxyXG5cclxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdMKnNSAgICAgRGVzY3JpcHRpb24gb2YgUklQRU1ELTE2MFxyXG5cclxuXHRcdFx0Li4uLi4uXHJcblxyXG5cdFx0XHQgSW4gb3JkZXIgdG8gZ3VhcmFudGVlIHRoYXQgdGhlIHRvdGFsIGlucHV0IHNpemUgaXMgYVxyXG5cdFx0XHRtdWx0aXBsZSBvZiA1MTIgYml0cywgdGhlIGlucHV0IGlzIHBhZGRlZCBpbiB0aGUgc2FtZVxyXG5cdFx0XHR3YXkgYXMgZm9yIGFsbCB0aGUgbWVtYmVycyBvZiB0aGUgTUQ0LWZhbWlseTogb25lXHJcblx0XHRcdGFwcGVuZHMgYSBzaW5nbGUgMSBmb2xsb3dlZCBieSBhIHN0cmluZyBvZiAwcyAodGhlXHJcblx0XHRcdG51bWJlciBvZiAwcyBsaWVzIGJldHdlZW4gMCBhbmQgNTExKTsgdGhlIGxhc3QgNjQgYml0c1xyXG5cdFx0XHRvZiB0aGUgZXh0ZW5kZWQgaW5wdXQgY29udGFpbiB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uXHJcblx0XHRcdG9mIHRoZSBpbnB1dCBzaXplIGluIGJpdHMsIGxlYXN0IHNpZ25pZmljYW50IGJ5dGUgZmlyc3QuXHJcblx0XHQqL1xyXG5cdFx0LypcclxuXHRcdFx0aHR0cHM6Ly90b29scy5pZXRmLm9yZy9yZmMvcmZjMTE4Ni50eHRcclxuXHJcblx0XHRcdFJGQyAxMTg2OiBNRDQgTWVzc2FnZSBEaWdlc3QgQWxnb3JpdGhtLlxyXG5cclxuXHRcdFx0d3JpdHRlbiBieVxyXG5cdFx0XHRcdFJvbmFsZCBMaW5uIFJpdmVzdFxyXG5cdFx0XHRpblxyXG5cdFx0XHRcdE9jdG9iZXIgMTk5MC5cclxuXHJcblx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHTCpzMgICAgIE1ENCBBbGdvcml0aG0gRGVzY3JpcHRpb25cclxuXHJcblx0XHRcdC4uLi4uLlxyXG5cclxuXHRcdFx0U3RlcCAxLiBBcHBlbmQgcGFkZGluZyBiaXRzXHJcblxyXG5cdFx0XHQgVGhlIG1lc3NhZ2UgaXMgXCJwYWRkZWRcIiAoZXh0ZW5kZWQpIHNvIHRoYXQgaXRzIGxlbmd0aFxyXG5cdFx0XHQoaW4gYml0cykgaXMgY29uZ3J1ZW50IHRvIDQ0OCwgbW9kdWxvIDUxMi4gVGhhdCBpcywgdGhlXHJcblx0XHRcdG1lc3NhZ2UgaXMgZXh0ZW5kZWQgc28gdGhhdCBpdCBpcyBqdXN0IDY0IGJpdHMgc2h5IG9mXHJcblx0XHRcdGJlaW5nIGEgbXVsdGlwbGUgb2YgNTEyIGJpdHMgbG9uZy4gUGFkZGluZyBpcyBhbHdheXNcclxuXHRcdFx0cGVyZm9ybWVkLCBldmVuIGlmIHRoZSBsZW5ndGggb2YgdGhlIG1lc3NhZ2UgaXMgYWxyZWFkeVxyXG5cdFx0XHRjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyIChpbiB3aGljaCBjYXNlIDUxMiBiaXRzIG9mXHJcblx0XHRcdHBhZGRpbmcgYXJlIGFkZGVkKS5cclxuXHJcblx0XHRcdCBQYWRkaW5nIGlzIHBlcmZvcm1lZCBhcyBmb2xsb3dzOiBhIHNpbmdsZSBcIjFcIiBiaXQgaXNcclxuXHRcdFx0YXBwZW5kZWQgdG8gdGhlIG1lc3NhZ2UsIGFuZCB0aGVuIGVub3VnaCB6ZXJvIGJpdHMgYXJlXHJcblx0XHRcdGFwcGVuZGVkIHNvIHRoYXQgdGhlIGxlbmd0aCBpbiBiaXRzIG9mIHRoZSBwYWRkZWRcclxuXHRcdFx0bWVzc2FnZSBiZWNvbWVzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuXHJcblxyXG5cdFx0XHRTdGVwIDIuIEFwcGVuZCBsZW5ndGhcclxuXHJcblx0XHRcdCBBIDY0LWJpdCByZXByZXNlbnRhdGlvbiBvZiBiICh0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlXHJcblx0XHRcdGJlZm9yZSB0aGUgcGFkZGluZyBiaXRzIHdlcmUgYWRkZWQpIGlzIGFwcGVuZGVkIHRvIHRoZVxyXG5cdFx0XHRyZXN1bHQgb2YgdGhlIHByZXZpb3VzIHN0ZXAuIEluIHRoZSB1bmxpa2VseSBldmVudCB0aGF0XHJcblx0XHRcdGIgaXMgZ3JlYXRlciB0aGFuIDJeNjQsIHRoZW4gb25seSB0aGUgbG93LW9yZGVyIDY0IGJpdHNcclxuXHRcdFx0b2YgYiBhcmUgdXNlZC4gKFRoZXNlIGJpdHMgYXJlIGFwcGVuZGVkIGFzIHR3byAzMi1iaXRcclxuXHRcdFx0d29yZHMgYW5kIGFwcGVuZGVkIGxvdy1vcmRlciB3b3JkIGZpcnN0IGluIGFjY29yZGFuY2VcclxuXHRcdFx0d2l0aCB0aGUgcHJldmlvdXMgY29udmVudGlvbnMuKVxyXG5cclxuXHRcdFx0IEF0IHRoaXMgcG9pbnQgdGhlIHJlc3VsdGluZyBtZXNzYWdlIChhZnRlciBwYWRkaW5nIHdpdGhcclxuXHRcdFx0Yml0cyBhbmQgd2l0aCBiKSBoYXMgYSBsZW5ndGggdGhhdCBpcyBhbiBleGFjdCBtdWx0aXBsZVxyXG5cdFx0XHRvZiA1MTIgYml0cy4gRXF1aXZhbGVudGx5LCB0aGlzIG1lc3NhZ2UgaGFzIGEgbGVuZ3RoXHJcblx0XHRcdHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGUgb2YgMTYgKDMyLWJpdCkgd29yZHMuIExldFxyXG5cdFx0XHRNWzAgLi4uIE4tMV0gZGVub3RlIHRoZSB3b3JkcyBvZiB0aGUgcmVzdWx0aW5nIG1lc3NhZ2UsXHJcblx0XHRcdHdoZXJlIE4gaXMgYSBtdWx0aXBsZSBvZiAxNi5cclxuXHRcdCovXHJcblx0XHQvLyBodHRwczovL2NyeXB0by5zdGFja2V4Y2hhbmdlLmNvbS9hLzMyNDA3LzU0NTY4XHJcblx0XHQvKlxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMVxyXG5cdFx0XHRcdFswIGJpdDogbWVzc2FnZS5dXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDJcclxuXHRcdFx0XHRbNTEyLWJpdHM6IG1lc3NhZ2VdXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDNcclxuXHRcdFx0XHRbKDUxMiAtIDY0ID0gNDQ4KSBiaXRzOiBtZXNzYWdlLl1cclxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxyXG5cdFx0XHRcdFs1MTEgYml0czogMC5dXHJcblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXHJcblxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgNFxyXG5cdFx0XHRcdFsoNTEyIC0gNjUgPSA0NDcpIGJpdHM6IG1lc3NhZ2UuXVxyXG5cdFx0XHRcdFsxIGJpdDogMS5dXHJcblx0XHRcdFx0WzAgYml0OiAwLl1cclxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cclxuXHRcdCovXHJcblx0XHQvLyBUaGUgbnVtYmVyIG9mIHBhZGRpbmcgemVybyBiaXRzOlxyXG5cdFx0Ly8gICAgICA1MTEgLSBbeyhtZXNzYWdlIHNpemUgaW4gYml0cykgKyA2NH0gKG1vZCA1MTIpXVxyXG5cdFx0cmV0dXJuIDY0IC0gKChtZXNzYWdlX3NpemUgKyA4KSAmIDBiMDAxMTExMTEgLyogNjMgKi8pO1xyXG5cdH1cclxuXHRzdGF0aWMgcGFkKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxyXG5cdHtcclxuXHRcdGNvbnN0IG1lc3NhZ2Vfc2l6ZSA9IG1lc3NhZ2UuYnl0ZUxlbmd0aDtcclxuXHRcdGNvbnN0IG5fcGFkID0gUklQRU1EMTYwLmdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUpO1xyXG5cclxuXHRcdC8vICBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIGlzICgoMiAqKiA1MykgLSAxKSBhbmRcclxuXHRcdC8vIGJpdHdpc2Ugb3BlcmF0aW9uIGluIEphdmFzY3JpcHQgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzLlxyXG5cdFx0Y29uc3QgZGl2bW9kID0gKGRpdmlkZW5kLCBkaXZpc29yKSA9PiBbXHJcblx0XHRcdE1hdGguZmxvb3IoZGl2aWRlbmQgLyBkaXZpc29yKSxcclxuXHRcdFx0ZGl2aWRlbmQgJSBkaXZpc29yXHJcblx0XHRdO1xyXG5cdFx0LypcclxuVG8gc2hpZnRcclxuXHJcbiAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IG9cclxuICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8wMDBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5NZXRob2QgIzFcclxuXHJcbiAgICAwMDAwMDAwMCAwMDA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cclxuICAgWzAwMDAwMDAwIDAwMEFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBXSAoPEE+IGNhcHR1cmVkKVxyXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUEwMDBdICg8QT4gc2hpZnRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gY2FwdHVyZWQpIFtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQl1cclxuICAgICAgICAgICAgICAgICAgICAgKDxCPiBzaGlmdGVkKSBbQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXSAoPEE+ICYgPEJfMj4gbWVyZ2VkKVxyXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUFCQkJdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxyXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXHJcblxyXG5cdFx0Y29uc3QgdWludDMyX21heF9wbHVzXzEgPSAweDEwMDAwMDAwMDsgLy8gKDIgKiogMzIpXHJcblx0XHRjb25zdCBbXHJcblx0XHRcdG1zZ19ieXRlX3NpemVfbW9zdCwgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDIxKSAtIDFdLlxyXG5cdFx0XHRtc2dfYnl0ZV9zaXplX2xlYXN0IC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAzMikgLSAxXS5cclxuXHRcdF0gPSBkaXZtb2QobWVzc2FnZV9zaXplLCB1aW50MzJfbWF4X3BsdXNfMSk7XHJcblx0XHRjb25zdCBbXHJcblx0XHRcdGNhcnJ5LCAvLyBWYWx1ZSByYW5nZSBbMCwgN10uXHJcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gOF0uXHJcblx0XHRdID0gZGl2bW9kKG1lc3NhZ2VfYnl0ZV9zaXplX2xlYXN0ICogOCwgdWludDMyX21heF9wbHVzXzEpO1xyXG5cdFx0Y29uc3QgbWVzc2FnZV9iaXRfc2l6ZV9tb3N0ID0gbWVzc2FnZV9ieXRlX3NpemVfbW9zdCAqIDhcclxuXHRcdFx0KyBjYXJyeTsgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDI0KSAtIDFdLlxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbk1ldGhvZCAjMlxyXG4gICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XHJcbiAgICAgIFswMDAwMCAwMDBBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQSAgQUFBXSAoPEE+IGNhcHR1cmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBjYXB0dXJlZCkgWzAwMEJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gc2hpZnRlZCkgW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxyXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUFdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxyXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXHJcblxyXG5cdFx0Ki9cclxuXHRcdGNvbnN0IFtcclxuXHRcdFx0bXNnX2JpdF9zaXplX21vc3QsXHJcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdFxyXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIDUzNjg3MDkxMiAvKiAoMiAqKiAyOSkgKi8pXHJcblx0XHRcdC5tYXAoKHgsIGluZGV4KSA9PiAoaW5kZXggPyAoeCAqIDgpIDogeCkpO1xyXG5cclxuXHRcdC8vIGBBcnJheUJ1ZmZlci50cmFuc2ZlcigpYCBpcyBub3Qgc3VwcG9ydGVkLlxyXG5cdFx0Y29uc3QgcGFkZGVkID0gbmV3IFVpbnQ4QXJyYXkobWVzc2FnZV9zaXplICsgbl9wYWQgKyA4KTtcclxuXHRcdHBhZGRlZC5zZXQobmV3IFVpbnQ4QXJyYXkobWVzc2FnZSksIDApO1xyXG5cdFx0Y29uc3QgZGF0YV92aWV3ID0gbmV3IERhdGFWaWV3KHBhZGRlZC5idWZmZXIpO1xyXG5cdFx0ZGF0YV92aWV3LnNldFVpbnQ4KG1lc3NhZ2Vfc2l6ZSwgMGIxMDAwMDAwMCk7XHJcblx0XHRkYXRhX3ZpZXcuc2V0VWludDMyKFxyXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCxcclxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0LFxyXG5cdFx0XHR0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuXHRcdCk7XHJcblx0XHRkYXRhX3ZpZXcuc2V0VWludDMyKFxyXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCArIDQsXHJcblx0XHRcdG1zZ19iaXRfc2l6ZV9tb3N0LFxyXG5cdFx0XHR0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHBhZGRlZC5idWZmZXI7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZihqLCB4LCB5LCB6KVxyXG5cdHtcclxuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxyXG5cdFx0eyAvLyBFeGNsdXNpdmUtT1JcclxuXHRcdFx0cmV0dXJuIHggXiB5IF4gejtcclxuXHRcdH1cclxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcclxuXHRcdHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXHJcblx0XHRcdHJldHVybiAoeCAmIHkpIHwgKH54ICYgeik7XHJcblx0XHR9XHJcblx0XHRpZigzMiA8PSBqICYmIGogPD0gNDcpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAoeCB8IH55KSBeIHo7XHJcblx0XHR9XHJcblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXHJcblx0XHR7IC8vIE11bHRpcGxleGluZyAobXV4aW5nKVxyXG5cdFx0XHRyZXR1cm4gKHggJiB6KSB8ICh5ICYgfnopO1xyXG5cdFx0fVxyXG5cdFx0aWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4geCBeICh5IHwgfnopO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGF0aWMgSyhqKVxyXG5cdHtcclxuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gMHgwMDAwMDAwMDtcclxuXHRcdH1cclxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLlNRUlQyKVxyXG5cdFx0XHRyZXR1cm4gMHg1QTgyNzk5OTtcclxuXHRcdH1cclxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0NylcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoMykpXHJcblx0XHRcdHJldHVybiAweDZFRDlFQkExO1xyXG5cdFx0fVxyXG5cdFx0aWYoNDggPD0gaiAmJiBqIDw9IDYzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCg1KSlcclxuXHRcdFx0cmV0dXJuIDB4OEYxQkJDREM7XHJcblx0XHR9XHJcblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDcpKVxyXG5cdFx0XHRyZXR1cm4gMHhBOTUzRkQ0RTtcclxuXHRcdH1cclxuXHR9XHJcblx0c3RhdGljIEtQKGopIC8vIEsnXHJcblx0e1xyXG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDIpKVxyXG5cdFx0XHRyZXR1cm4gMHg1MEEyOEJFNjtcclxuXHRcdH1cclxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMykpXHJcblx0XHRcdHJldHVybiAweDVDNEREMTI0O1xyXG5cdFx0fVxyXG5cdFx0aWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg1KSlcclxuXHRcdFx0cmV0dXJuIDB4NkQ3MDNFRjM7XHJcblx0XHR9XHJcblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDcpKVxyXG5cdFx0XHRyZXR1cm4gMHg3QTZENzZFOTtcclxuXHRcdH1cclxuXHRcdGlmKDY0IDw9IGogJiYgaiA8PSA3OSlcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDB4MDAwMDAwMDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXRpYyBhZGRfbW9kdWxvMzIoLyogLi4uLi4uICovKVxyXG5cdHtcclxuXHRcdC8vIDEuICBNb2R1bG8gYWRkaXRpb24gKGFkZGl0aW9uIG1vZHVsbykgaXMgYXNzb2NpYXRpdmUuXHJcblx0XHQvLyAgICBodHRwczovL3Byb29md2lraS5vcmcvd2lraS9Nb2R1bG9fQWRkaXRpb25faXNfQXNzb2NpYXRpdmVcclxuIFx0XHQvLyAyLiAgQml0d2lzZSBvcGVyYXRpb24gaW4gSmF2YXNjcmlwdFxyXG5cdFx0Ly8gICAgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzXHJcblx0XHQvLyAgICBhbmQgcmVzdWx0cyBpbiBhIDMyLWJpdHMgdmFsdWUuXHJcblx0XHRyZXR1cm4gQXJyYXlcclxuXHRcdFx0LmZyb20oYXJndW1lbnRzKVxyXG5cdFx0XHQucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKSB8IDA7XHJcblx0fVxyXG5cdHN0YXRpYyByb2wzMih2YWx1ZSwgY291bnQpXHJcblx0eyAvLyBDeWNsaWMgbGVmdCBzaGlmdCAocm90YXRlKSBvbiAzMi1iaXRzIHZhbHVlLlxyXG5cdFx0cmV0dXJuICh2YWx1ZSA8PCBjb3VudCkgfCAodmFsdWUgPj4+ICgzMiAtIGNvdW50KSk7XHJcblx0fVxyXG5cdHN0YXRpYyBoYXNoKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxyXG5cdHtcclxuXHRcdC8vLy8vLy8vLy8gICAgICAgUGFkZGluZyAgICAgICAvLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gVGhlIHBhZGRlZCBtZXNzYWdlLlxyXG5cdFx0Y29uc3QgcGFkZGVkID0gUklQRU1EMTYwLnBhZChtZXNzYWdlKTtcclxuXHJcblx0XHQvLy8vLy8vLy8vICAgICBDb21wcmVzc2lvbiAgICAgLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIE1lc3NhZ2Ugd29yZCBzZWxlY3RvcnMuXHJcblx0XHRjb25zdCByID0gW1xyXG5cdFx0XHQwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxyXG5cdFx0XHQ3LCA0LCAxMywgMSwgMTAsIDYsIDE1LCAzLCAxMiwgMCwgOSwgNSwgMiwgMTQsIDExLCA4LFxyXG5cdFx0XHQzLCAxMCwgMTQsIDQsIDksIDE1LCA4LCAxLCAyLCA3LCAwLCA2LCAxMywgMTEsIDUsIDEyLFxyXG5cdFx0XHQxLCA5LCAxMSwgMTAsIDAsIDgsIDEyLCA0LCAxMywgMywgNywgMTUsIDE0LCA1LCA2LCAyLFxyXG5cdFx0XHQ0LCAwLCA1LCA5LCA3LCAxMiwgMiwgMTAsIDE0LCAxLCAzLCA4LCAxMSwgNiwgMTUsIDEzXHJcblx0XHRdO1xyXG5cdFx0Y29uc3QgclAgPSBbIC8vIHInXHJcblx0XHRcdDUsIDE0LCA3LCAwLCA5LCAyLCAxMSwgNCwgMTMsIDYsIDE1LCA4LCAxLCAxMCwgMywgMTIsXHJcblx0XHRcdDYsIDExLCAzLCA3LCAwLCAxMywgNSwgMTAsIDE0LCAxNSwgOCwgMTIsIDQsIDksIDEsIDIsXHJcblx0XHRcdDE1LCA1LCAxLCAzLCA3LCAxNCwgNiwgOSwgMTEsIDgsIDEyLCAyLCAxMCwgMCwgNCwgMTMsXHJcblx0XHRcdDgsIDYsIDQsIDEsIDMsIDExLCAxNSwgMCwgNSwgMTIsIDIsIDEzLCA5LCA3LCAxMCwgMTQsXHJcblx0XHRcdDEyLCAxNSwgMTAsIDQsIDEsIDUsIDgsIDcsIDYsIDIsIDEzLCAxNCwgMCwgMywgOSwgMTFcclxuXHRcdF07XHJcblxyXG5cdFx0Ly8gQW1vdW50cyBmb3IgJ3JvdGF0ZSBsZWZ0JyBvcGVyYXRpb24uXHJcblx0XHRjb25zdCBzID0gW1xyXG5cdFx0XHQxMSwgMTQsIDE1LCAxMiwgNSwgOCwgNywgOSwgMTEsIDEzLCAxNCwgMTUsIDYsIDcsIDksIDgsXHJcblx0XHRcdDcsIDYsIDgsIDEzLCAxMSwgOSwgNywgMTUsIDcsIDEyLCAxNSwgOSwgMTEsIDcsIDEzLCAxMixcclxuXHRcdFx0MTEsIDEzLCA2LCA3LCAxNCwgOSwgMTMsIDE1LCAxNCwgOCwgMTMsIDYsIDUsIDEyLCA3LCA1LFxyXG5cdFx0XHQxMSwgMTIsIDE0LCAxNSwgMTQsIDE1LCA5LCA4LCA5LCAxNCwgNSwgNiwgOCwgNiwgNSwgMTIsXHJcblx0XHRcdDksIDE1LCA1LCAxMSwgNiwgOCwgMTMsIDEyLCA1LCAxMiwgMTMsIDE0LCAxMSwgOCwgNSwgNlxyXG5cdFx0XTtcclxuXHRcdGNvbnN0IHNQID0gWyAvLyBzJ1xyXG5cdFx0XHQ4LCA5LCA5LCAxMSwgMTMsIDE1LCAxNSwgNSwgNywgNywgOCwgMTEsIDE0LCAxNCwgMTIsIDYsXHJcblx0XHRcdDksIDEzLCAxNSwgNywgMTIsIDgsIDksIDExLCA3LCA3LCAxMiwgNywgNiwgMTUsIDEzLCAxMSxcclxuXHRcdFx0OSwgNywgMTUsIDExLCA4LCA2LCA2LCAxNCwgMTIsIDEzLCA1LCAxNCwgMTMsIDEzLCA3LCA1LFxyXG5cdFx0XHQxNSwgNSwgOCwgMTEsIDE0LCAxNCwgNiwgMTQsIDYsIDksIDEyLCA5LCAxMiwgNSwgMTUsIDgsXHJcblx0XHRcdDgsIDUsIDEyLCA5LCAxMiwgNSwgMTQsIDYsIDgsIDEzLCA2LCA1LCAxNSwgMTMsIDExLCAxMVxyXG5cdFx0XTtcclxuXHJcblx0XHQvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgd29yZC5cclxuXHRcdGNvbnN0IHdvcmRfc2l6ZSA9IDQ7XHJcblxyXG5cdFx0Ly8gVGhlIHNpemUsIGluIGJ5dGVzLCBvZiBhIDE2LXdvcmRzIGJsb2NrLlxyXG5cdFx0Y29uc3QgYmxvY2tfc2l6ZSA9IDY0O1xyXG5cclxuXHRcdC8vIFRoZSBudW1iZXIgb2YgdGhlIDE2LXdvcmRzIGJsb2Nrcy5cclxuXHRcdGNvbnN0IHQgPSBwYWRkZWQuYnl0ZUxlbmd0aCAvIGJsb2NrX3NpemU7XHJcblxyXG5cdFx0Ly8gIFRoZSBtZXNzYWdlIGFmdGVyIHBhZGRpbmcgY29uc2lzdHMgb2YgdCAxNi13b3JkIGJsb2NrcyB0aGF0XHJcblx0XHQvLyBhcmUgZGVub3RlZCB3aXRoIFhfaVtqXSwgd2l0aCAw4omkaeKJpCh0IOKIkiAxKSBhbmQgMOKJpGriiaQxNS5cclxuXHRcdGNvbnN0IFggPSAobmV3IEFycmF5KHQpKVxyXG5cdFx0XHQuZmlsbCh1bmRlZmluZWQpXHJcblx0XHRcdC5tYXAoKF8sIGkpID0+IG5ldyBQcm94eShcclxuXHRcdFx0XHRuZXcgRGF0YVZpZXcoXHJcblx0XHRcdFx0XHRwYWRkZWQsIGkgKiBibG9ja19zaXplLCBibG9ja19zaXplXHJcblx0XHRcdFx0KSwge1xyXG5cdFx0XHRcdGdldChibG9ja192aWV3LCBqKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJldHVybiBibG9ja192aWV3LmdldFVpbnQzMihcclxuXHRcdFx0XHRcdFx0aiAqIHdvcmRfc2l6ZSxcclxuXHRcdFx0XHRcdFx0dHJ1ZSAvLyBMaXR0bGUtZW5kaWFuXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkpO1xyXG5cclxuXHRcdC8vICBUaGUgcmVzdWx0IG9mIFJJUEVNRC0xNjAgaXMgY29udGFpbmVkIGluIGZpdmUgMzItYml0IHdvcmRzLFxyXG5cdFx0Ly8gd2hpY2ggZm9ybSB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGFsZ29yaXRobS4gVGhlIGZpbmFsXHJcblx0XHQvLyBjb250ZW50IG9mIHRoZXNlIGZpdmUgMzItYml0IHdvcmRzIGlzIGNvbnZlcnRlZCB0byBhIDE2MC1iaXRcclxuXHRcdC8vIHN0cmluZywgYWdhaW4gdXNpbmcgdGhlIGxpdHRsZS1lbmRpYW4gY29udmVudGlvbi5cclxuXHRcdGxldCBoID0gW1xyXG5cdFx0XHQweDY3NDUyMzAxLCAvLyBoXzBcclxuXHRcdFx0MHhFRkNEQUI4OSwgLy8gaF8xXHJcblx0XHRcdDB4OThCQURDRkUsIC8vIGhfMlxyXG5cdFx0XHQweDEwMzI1NDc2LCAvLyBoXzNcclxuXHRcdFx0MHhDM0QyRTFGMCAgLy8gaF80XHJcblx0XHRdO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0OyArK2kpXHJcblx0XHR7XHJcblx0XHRcdGxldCBBID0gaFswXSwgQiA9IGhbMV0sIEMgPSBoWzJdLCBEID0gaFszXSwgRSA9IGhbNF07XHJcblx0XHRcdGxldCBBUCA9IEEsIEJQID0gQiwgQ1AgPSBDLCBEUCA9IEQsIEVQID0gRTtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDgwOyArK2opXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBMZWZ0IHJvdW5kc1xyXG5cdFx0XHRcdGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFJJUEVNRDE2MC5yb2wzMihcclxuXHRcdFx0XHRcdFx0UklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFx0XHRBLFxyXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5mKGosIEIsIEMsIEQpLFxyXG5cdFx0XHRcdFx0XHRcdFhbaV1bcltqXV0sXHJcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLksoailcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0c1tqXVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdEVcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdEEgPSBFO1xyXG5cdFx0XHRcdEUgPSBEO1xyXG5cdFx0XHRcdEQgPSBSSVBFTUQxNjAucm9sMzIoQywgMTApO1xyXG5cdFx0XHRcdEMgPSBCO1xyXG5cdFx0XHRcdEIgPSBUO1xyXG5cclxuXHRcdFx0XHQvLyBSaWdodCByb3VuZHNcclxuXHRcdFx0XHRUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFJJUEVNRDE2MC5yb2wzMihcclxuXHRcdFx0XHRcdFx0UklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFx0XHRBUCxcclxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuZihcclxuXHRcdFx0XHRcdFx0XHRcdDc5IC0gaixcclxuXHRcdFx0XHRcdFx0XHRcdEJQLFxyXG5cdFx0XHRcdFx0XHRcdFx0Q1AsXHJcblx0XHRcdFx0XHRcdFx0XHREUFxyXG5cdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFx0WFtpXVtyUFtqXV0sXHJcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLktQKGopXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHNQW2pdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0RVBcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdEFQID0gRVA7XHJcblx0XHRcdFx0RVAgPSBEUDtcclxuXHRcdFx0XHREUCA9IFJJUEVNRDE2MC5yb2wzMihDUCwgMTApO1xyXG5cdFx0XHRcdENQID0gQlA7XHJcblx0XHRcdFx0QlAgPSBUO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzFdLCBDLCBEUCk7XHJcblx0XHRcdGhbMV0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMl0sIEQsIEVQKTtcclxuXHRcdFx0aFsyXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFszXSwgRSwgQVApO1xyXG5cdFx0XHRoWzNdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzRdLCBBLCBCUCk7XHJcblx0XHRcdGhbNF0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMF0sIEIsIENQKTtcclxuXHRcdFx0aFswXSA9IFQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gIFRoZSBmaW5hbCBvdXRwdXQgc3RyaW5nIHRoZW4gY29uc2lzdHMgb2YgdGhlIGNvbmNhdGVuYXRhdGlvblxyXG5cdFx0Ly8gb2YgaF8wLCBoXzEsIGhfMiwgaF8zLCBhbmQgaF80IGFmdGVyIGNvbnZlcnRpbmcgZWFjaCBoX2kgdG8gYVxyXG5cdFx0Ly8gNC1ieXRlIHN0cmluZyB1c2luZyB0aGUgbGl0dGxlLWVuZGlhbiBjb252ZW50aW9uLlxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKDIwKTtcclxuXHRcdGNvbnN0IGRhdGFfdmlldyA9IG5ldyBEYXRhVmlldyhyZXN1bHQpO1xyXG5cdFx0aC5mb3JFYWNoKChoX2ksIGkpID0+IGRhdGFfdmlldy5zZXRVaW50MzIoaSAqIDQsIGhfaSwgdHJ1ZSkpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFJJUEVNRDE2MFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=