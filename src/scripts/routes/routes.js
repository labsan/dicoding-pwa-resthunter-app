import Beranda from '../views/pages/beranda';
import Favorit from '../views/pages/favorit';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': Beranda, // default page
  '/now-playing': Beranda,
  '/upcoming': Favorit,
  '/detail/:id': Detail,
};
 
export default routes;