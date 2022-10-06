import Item from "./Item";

const ItemList = ({ productList }) => {
    return (
        <section className="col-sm-12 row pt-lg-4 pt-md-3">
            {productList.map((product) => {
                return <Item producto={product} key={product.id} />;
            })}
        </section>
    );
};
export default ItemList;
