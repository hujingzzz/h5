(function(d, params, env, apiHost, hosts) {
	// set params
	(function(regex, qs, tokens) {
		regex = /[?&]?([^=]+)=([^&]*)/g;
		qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

		while ((tokens = regex.exec(qs))) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
	})();

	// if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
	// 	// famobi api already loaded
	// 	return false;
	// }
 
		env = params.fg_env || 'prod';
		apiHost = hosts[env];
		// load script
		(function (d, url, fgJS, firstJS) {
			fgJS = d.createElement('script');
			firstJS = d.getElementsByTagName('script')[0];
			fgJS.src = url+"?_location="+encodeURIComponent(d.location.href.split('#')[0]);
			firstJS.parentNode.insertBefore(fgJS, firstJS);
		})(d, './gameapi/script/59b916ca-a9a6-440f-b2ce-4469d9be957c/5a106c0b-28b5-48e2-ab01-ce747dda340f.js')
	
})(document, {}, '', '', {
	'dev': 'api.dev', 
	'staging': 'api.staging.gc',
	'staging.aws': 'api.staging.aws',
	'staging.gc': 'api.staging.gc',
	'prod': 'api'
});