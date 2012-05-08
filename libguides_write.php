<?
$data = trim($_POST['data']);
$data = $data . "\n";
if (!$DataFile = fopen("libguides_comments.csv", "a")) {echo "Failure: cannot open file"; die;};
if (!fwrite($DataFile, $data)) {echo "Failure: cannot write to file"; die;};
fclose($DataFile);
echo "file write successful";

?>