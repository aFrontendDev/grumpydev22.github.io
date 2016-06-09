// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(con) {
  'use strict';
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) con[prop] = con[prop] || empty;
  while (method = methods.pop()) con[method] = con[method] || dummy;
})(this.console = this.console || {}); // Using `this` for web workers.

/*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2013 "Cowboy" Ben Alman; Licensed MIT */
(function(n){var u=n({});n.subscribe=function(){u.on.apply(u,arguments)},n.unsubscribe=function(){u.off.apply(u,arguments)},n.publish=function(){u.trigger.apply(u,arguments)}})(jQuery);
/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);
(function($) {
	jQuery.fn.quickOuterWidth = function(includeMargin) {
		var elem = this.get(0),
			width = elem.offsetWidth;
		if (includeMargin && window.getComputedStyle) {
			var computedStyle = window.getComputedStyle(elem, null);
			width = width + (parseInt(computedStyle.getPropertyValue('margin-left'), 10) || 0) + (parseInt(computedStyle.getPropertyValue('margin-right'), 10) || 0);
		} else if (includeMargin) {
			width = width + (parseInt(elem.currentStyle["marginLeft"]) || 0) + (parseInt(elem.currentStyle["marginRight"]) || 0);
		}
		return width;
	};
}(jQuery));

(function($) {
	jQuery.fn.removeStyle = function(properties) {
		return this.each( function() {
			if(properties) {
				// turn properties into array
				var propertiesArray = properties.split(',');
				// remove each property
				for (var i = 0; i < propertiesArray.length; i++) {
					this.removeProperty( properties[i] );
				}
			}else{
				this.removeAttribute('style');
			}
		});
	};
}(jQuery));

(function($) {
	jQuery.fn.reverse = [].reverse;
}(jQuery));

/**
 * @file Events
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	/**
	 * Publish events using Pub/Sub
	 * @namespace events
	 * @see {@link https://github.com/cowboy/jquery-tiny-pubsub}
	 */
	$.extend(bb, {
		/**
		 * Publish event when the page is ready.
		 * @function pageReady
		 */
		pageReady: function() {
			var self = this;

			$.publish('pageReady_prioritize', self);
			$.publish('pageReady', self);

			self.pageLoaded();
		},
		/**
		 * Publish event when the page has loaded.
		 * @function pageLoaded
		 */
		pageLoaded: function() {
			var self = this;

			self.settings.$window.on('load', function() {

				$.publish('pageLoaded', self);
			});
		},
		/**
		 * Publish event when an AJAX request has finished.
		 * @function ajaxLoaded
		 */
		ajaxLoaded: function() {
			var self = this;

			$.publish('ajaxLoaded', self);
		}
	});
}(jQuery));

/**
 * @file Language
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		language: {}
	});
}(jQuery));

/**
 * @file Settings
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		settings: {
			// cache some common variables
			$window: $(window),
			$html: $('html'),
			$body: $('body'),
			$htmlbody: $('html,body'),
			$page: $('#page'),
			$header: $('#header'),
			$main: $('#main'),
			$footer: $('#footer'),
			// stored URL params (empty to begin with)
			urlParams: {},
			// class to use on
			processedClass: 'processed',
			browserPrefix: null,
			transitionEnd: null,
			animationEnd: null,
			transitionAnimationEnd: null,
			// store processing of last component globally
			processinglastBlock: false,
			// breakpoint variables (should match variables.less)
			breakPointA: 320,
			breakPointB: 480,
			breakPointC: 600,
			breakPointD: 768,
			breakPointE: 1000,
			breakPointF: 1200,
			breakPointG: 1360,
			// store scripts directory
			scriptsDirectory: '',
			// is this a RTL site?
			rtl: false,
			// Perform Modernizr tests once and store the result
			supports: {
				// history: Modernizr.history // for example
			}
		}
	});
}(jQuery));

/**
 * @file Last Block
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		/**
		 * Last block in a row.
		 * @namespace lastBlock
		 */
		lastBlock: {
			// jQuery DOM objs
			$blockContainers: null,
			$currentBlockContainer: null,
			// CSS selectors
			blockSelector: '.block',
			containerSelector: '.region-inner',
			lastClass: 'block-last',
			ieLastClass: 'block-last-clear',
			// Configuration
			processing: false,
			roundingOffset: 3,
			/**
			 * Initialises last block module, caches jQuery DOM objects.
			 * @function init
			 * @memberOf lastBlock
			 */
			init: function() {
				var self = this;

				self.$blockContainers = $(self.containerSelector);

				if (!self.$blockContainers) {
					return false;
				}

				self.startProcessing(false);
			},
			/**
			 * Starts processing of blocks and logs start time.
			 * @function startProcessing
			 * @memberOf lastBlock
			 * @param {Boolean} [forceBuild] - whether or not to force a rebuild of blocks.
			 */
			startProcessing: function(forceBuild) {
				var self = this;

				console.time('Processing last blocks');

				self.processing = true;

				if (self.processing || self.$blockContainers.length < 1) {
					self.stopProcessing();
				}

				if (forceBuild) {
					$(self.blockSelector).removeClass(self.lastClass);

					if (bb.ltIE(8)) {
						$('.' + self.ieLastClass).remove();
					}
				}

				self.$blockContainers.each(function() {
					var $blockContainer = $(this),
						$blocks = $blockContainer.find(self.blockSelector),
						blocksLength = $blocks.length,
						blockContainerWidth = null;

					if (blocksLength < 1) {
						self.stopProcessing();
					}

					blockContainerWidth = ($blockContainer.width() - self.roundingOffset);

					self.processBlocks($blocks, blockContainerWidth);
				});
			},
			/**
			 * Stops processing of blocks and logs end time.
			 * @function stopProcessing
			 * @memberOf lastBlock
			 */
			stopProcessing: function() {
				var self = this;

				console.timeEnd('Processing last blocks');

				self.processing = false;

				return false;
			},
			/**
			 * Processes blocks, pushing the last block in a row into setLastBlock.
			 * @function processBlocks
			 * @memberOf lastBlock
			 * @param {Obj} $blocks - jQuery DOM objects of elements to calculate widths from.
			 * @param {Number} blockContainerWidth - max width of containing element to calculate widths from.
			 */
			processBlocks: function($blocks, blockContainerWidth) {
				var self = this;

				if (!$blocks || !blockContainerWidth) {
					self.stopProcessing();
				}

				$blocks.each(function() {
					var $block = $(this);

					if ($block.hasClass('pull-right') || $block.hasClass('block-alt')) {
						return true;
					}

					var outerWidth = parseInt($block.quickOuterWidth(true), 10);

					if (outerWidth >= blockContainerWidth) {
						self.setLastBlock($block);

						return true;
					}

					var positionLeft = parseInt($block.position().left, 10),
						positionRight = Math.round(blockContainerWidth - parseInt(positionLeft + outerWidth, 10));

					if (positionRight > self.roundingOffset) {
						return true;
					}

					self.setLastBlock($block);
				});

				self.stopProcessing();
			},
			/**
			 * Adds CSS class to last block, plus fallbackfor ltIE8.
			 * @function setLastBlock
			 * @memberOf lastBlock
			 * @param {Obj} $block - jQuery DOM object of element to add class to.
			 */
			setLastBlock: function($block) {
				var self = this;

				if (!$block) {
					return false;
				}

				$block.addClass(self.lastClass);

				if (bb.ltIE(8)) {
					$block.after('<div />', {
						'class': self.ieLastClass
					});
				}
			}
		}
	});
	// Subscribe to published events
	$.subscribe('pageReady ajaxLoaded', function() {
		bb.lastBlock.init();
	});
	$.subscribe('viewportResizeEnd', function() {
		bb.lastBlock.startProcessing(true);
	});
}(jQuery));

/**
 * @file Monitor Media Queries
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		/**
		 * Monitor media queries related methods.
		 * @namespace monitorMq
		 */
		monitorMq: {
			// jQuery DOM caching
			$detector: null,
			// CSS selectors
			detectorClass: 'monitor-mq',
			detectorId: 'monitor_mq',
			// Configuration
			detectorWidth: 0,
			currentBreakpoint: 0,
			previousBreakpoint: 0,
			/**
			 * Initialises monitor media queries module. Caches jQuery DOM objects, calls monitor() on pageReady.
			 * @function init
			 * @memberof monitorMq
			 */
			init: function() {
				var self = this;
				self.$detector = $('#' + self.detectorId);
				self.monitor();
			},
			/**
			 * Creates detector <div> if not present. Updates the comparison variable when a change in screen size occurs.
			 * @function monitor
			 * @memberof monitorMq
			 */
			monitor: function() {
				var self = this;
				if (!self.$detector.length) {
					self.$detector = $('<div />', {
						id: self.detectorId,
						class: self.detectorClass
					});
					bb.settings.$body.append(self.$detector);
				}
				self.detectorWidth = self.$detector.width();
				if (self.detectorWidth !== self.currentBreakpoint) {
					self.previousBreakpoint = self.currentBreakpoint;
					self.currentBreakpoint = self.detectorWidth;
				}
			}
		}
	});
	$.subscribe('pageReady', function() {
		bb.monitorMq.init();
	});
	$.subscribe('viewportResizeEnd', function() {
		bb.monitorMq.monitor();
	});
}(jQuery));

/**
 * @file No transitions
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		/**
		 * Toggle transitions related methods.
		 * @namespace toggleTransitions
		 */
		toggleTransitions: {
			// CSS selectors
			noTransitionsClass: 'no-transitions',
			/**
			 * Adds CSS class to <html>, disabling transitions.
			 * @function disableTransitions
			 * @memberof toggleTransitions
			 */
			disableTransitions: function() {
				var self = this;

				bb.settings.$html.addClass(self.noTransitionsClass);
			},
			/**
			 * Removes CSS class from <html>, re-enabling transitions.
			 * @function enableTransitions
			 * @memberof toggleTransitions
			 */
			enableTransitions: function() {
				var self = this;

				bb.settings.$html.removeClass(self.noTransitionsClass);
			}
		}
	});
	$.subscribe('pageReady', function() {
		bb.toggleTransitions.disableTransitions();
	});
	$.subscribe('pageLoaded', function() {
		bb.toggleTransitions.enableTransitions();
	});
	$.subscribe('viewportResizeStart', function() {
		bb.toggleTransitions.disableTransitions();
	});
	$.subscribe('viewportResizeEnd', function() {
		bb.toggleTransitions.enableTransitions();
	});
}(jQuery));

/**
 * @file Page classes
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		pageReadyClass: function() {
			var self = this;

			self.settings.$html.addClass('page-ready');
		},
		pageLoadedClass: function() {
			var self = this;

			self.settings.$html.addClass('page-loaded');
		}
	});
	$.subscribe('pageReady', function() {
		bb.pageReadyClass();
	});
	$.subscribe('pageLoaded', function() {
		bb.pageLoadedClass();
	});
}(jQuery));

/**
 * @file Tabs
 * @author {@link http://andyblackledge.co.uk Andy Blackledge}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		/**
		 * Tabs related methods.
		 * @namespace tabs
		 */
		tabs: {
			// jQuery DOM caching
			$tabs: null,
			$tabContainer: null,
			$panelContainer: null,
			// CSS selectors
			tabsSelector: '.tabs',
			tabContainerSelector: '.tab-container',
			tabSelector: '.tab',
			panelContainerSelector: '.tab-panel-container',
			panelSelector: '.tab-panel',
			// Classes
			activeClass: 'active',
			preSelectedClass: 'pre-selected',
			// Misc
			hashVal: '',
			/**
			 * Initialises tab module. Caches jQuery DOM objects.
			 * @function init
			 * @memberof tab
			 */
			init: function() {
				var self = this;

				// check for tabs on page, return out if not
				self.$tabs = $(self.tabsSelector);
				if (self.$tabs.length < 1) {
					console.log('No tabs on page');
					return;
				}

				// set data id attr on each panel to get original id
				self.setDataId();

				// Find the first tab for each tab container and record it for future use
				self.getFirstTab();

				// Bind events (click, hashchange etc)
				self.bindEvents();

				// check for hash value in url and if exists pass to tab open func
				self.hashVal = window.location.hash;
				if (self.hashVal && self.hashVal.length > 0) {
					self.tabOpen(self.hashVal);
				} else {
					console.log('No active panel');
					self.tabOpen();
				}
			},
			/**
			 * Bind event listeners
			 * @function bindEvents
			 * @memberof tab
			 */
			bindEvents: function() {
				var self = this;

				// click event handler for tab links ** essentially a hack to stop page jump
				// This is done by removing id from panel which will later be re-added (from the actions of our getFirstTab function)
				$(self.tabSelector).on('click.tabs', function() {
					var $this = $(this);
					var href = $this.attr('href');
					var $target = $(href);
					$target.removeAttr('id');
				});

				//when hash value changes update the tab to show correct panel
				window.addEventListener('hashchange', function() {
					self.hashVal = window.location.hash;

					if (self.hashVal && self.hashVal.length > 0) {
						self.tabUpdate(self.hashVal);
					}
				});
			},
			/**
			 * We will later need the id's of the tabs in data attributes
			 * Could do on click event but I'd like it to work on manual update of the url and don't want to
			 * duplicate code in both click event and hashchange event
			 * @function setDataId
			 * @memberof tab
			 */
			setDataId: function() {
				var self = this;

				$(self.panelSelector).each(function() {
					var $this = $(this);
					var id = '#' + $this.attr('id');
					$this.attr('data-id', id);
				});
			},
			/**
			 * This will find the first tab in each of the tab containers
			 * purpose of this is so that if there isn't a tab id in the url we can open each
			 * of the first panels. Also if there is more than one tab container we will still need this
			 * even if there is an id in the url, as we will only have one id in the url, the others will
			 * still need to show the first tab
			 * @function getFirstTab
			 * @memberof tab
			 */
			getFirstTab: function() {
				var self = this;

				self.$tabs.each(function() {
					var $this = $(this);
					var $tab = $this.find(self.tabSelector);
					var $firstTab = $tab.first();
					var href = $firstTab.attr('href');

					$this.data('first-tab', href);
				});
			},
			/**
			 * Open the first or selected tab on initialisation
			 * @function tabOpen
			 * @memberof tab
			 */
			tabOpen: function(hashVal) {
				var self = this;

				// If we have a hashval (which will have been passed from the url) then we want to
				// mark the container so that we don't set that container to open the first panel
				if (hashVal) {
					var $activePanel = $(hashVal);
					var $activeTab = $('a[href="' + hashVal + '"]');
					var $tabParent = $activePanel.closest(self.tabsSelector);
					$tabParent.addClass(self.preSelectedClass);
				}

				// go through each tab container
				self.$tabs.each(function() {
					// initially we want to find the tab and tab panel
					// then remove any active class to essentially 'reset'the tabs
					var $this = $(this);
					var $panels = $this.find(self.panelSelector);
					var $tab = $this.find(self.tabSelector);
					$panels.removeClass(self.activeClass);
					$panels.attr('aria-hidden', 'true');
					$tab.removeClass(self.activeClass);

					// check to see if the tab container has the 'preselected' class that we previously added
					// if we have that class then we want to open the panel matching the href from the url
					// else we just open the first tab (we got this from getFirstTab() func)
					if ($this.hasClass(self.preSelectedClass)) {
						$activePanel.addClass(self.activeClass);
						$activeTab.addClass(self.activeClass);
						$this.removeClass(self.preSelectedClass);
					} else {
						var dataFirstTab = $this.data('first-tab');
						var $firstPanel = $this.find(dataFirstTab);
						var $firstTab = $this.find('a[href="' + dataFirstTab + '"]');

						$firstPanel.addClass(self.activeClass);
						$firstPanel.attr('aria-hidden', 'false');
						$firstTab.addClass(self.activeClass);
					}
				});
			},
			/**
			 * This will do the work of opening tabs when we click on the tab anchors
			 * @function tabUpdate
			 * @memberof tab
			 */
			tabUpdate: function(hashVal) {
				var self = this;

				if (!hashVal) {
					console.log('tab update - no hash val');
					return;
				}

				// re-add the ID from the data id attr
				var $activePanel = $('*[data-id="' + hashVal + '"]');
				$activePanel.attr('id', hashVal);

				// go up from the tab to the container to then find the correct panel
				var $activeTab = $('a[href="' + hashVal + '"]');
				var $tabParent = $activePanel.closest(self.tabsSelector);
				var $panels = $tabParent.find(self.panelSelector);
				var $tab = $tabParent.find(self.tabSelector);

				// remove active class from panel and show the one selected by user
				$panels.removeClass(self.activeClass);
				$panels.attr('aria-hidden', 'true');
				$tab.removeClass(self.activeClass);
				$activePanel.addClass(self.activeClass);
				$activePanel.attr('aria-hidden', 'false');
				$activeTab.addClass(self.activeClass);
			}
		}
	});
	$.subscribe('pageReady', function() {
		bb.tabs.init();
	});
}(jQuery));

/**
 * @file Utilities
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		/**
		 * Returns a query string parameter’s value if specified, object of query string parameters if not.
		 * @function getUrlParams
		 * @memberof utilities
		 * @param {String} [parameter] Parameter passed in to retrieve from query string
		 * @returns {Obj} [params] | {String} [param]
		 */
		getUrlParams: function(parameter) {
			var queryString = window.location.search;

			if (queryString !== undefined) {
				queryString = window.location.search.replace('?', '');

				var params = {},
					queryStringArray = queryString.split('&');

				for (var index in queryStringArray) {
					var query = queryStringArray[index].split('=');

					params[decodeURIComponent(query[0])] = decodeURIComponent(query[1]);
				}

				if (parameter) {
					return params[parameter];
				} else {
					return params;
				}
			}
		},
		setUrlParams: function() {
			var self = this;
			self.settings.urlParams = self.getUrlParams(window.location.search);
		},
		/*
		 * Safely outputs message to browser console. Use for debugging/logging.
		 * @function log
		 * @param {String|Object} content - Content to log to browser console.
		 * @param {String} styles - CSS style to apply to text logged to browser console.
		 * @example
		 * bb.log('Hello, World!', 'background:#F00;color:#FF0;');
		 */
		log: function(content, style) {
			if (typeof(console) !== 'undefined') {
				if (style) {
					console.log('%c' + content, style);
				} else {
					console.log(content);
				}
			}
		},
		htmlEncode: function(value) {
			if (value) {
				return $('<div />').text(value).html();
			} else {
				return '';
			}
		},
		htmlDecode: function(value) {
			if (value) {
				return $('<div />').html(value).text();
			} else {
				return '';
			}
		},
		// get IE version from classname (acceptable values: 10,9,8 or 7)
		ltIE: function(version) {
			var self = this;
			if (self.settings.$html.hasClass('lt-ie' + version)) {
				return true;
			} else {
				return false;
			}
		},
		browserPrefix: function() {
			if (window.getComputedStyle) {
				var self = this,
					styles = window.getComputedStyle(window.document.documentElement, ''),
					prefix = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];
				self.settings.browserPrefix = '-' + prefix + '-';
			}
		},
		transitionAnimationEndEvent: function() {
			var self = this,
				transition, transitions, animation, animations, element = window.document.createElement('transitionAnimationElement');
			transitions = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'MSTransition': 'msTransitionEnd',
				'OTransition': 'oTransitionEnd',
				'transition': 'transitionend'
			};
			animations = {
				'WebkitAnimation': 'webkitAnimationEnd',
				'MozAnimation': 'animationend',
				'MSAnimation': 'msAnimationEnd',
				'OAnimation': 'oAnimationEnd',
				'animation': 'animationend'
			};
			for (transition in transitions) {
				if (element.style[transition] !== undefined) {
					self.settings.transitionEnd = transitions[transition];
				}
			}
			// is it null?
			if (self.settings.transitionEnd === null) {
				self.settings.transitionEnd = 'noTransitionEnd';
			}
			for (animation in animations) {
				if (element.style[animation] !== undefined) {
					self.settings.animationEnd = animations[animation];
				}
			}
			// is it null?
			if (self.settings.animationEnd === null) {
				self.settings.animationEnd = 'noAnimationEnd';
			}
			self.settings.transitionAnimationEnd = (self.settings.transitionEnd + ' ' + self.settings.animationEnd).toString();
		},
		textDirection: function() {
			var self = this,
				direction = self.settings.$html.attr('dir');
			if (direction === 'rtl') {
				self.settings.rtl = true;
			}
		}
	});
	$.subscribe('pageReady', function() {
		bb.textDirection();
		bb.browserPrefix();
		bb.transitionAnimationEndEvent();
		bb.setUrlParams();
	});
}(jQuery));

/**
 * @file Viewport Resize
 * @author {@link http://building-blocks.com Building Blocks}
 */
var bb = bb ? bb : {};
(function($) {
	$.extend(bb, {
		/**
		 * Reusable site resize function.
		 * @namespace viewportResize
		 */
		viewportResize: {
			// Configuration
			resizeTimeout: null,
			timeoutDuration: 200,
			/**
			 * Initialises viewport resize module, binds event to window resize.
			 * @function init
			 * @memberOf viewportResize
			 */
			init: function() {
				var self = this;

				bb.settings.$window.on('resize.viewportResize', function() {
					if (self.resizeTimeout) {
						clearTimeout(self.resizeTimeout);
					}

					$.publish('viewportResizeStart');

					self.resizeTimeout = setTimeout(function() {
						$.publish('viewportResizeEnd_prioritize');
						$.publish('viewportResizeEnd');
					}, self.timeoutDuration);
				});
			}
		}
	});
	$.subscribe('pageReady', function() {
		bb.viewportResize.init();
	});
}(jQuery));

(function() {
	var init = (bb !== undefined) ? bb.pageReady() : null;
}());
