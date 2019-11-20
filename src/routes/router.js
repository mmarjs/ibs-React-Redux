import Classic from '../views/dashboards/classic';
import Starterkit from '../views/sample-pages/starter-kit';
import Searchresult from '../views/sample-pages/search-result';
import CompanyClients from '../pages/admin/companyClients';
import IndividualClients from '../pages/admin/individualClients';
import Benefits from '../pages/admin/benefits';
import RiskCategories from '../pages/admin/riskCategories';
import ProductTypes from '../pages/admin/productTypes';
import RiskClasses from '../pages/admin/riskClasses';
import CoverTypes from '../pages/admin/coverTypes';
import UnderWriters from '../pages/admin/underWriters';
import Users from '../pages/admin/users';
import Promotions from '../pages/admin/promotions';

var ThemeRoutes = [
	{
		navlabel: true,
		name: "Personal",
		icon: "mdi mdi-dots-horizontal",
	},
	{
		path: '/dashboards/classic',
		name: 'Dashboard',
		icon: 'mdi mdi-view-dashboard',
		component: Classic
	},
	{
		collapse: true,
		name: 'Clients',
		state: 'clientApps',
		path: '/clients',
		icon: 'mdi mdi-account-network',
		extra: "",
		child: [
			{
				path: '/clients/iClients',
				name: 'Individual',
				icon: 'mdi mdi-account-circle',
				component: IndividualClients
			},
			{
				path: '/clients/cClients',
				name: 'Company',
				icon: 'mdi mdi-contacts',
				component: CompanyClients
			}
		]
	},

	{
		path: '/dashboards/quotes',
		name: 'Quotes',
		icon: 'mdi mdi-pencil-box-outline',
		component: Classic
	},
	{
		path: '/dashboards/policies',
		name: 'Policies',
		icon: 'mdi mdi-file-document',
		component: Classic
	},
	{
		path: '/dashboards/claims',
		name: 'Claims',
		icon: 'mdi mdi-loop',
		component: Classic
	},
	{
		collapse: true,
		name: 'Invoicing',
		state: 'Apps',
		path: '/sample-pages',
		icon: 'mdi mdi-wallet',
		extra: "",
		child: [
			{
				path: '/sample-pages/profile',
				name: 'Individual',
				icon: 'mdi mdi-account-circle',
				component: Starterkit
			},
			{
				path: '/sample-pages/search-result',
				name: 'Corporate',
				icon: 'mdi mdi-contacts',
				component: Searchresult
			}
		]
	},
	{
		path: '/dashboards/reports',
		name: 'Reports',
		icon: 'mdi mdi-chart-bar',
		component: Classic
	},
	{
		collapse: true,
		name: 'Master',
		state: 'Mater',
		path: '/master',
		icon: 'mdi mdi-settings',
		extra: "",
		child: [
			{
				path: '/master/productTypes',
				name: 'Product Types',
				icon: 'mdi mdi-folder-plus',
				component: ProductTypes
			},
			{
				path: '/master/riskCategories',
				name: 'Risk Categories',
				icon: 'mdi mdi-shape-square-plus',
				component: RiskCategories
			},
			{
				path: '/master/riskClasses',
				name: 'Risk Class',
				icon: 'mdi mdi-meteor',
				component: RiskClasses
			},
			{
				path: '/master/underwriters',
				name: 'Underwriters',
				icon: 'mdi mdi-umbrella-outline',
				component: UnderWriters
			},
			{
				path: '/master/users',
				name: 'Users',
				icon: 'mdi mdi-odnoklassniki',
				component: Users
			},
			{
				path: '/master/coverTypes',
				name: 'Cover Types',
				icon: 'mdi mdi-wrap',
				component: CoverTypes
			},
			{
				path: '/master/benefits',
				name: 'Benefits',
				icon: 'mdi mdi-thumb-up-outline',
				component: Benefits
			},
			{
				path: '/master/search-result1',
				name: 'Rates',
				icon: 'mdi mdi-cash-usd',
				component: Searchresult
			},
			{
				path: '/master/promotions',
				name: 'Promotions',
				icon: 'mdi mdi-all-inclusive',
				component: Promotions
			},
			{
				path: '/master/search-result3',
				name: 'Binders',
				icon: 'mdi mdi-autorenew',
				component: Searchresult
			}
		]
	},
	{ path: '/', pathTo: '/dashboards/classic', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
