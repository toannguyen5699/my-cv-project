import logoUET from './../images/Logo_UET.jpg'
import thesLogo from './../images/CTB.jpg'


export const educationState = {
	"tabName": 'Education',
	"education": [
		{
			"eduTitle": 'Đại Học Công Nghệ - ĐHQGHN',
			"eduLogo": {
				"src": logoUET,
				"cls": 'ed-company-logo ed-rgu-logo'
			},
			"eduLocation": '141 Xuân Thủy, Cầu Giấy, Hà Nội',
			"eduPeriod": '09/2017 – 06/2021',
			"eduModules": [
				'Object Oriented Programming (Java)',
				'Relational Database Systems (SQL)',
				'Intranet Systems (HTML, JavaScript)',
				'Software Project Engineering',
			],
			"eduThesis": {
			},
		},
		{
			"eduTitle": 'THPT Chuyên Thái Bình',
			"eduLogo": {
				"src": thesLogo,
				"cls": 'ed-company-logo ed-thes-logo'
			},
			"eduLocation": 'Thành Phố Thái Bình',
			"eduPeriod": '09/2014 – 06/2017',
			"eduModules": [
				'Code C++',
			],
		},
	]
};
