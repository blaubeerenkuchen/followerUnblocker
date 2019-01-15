//1. 트위터에 로그인한 후 자신의 팔로워 페이지에 접속합니다.
//2. 모든 팔로워가 나타날 때까지 페이지를 스크롤 다운 하세요.
//3. 크롬 개발자모드(F12)를 열어 콘솔창에 코드를 붙여 넣고 엔터를 눌러 실행합니다.
//4. 팔로우/팔로잉 버튼 옆에 새로 생성된 U 버튼을 클릭하여 팔로워와의 관계를 끊습니다. 
//4-1. 언블락한 팔로워는 파란색 U버튼으로 확인할 수 있으며, 실수로 언블락했을시 팔로잉 버튼을 눌러 다시 팔로우 할 수 있습니다.
//5. 모든 작업을 완료 한 뒤 새로고침하면 팔로워가 정리된 것을 확인할 수 있습니다.

$('.user-actions.btn-group').append("<span class='user-action-unblock-buttons'> <button class='EdgeButton EdgeButton--secondary EdgeButton--small button-text follow-text unblock-button'>U</button> </span>");
$('.unblock-button').click(function(){
	$(this).css({'background-color':'#1DA1F2', 'color':'white'});
	$(this).closest('div').find('.dropdown').addClass('open').find('li.block-text.not-blocked button').click();
	$('.block-button').click(); //블락
	$('div.dropdown').removeClass('open'); //드랍다운 닫기
	$('button.modal-btn.modal-close.js-close').click(); //리스트모달 닫기
	$('button.modal-btn.modal-close.js-close').click(); //트윗모달 닫기
	$(this).closest('div').find('span.user-actions-follow-button.js-follow-btn.follow-button').find('button.unblock-text').click(); //블락해제
});
