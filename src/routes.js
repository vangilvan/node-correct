import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Lojas from './pages/Lojas';
import PageProdutos from './pages/Produtos';
import PageVendidos from './pages/Vendidos';
import PagePedidos from './pages/Pedidos';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={PageProdutos} />
            <Route exact path="/contatos" component={Contatos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/Pedidos" component={PagePedidos} />
            <Route exact path="/Vendidos" component={PageVendidos} />
            
        </Switch>
    );
}

export default Routes;