import Item from "./Item";

const ItemList = ({ productList }) => {
    return (
        <section className="col-sm-12 row">
            {productList.map((product) => {
                return <Item producto={product} key={product.id} />;
            })}
        </section>
    );
};
export default ItemList;
