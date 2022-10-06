import Item from "./Item";

const ItemList = ({ productList, className }) => {
    return (
        <section className={className}>
            {productList.map((product) => {
                return <Item producto={product} key={product.id} />;
            })}
        </section>
    );
};
export default ItemList;
