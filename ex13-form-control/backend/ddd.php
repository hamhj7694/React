<?php
    header('Content-Type:text/plain; charset=utf-8');

    // 글씨데이터 받기
    $nickname= $_POST['nickname'];
    echo "닉네임: $nickname \n\n";

    // 전송된 파일들의 실제 데이터는 임시 저장소에 있고, 여기는 파일정보만 온다
    $files=$_FILES['img'];

    // 여러개의 파일을 보냈을 수 있으니.. 파일의 개수 얻어오기
    $file_num = count( $files['name'] );
    echo "전송된 파일의 개수 : $file_num \n";
    echo "================================\n";

    // 파일 개수만큼 반복하며 파일 정보 응답.. 임시저장소 파일을 서버에 저장
    for($i=0; $i<$file_num; $i++){
        $filename= $files['name'][$i];
        $filesize= $files['size'][$i];
        $tempname= $files['tmp_name'][$i];

        move_uploaded_file($tempname, "./uploaded/". $filename);
        echo "$filename \n";
        echo "$filesize \n";
        echo "============\n";
    }
?>