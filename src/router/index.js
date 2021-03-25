import { lazy } from 'react'

const MusicList = lazy(() => import('@/pages/musicList'))
const Home = lazy(() => import('@/pages/home/homeHooks'))
const Recommend = lazy(() => import('@/pages/recommend'))
const PlaySong = lazy(() => import('@/pages/playSong'))
const personal = lazy(() => import('@/pages/personal'))

const router = [
	{
		path: "/",
		exact: true,
		component: Home
	}, {
		path: "/musicList/:id",
		exact: true,
		component: MusicList
	}, {
		path: "/recommend",
		exact: true,
		component: Recommend
	}, {
		path: "/playSong/:id",
		exact: true,
		component: PlaySong
	},  {
		path: "/personal",
		exact: true,
		component: personal
	},
]
export default router;