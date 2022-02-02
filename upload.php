

<?php
include('simple_html_dom.php');

if(isset($_POST['submit'])){
    $file = $_FILES['html'];
    $fileContent = file_get_contents($_FILES['html']['tmp_name']);

//$url ="C:\\xampp\htdocs\\fiverrProject\\test.html";
//$html = file_get_html($fileContent);
$html = str_get_html($fileContent);
$names = array();
$place =array();
$work = array();
$phone = array();
$fr= array();
foreach($html->find('.tuple') as $div){
  foreach($div->find('.userName') as $a){
  $names[]= $a->innertext;}

  foreach($div->find('.loc') as $a){
    $place[]= $a->innertext;}

    foreach($div->find('.currInfo') as $a){
      foreach($a->find('.employer') as $c){
        $work[] = strip_tags(htmlspecialchars_decode($c->innertext));


      }
    }
        foreach($div->find('.tel') as $a){
          foreach($a->find('span') as $c){
            $phone[] = $c->innertext;
         }}
          }

for($i=0;$i<count($names);$i++){
 $fr[]=array("name"=>$names[$i],"location"=>$place[$i],"work at"=>$work[$i],"phone "=>$phone[$i]);
  
}




$filename = 'userData.csv';       
header("Content-type: text/csv");       
header("Content-Disposition: attachment; filename=$filename");       
$output = fopen("php://output", "w");       
$header = array_keys($fr[0]);       
fputcsv($output, $header);       
foreach($fr as $row)       
{  
     fputcsv($output, $row);  
}       
fclose($output); 
}
?>