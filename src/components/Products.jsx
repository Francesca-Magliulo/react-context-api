import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

export default function Products() {
    const { budgetMode } = useContext(BudgetContext);

    const products = [
        { id: 1, name: "Maglietta", price: 25 },
        { id: 2, name: "Scarpe", price: 80 },
        { id: 3, name: "Cappello", price: 15 },
        { id: 4, name: "Felpa", price: 50 },
    ];

    const filteredProducts =
        budgetMode ? products.filter(p => p.price <= 30) : products;

    return (
        <div className="container mt-4">
            <div className="row">
                {filteredProducts.map(p => (
                    <div key={p.id} className="col-md-3 mb-3">
                        <div className="card p-3 text-center">
                            <h5>{p.name}</h5>
                            <p className="text-muted">{p.price}€</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

