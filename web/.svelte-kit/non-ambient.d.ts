
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/(auth)" | "/" | "/admin" | "/admin/challenges" | "/admin/challenges/details" | "/admin/challenges/list" | "/admin/challenges/model" | "/admin/challenges/schema-form" | "/admin/profile" | "/admin/profile/[id]" | "/admin/settings" | "/admin/submissions" | "/admin/submissions/table" | "/admin/teams" | "/challenges" | "/challenges/details" | "/challenges/list" | "/challenges/model" | "/(auth)/external-auth" | "/(auth)/external-auth/authorize" | "/integrations" | "/integrations/ctftime" | "/integrations/ctftime/callback" | "/(auth)/login" | "/profile" | "/profile/analytics" | "/profile/settings" | "/profile/solves" | "/profile/[id]" | "/(auth)/recover" | "/(auth)/register" | "/scores" | "/scores/graph" | "/scores/leaderboard" | "/scores/model" | "/scores/screenshot" | "/scores/toolbar" | "/(auth)/verify";
		RouteParams(): {
			"/admin/profile/[id]": { id: string };
			"/profile/[id]": { id: string }
		};
		LayoutParams(): {
			"/(auth)": Record<string, never>;
			"/": { id?: string | undefined };
			"/admin": { id?: string | undefined };
			"/admin/challenges": Record<string, never>;
			"/admin/challenges/details": Record<string, never>;
			"/admin/challenges/list": Record<string, never>;
			"/admin/challenges/model": Record<string, never>;
			"/admin/challenges/schema-form": Record<string, never>;
			"/admin/profile": { id?: string | undefined };
			"/admin/profile/[id]": { id: string };
			"/admin/settings": Record<string, never>;
			"/admin/submissions": Record<string, never>;
			"/admin/submissions/table": Record<string, never>;
			"/admin/teams": Record<string, never>;
			"/challenges": Record<string, never>;
			"/challenges/details": Record<string, never>;
			"/challenges/list": Record<string, never>;
			"/challenges/model": Record<string, never>;
			"/(auth)/external-auth": Record<string, never>;
			"/(auth)/external-auth/authorize": Record<string, never>;
			"/integrations": Record<string, never>;
			"/integrations/ctftime": Record<string, never>;
			"/integrations/ctftime/callback": Record<string, never>;
			"/(auth)/login": Record<string, never>;
			"/profile": { id?: string | undefined };
			"/profile/analytics": Record<string, never>;
			"/profile/settings": Record<string, never>;
			"/profile/solves": Record<string, never>;
			"/profile/[id]": { id: string };
			"/(auth)/recover": Record<string, never>;
			"/(auth)/register": Record<string, never>;
			"/scores": Record<string, never>;
			"/scores/graph": Record<string, never>;
			"/scores/leaderboard": Record<string, never>;
			"/scores/model": Record<string, never>;
			"/scores/screenshot": Record<string, never>;
			"/scores/toolbar": Record<string, never>;
			"/(auth)/verify": Record<string, never>
		};
		Pathname(): "/" | "/admin/challenges" | `/admin/profile/${string}` & {} | "/admin/settings" | "/admin/submissions" | "/admin/teams" | "/challenges" | "/external-auth/authorize" | "/integrations/ctftime/callback" | "/login" | "/profile" | `/profile/${string}` & {} | "/recover" | "/register" | "/scores" | "/verify";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.ico" | "/web-app-manifest-192x192.png" | "/flags/1f1f0-1f1fe.svg" | "/flags/1f1eb-1f1f7.svg" | "/flags/1f1f0-1f1f3.svg" | "/flags/1f1fb-1f1ec.svg" | "/flags/1f1f3-1f1ea.svg" | "/flags/1f1ed-1f1f0.svg" | "/flags/1f1e8-1f1f1.svg" | "/flags/1f1f8-1f1ee.svg" | "/flags/1f1f8-1f1ed.svg" | "/flags/1f1e6-1f1ea.svg" | "/flags/1f1e8-1f1ff.svg" | "/flags/1f1e8-1f1f0.svg" | "/flags/1f1f3-1f1e6.svg" | "/flags/1f1ea-1f1ed.svg" | "/flags/1f1f0-1f1f2.svg" | "/flags/1f1fa-1f1ff.svg" | "/flags/1f1fa-1f1f2.svg" | "/flags/1f1f0-1f1ff.svg" | "/flags/1f1eb-1f1f4.svg" | "/flags/1f1fb-1f1e6.svg" | "/flags/1f1f3-1f1eb.svg" | "/flags/1f1e8-1f1f2.svg" | "/flags/1f1ed-1f1f3.svg" | "/flags/1f1e8-1f1fd.svg" | "/flags/1f1f8-1f1ef.svg" | "/flags/1f1e6-1f1ec.svg" | "/flags/1f1e6-1f1f9.svg" | "/flags/1f1e6-1f1f8.svg" | "/flags/1f1e6-1f1eb.svg" | "/flags/1f1f5-1f1ed.svg" | "/flags/1f1e8-1f1fe.svg" | "/flags/1f1e8-1f1f3.svg" | "/flags/1f1ed-1f1f2.svg" | "/flags/1f1f3-1f1ec.svg" | "/flags/1f1fb-1f1ea.svg" | "/flags/1f1fa-1f1fe.svg" | "/flags/1f1fa-1f1f3.svg" | "/flags/1f1f0-1f1f5.svg" | "/flags/1f1f0-1f1fc.svg" | "/flags/1f1fb-1f1ee.svg" | "/flags/1f1ea-1f1ec.svg" | "/flags/1f1ea-1f1f9.svg" | "/flags/1f1e8-1f1fa.svg" | "/flags/1f1e8-1f1f7.svg" | "/flags/1f1f5-1f1e6.svg" | "/flags/1f1f8-1f1ec.svg" | "/flags/1f1f8-1f1f9.svg" | "/flags/1f1f8-1f1f8.svg" | "/flags/1f1f5-1f1ea.svg" | "/flags/1f1ed-1f1f7.svg" | "/flags/1f1e8-1f1f6.svg" | "/flags/1f1ed-1f1fa.svg" | "/flags/1f1ea-1f1f8.svg" | "/flags/1f1eb-1f1f0.svg" | "/flags/1f1eb-1f1f2.svg" | "/flags/1f1ea-1f1e6.svg" | "/flags/1f1e8-1f1fb.svg" | "/flags/1f1e8-1f1e8.svg" | "/flags/1f1e8-1f1f4.svg" | "/flags/1f1f5-1f1ec.svg" | "/flags/1f1f5-1f1f9.svg" | "/flags/1f1f8-1f1e6.svg" | "/flags/1f1e6-1f1ee.svg" | "/flags/1f1f8-1f1ea.svg" | "/flags/1f1f8-1f1e7.svg" | "/flags/1f1f5-1f1f8.svg" | "/flags/1f1f5-1f1eb.svg" | "/flags/1f1e8-1f1f5.svg" | "/flags/1f1e8-1f1e9.svg" | "/flags/1f1e8-1f1fc.svg" | "/flags/1f1f3-1f1ee.svg" | "/flags/1f1ea-1f1ea.svg" | "/flags/1f1f0-1f1f7.svg" | "/flags/1f1f7-1f1f4.svg" | "/flags/1f1e7-1f1e6.svg" | "/flags/1f1ec-1f1f7.svg" | "/flags/1f1ec-1f1fa.svg" | "/flags/1f1f1-1f1fe.svg" | "/flags/1f1f2-1f1ea.svg" | "/flags/1f1f2-1f1e6.svg" | "/flags/1f1fc-1f1eb.svg" | "/flags/1f1fc-1f1f8.svg" | "/flags/1f1ec-1f1f6.svg" | "/flags/1f1f9-1f1ed.svg" | "/flags/1f1e7-1f1ea.svg" | "/flags/1f1e7-1f1e7.svg" | "/flags/1f1ee-1f1f1.svg" | "/flags/1f1e9-1f1f0.svg" | "/flags/1f1f7-1f1fc.svg" | "/flags/1f1e9-1f1ff.svg" | "/flags/1f1f7-1f1fa.svg" | "/flags/1f1e9-1f1f2.svg" | "/flags/1f1ee-1f1f3.svg" | "/flags/1f1ff-1f1fc.svg" | "/flags/1f1ef-1f1ea.svg" | "/flags/1f1f9-1f1ef.svg" | "/flags/1f1e7-1f1f9.svg" | "/flags/1f1e7-1f1ec.svg" | "/flags/1f1f1-1f1f0.svg" | "/flags/1f1f2-1f1f8.svg" | "/flags/1f1f2-1f1eb.svg" | "/flags/1f1f2-1f1ec.svg" | "/flags/1f1f2-1f1f9.svg" | "/flags/1f1ec-1f1fc.svg" | "/flags/1f1ec-1f1e9.svg" | "/flags/1f1ec-1f1f5.svg" | "/flags/1f1e7-1f1eb.svg" | "/flags/1f1e7-1f1f8.svg" | "/flags/1f1ee-1f1f2.svg" | "/flags/1f1ee-1f1f6.svg" | "/flags/1f1f9-1f1f9.svg" | "/flags/1f1f9-1f1ec.svg" | "/flags/1f1e7-1f1ef.svg" | "/flags/1f1ec-1f1f1.svg" | "/flags/1f1f1-1f1fb.svg" | "/flags/1f1f1-1f1e8.svg" | "/flags/1f1f9-1f1eb.svg" | "/flags/1f1fe-1f1f9.svg" | "/flags/1f1ee-1f1f7.svg" | "/flags/1f1e9-1f1f4.svg" | "/flags/1f1ee-1f1e9.svg" | "/flags/1f1e7-1f1ee.svg" | "/flags/1f1fe-1f1ea.svg" | "/flags/1f1f9-1f1e6.svg" | "/flags/1f1ec-1f1f2.svg" | "/flags/1f1f2-1f1ed.svg" | "/flags/1f1f1-1f1f7.svg" | "/flags/1f1ec-1f1f3.svg" | "/flags/1f1f1-1f1fa.svg" | "/flags/1f1ec-1f1fe.svg" | "/flags/1f1e7-1f1ed.svg" | "/flags/1f1ff-1f1f2.svg" | "/flags/1f1ee-1f1e8.svg" | "/flags/1f1ee-1f1f4.svg" | "/flags/1f1ee-1f1f9.svg" | "/flags/1f1e7-1f1f3.svg" | "/flags/1f1e7-1f1fe.svg" | "/flags/1f1f1-1f1e6.svg" | "/flags/1f1ec-1f1ed.svg" | "/flags/1f1f2-1f1f2.svg" | "/flags/1f1f2-1f1fd.svg" | "/flags/1f1f2-1f1fe.svg" | "/flags/1f1f2-1f1f3.svg" | "/flags/1f1ec-1f1ee.svg" | "/flags/1f1f1-1f1e7.svg" | "/flags/1f1e7-1f1f2.svg" | "/flags/1f1f9-1f1f7.svg" | "/flags/1f1e9-1f1ec.svg" | "/flags/1f1ee-1f1f8.svg" | "/flags/1f1e9-1f1ea.svg" | "/flags/1f1ef-1f1f2.svg" | "/flags/1f1e7-1f1ff.svg" | "/flags/1f1f9-1f1fc.svg" | "/flags/1f1f9-1f1e9.svg" | "/flags/1f1f1-1f1f9.svg" | "/flags/1f1f2-1f1f1.svg" | "/flags/1f1f2-1f1ff.svg" | "/flags/1f1f2-1f1f0.svg" | "/flags/1f1f1-1f1f8.svg" | "/flags/1f1f9-1f1e8.svg" | "/flags/1f1f9-1f1fb.svg" | "/flags/1f1f9-1f1f4.svg" | "/flags/1f1e7-1f1f1.svg" | "/flags/1f1ee-1f1ea.svg" | "/flags/1f1f7-1f1ea.svg" | "/flags/1f1e7-1f1fc.svg" | "/flags/1f1e7-1f1e9.svg" | "/flags/1f1f9-1f1ff.svg" | "/flags/1f1f9-1f1f0.svg" | "/flags/1f1ec-1f1eb.svg" | "/flags/1f1ec-1f1f8.svg" | "/flags/1f1f2-1f1fb.svg" | "/flags/1f1f2-1f1e8.svg" | "/flags/1f1f2-1f1f4.svg" | "/flags/1f1f2-1f1f5.svg" | "/flags/1f1f2-1f1e9.svg" | "/flags/1f1f2-1f1fc.svg" | "/flags/1f1ec-1f1f9.svg" | "/flags/1f1ec-1f1ec.svg" | "/flags/1f1f9-1f1f1.svg" | "/flags/1f1e7-1f1f4.svg" | "/flags/1f1e7-1f1fb.svg" | "/flags/1f1f4-1f1f2.svg" | "/flags/1f1f7-1f1f8.svg" | "/flags/1f1ff-1f1e6.svg" | "/flags/1f1ef-1f1f4.svg" | "/flags/1f1f9-1f1f3.svg" | "/flags/1f1e7-1f1f6.svg" | "/flags/1f1f1-1f1ee.svg" | "/flags/1f1ec-1f1ea.svg" | "/flags/1f1ec-1f1e7.svg" | "/flags/1f1f2-1f1fa.svg" | "/flags/1f1f2-1f1f7.svg" | "/flags/1f1f2-1f1f6.svg" | "/flags/1f1ec-1f1e6.svg" | "/flags/1f1e7-1f1f7.svg" | "/flags/1f1f9-1f1f2.svg" | "/flags/1f1ef-1f1f5.svg" | "/flags/1f1e9-1f1ef.svg" | "/flags/1f1fa-1f1f8.svg" | "/flags/1f1e8-1f1eb.svg" | "/flags/1f1ed-1f1f9.svg" | "/flags/1f1f5-1f1fc.svg" | "/flags/1f1e6-1f1f2.svg" | "/flags/1f1f8-1f1f7.svg" | "/flags/1f1e6-1f1fd.svg" | "/flags/1f1e8-1f1ec.svg" | "/flags/1f1ea-1f1f7.svg" | "/flags/1f1ea-1f1fa.svg" | "/flags/1f1eb-1f1ee.svg" | "/flags/1f1f0-1f1ea.svg" | "/flags/1f1fa-1f1ec.svg" | "/flags/1f1f0-1f1ec.svg" | "/flags/1f1fb-1f1f3.svg" | "/flags/1f1f3-1f1f1.svg" | "/flags/1f1e6-1f1ff.svg" | "/flags/1f1f8-1f1e9.svg" | "/flags/1f1f8-1f1f4.svg" | "/flags/1f1e6-1f1f1.svg" | "/flags/1f1f8-1f1fb.svg" | "/flags/1f1f8-1f1e8.svg" | "/flags/1f1f5-1f1f7.svg" | "/flags/1f1e8-1f1e6.svg" | "/flags/1f1f3-1f1ff.svg" | "/flags/1f1ea-1f1e8.svg" | "/flags/1f1eb-1f1ef.svg" | "/flags/1f1fa-1f1e6.svg" | "/flags/1f1f3-1f1f4.svg" | "/flags/1f1f3-1f1e8.svg" | "/flags/1f1e8-1f1ed.svg" | "/flags/1f1f5-1f1fe.svg" | "/flags/1f1f5-1f1f3.svg" | "/flags/1f1f8-1f1f0.svg" | "/flags/1f1e6-1f1e9.svg" | "/flags/1f1e6-1f1fc.svg" | "/flags/1f1f8-1f1ff.svg" | "/flags/1f1e6-1f1e8.svg" | "/flags/1f1fd-1f1f0.svg" | "/flags/1f1f8-1f1f1.svg" | "/flags/1f1e6-1f1f4.svg" | "/flags/1f1f5-1f1f2.svg" | "/flags/1f1f6-1f1e6.svg" | "/flags/1f1e8-1f1ee.svg" | "/flags/1f1f3-1f1f5.svg" | "/flags/1f1fb-1f1fa.svg" | "/flags/1f1f0-1f1ee.svg" | "/flags/1f1f3-1f1f7.svg" | "/flags/1f1f3-1f1fa.svg" | "/flags/1f1f5-1f1f0.svg" | "/flags/1f1f8-1f1f3.svg" | "/flags/1f1e6-1f1f6.svg" | "/flags/1f1f8-1f1fe.svg" | "/flags/1f1e6-1f1fa.svg" | "/flags/1f1f8-1f1fd.svg" | "/flags/1f1e6-1f1f7.svg" | "/flags/1f1f8-1f1f2.svg" | "/flags/1f1f5-1f1f1.svg" | "/flags/1f1fb-1f1e8.svg" | "/flags/1f1f0-1f1ed.svg" | "/apple-touch-icon.png" | "/theme.js" | "/web-app-manifest-512x512.png" | "/site.webmanifest" | "/robots.txt" | "/fonts/Outfit-VariableFont_wght.woff2" | "/fonts/GeistMonoVF.woff2" | string & {};
	}
}