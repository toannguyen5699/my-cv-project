import octoLogo from './../images/Octocat.png'
import garminLogo from './../images/garmin.png'
import chromeLogo from './../images/chrome-store.png'


export const projectsState = {
	"tabName": 'Projects',
	"projects": [
		{
			"projectTitle": 'App chat',
			"projectLabels": [
				'NodeJs', 'Mongoodb'
			],
			"projectDesc": [
				'Học và làm theo để cải thiện kĩ năng code NodeJs và hiểu về flowwork làm web',
				'Đăng nhập bằng tài khoản đăng kí ( tài khoản local)',
				'Thay đổi thông tin cá nhân bao gồm cả avatar, info ',
				'Thêm bạn bè và list friends',
				'Chat trực tuyến'
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'NodeJs'
				},
				{
					"category": 'Frontend',
					"text": 'Ejs template'
				},
				{
					"category": 'Database',
					"text": 'MySQL'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/toannguyen5699/appchat',
					"cls": 'pr-octo-logo'
				}
			],
		},
		{
			"projectTitle": 'Online CV',
			"projectLabels": [
				'ReactJS',
				'React Bootstrap',
			],
			"projectDesc": [
				'Trang Hard Code để giới thiệu bản thân',
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/toannguyen5699/my-cv',
					"cls": 'pr-octo-logo'
				},
			],
		},
		{
			"projectTitle": 'Quản lý tài sản',
			"projectLabels": [
				'NodeJs',
				'MySQL',
				'Angular'
			],
			"projectDesc": [
				'Ứng dụng làm btl môn phát triển ứng dụng Web',
				'Đăng nhập JWT, query MySQL',
				 'Thay Avatar thông tin người dùng',
				 'Phân quyền người dùng quản lý và nhân viên',
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'NodeJs'
				},
				{
					"category": 'FrontEnd',
					"text": 'Angular 7'
				},
				{
					"category": 'DataBase',
					"text": 'MySql'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/chris220688/garmin-myBus-app',
					"cls": 'pr-octo-logo'
				}
			],
		},
	]
};
