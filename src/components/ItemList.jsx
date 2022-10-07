import Item from "./Item";

const ItemList = ({ productList, className, categoriaId }) => {
    return (
        <section className={className}>
            <h1 className="text-center text-uppercase pb-lg-3"><u><b>{categoriaId}</b></u></h1>
            {productList.map((product) => {
                return <Item producto={product} key={product.id} />;
            })}
        </section>
    );
};
export default ItemList;
