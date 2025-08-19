import { images } from '@/assets/images'

export interface ourTeamProps {
	name: string
	image: string
	role: string
}

export const ourTeamData: ourTeamProps[] = [
	{
		name: 'HABIMANA Claude',
		image: images.pp1,
		role: 'The founder and initiator of Isonga program',
	},
	{
		name: 'UWIMANA Clement',
		image: images.pp4,
		role: 'The sports directors.',
	},
	{
		name: 'Kaneza divine',
		image: images.pp2,
		role: 'The events manager',
	},
	{
		name: 'MUGABO Kevin',
		image: images.pp5,
		role: 'The head staff',
	},
	{
		name: 'KEZA Peace',
		image: images.pp3,
		role: 'The bootcamps coordinator',
	},
	{
		name: 'RUZINDANA Pierre',
		image: images.staf3,
		role: 'The scouting incharge',
	},
]


