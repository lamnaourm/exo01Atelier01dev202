import Buttons from "./Buttons";
import Pht from "./Pht";
import Res from "./Res";
import TVA from "./Tva";

function CalculTTC() {
    return <fieldset>
        <legend>Calcul Prix TTC</legend>
        <Pht />
        <TVA />
        <Buttons />
        <Res />
    </fieldset>;
}

export default CalculTTC;