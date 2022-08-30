import Item from "./Item";

const ItemList = ({ listProducts }) => {
    return (
        <section className="col-sm-12 row">
            {listProducts.map((product) => {
                return <Item producto={product} key={product.id} />;
            })}
        </section>
    );
};
export default ItemList;
