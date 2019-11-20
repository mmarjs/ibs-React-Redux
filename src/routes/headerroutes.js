import addQuote from '../pages/admin/quotes';
import addClient from '../pages/admin/addClient';
import companysetup from '../pages/admin/Companysetup';

var HeaderRoutes = [
    { path: '/admin/addQuote', name: 'Quote', component: addQuote },
    { path: '/admin/addClient/:roleKey', name: 'Client', component: addClient },
    { path: '/admin/companysetup', name: 'Company Setup', component: companysetup },
];
export default HeaderRoutes; 