import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

export default function Navbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    return (
        <nav className="navbar navbar-light bg-light px-3">
            <span className="navbar-brand mb-0 h1">Mini Shop</span>

            <button
                className="btn btn-outline-primary"
                onClick={() => setBudgetMode(!budgetMode)}
            >
                {budgetMode ? "Disattiva Budget" : "Attiva Budget"}
            </button>
        </nav>
    );
}