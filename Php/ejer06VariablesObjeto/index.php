<?php

$objRenglonAutomobiles = new stdclass;
$objRenglonAutomobiles->codAuto = "aut1";
$objRenglonAutomobiles->Descripcion = "Audi A4 2018";
$objRenglonAutomobiles->PrecioAuto = 400000;
$objRenglonAutomobiles->Cantidad = 4;

echo "<h1>Variables Objeto </h1><br><br>";
echo " <h1 style='color:blue'> \$objRenglonAutomobiles </h1>";
echo "<h3>codAuto: " . $objRenglonAutomobiles->codAuto . "<br>";
echo "Descripcion: " . $objRenglonAutomobiles->Descripcion . "<br>";
echo "PrecioAuto: $" . $objRenglonAutomobiles->PrecioAuto . "<br>";
echo "Cantidad: " . $objRenglonAutomobiles->Cantidad . "<br> </h3>";
echo "<h1 style='color:blue'>\$objRenglonAutomobiles : ". gettype($objRenglonAutomobiles)." </h1>";



$RenglonesAutomobiles = [];
array_push($RenglonesAutomobiles,$objRenglonAutomobiles);

echo "<h1 style='color:blue'>\$RenglonesAutomobiles : <br>";


foreach($RenglonesAutomobiles as $objRenglonAutomobiles){
    echo "<h4> Cod Auto : " . $objRenglonAutomobiles->codAuto . "</h4>";
    echo "<h4> Descripcion: " . $objRenglonAutomobiles->Descripcion . "</h4>";
    echo "<h4> Precio Auto : " . $objRenglonAutomobiles->PrecioAuto . "</h4>";
    echo "<h4> Cantidad : " . $objRenglonAutomobiles->Cantidad . "</h4>";
};
echo "<h3>Cantidad de renglones en el arreglo :" . count($RenglonesAutomobiles) . "</h3>";

$objRenglonesAutomobiles = new stdClass();

$objRenglonesAutomobiles->RenglonesAutomobiles=$RenglonesAutomobiles;
$objRenglonesAutomobiles->cantidadRenglones= count($RenglonesAutomobiles);

echo "<br><br><h3>Cantidad de renglones en el objRenglonesAutomobiles: " . $objRenglonesAutomobiles->cantidadRenglones . "</h3><br><br>";

$jsonRenglonesAutomobiles = json_encode($objRenglonesAutomobiles);
echo "<h3>" .$jsonRenglonesAutomobiles . "</h3>";

?>