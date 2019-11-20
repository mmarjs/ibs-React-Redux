import Fulllayout from '../layouts/fulllayout.js';
import Blanklayout from '../layouts/blanklayout.js';
var indexRoutes = [
    { path: "/authentication", name: "Athentication", component: Blanklayout },
    { path: '/', name: 'Dashboard', component: Fulllayout }

];

export default indexRoutes;
