// 1. Ʈ���Ϳ� �α����� �� �ڽ��� �ȷο� �������� �����մϴ�.
// 2. ��� �ȷο��� ��Ÿ�� ������ �������� ��ũ�� �ٿ� �ϼ���. 
// 3. ũ�� �����ڸ�带 ���� �Ʒ� �ڵ带 �ٿ� �ֽ��ϴ�. 
// 4. �ȷο�/�ȷ��� ��ư ���� ���� ������ U ��ư�� Ŭ���Ͽ� �ȷο����� ���踦 �����ϴ�. ������ �ȷο��� �Ķ��� U��ư���� Ȯ���� �� �ֽ��ϴ�. 
// 4-1. �Ǽ��� ���������� ������ �ٷ� ���� �ȷ��� ��ư�� �����ּ���. 
// 5. ��� �۾��� �Ϸ� �� �� ���ΰ�ħ�ϸ� �ȷο��� ������ ���� Ȯ���� �� �ֽ��ϴ�.

$('.user-actions.btn-group').append("<span class='user-action-unblock-buttons'> <button class='EdgeButton EdgeButton--secondary EdgeButton--small button-text follow-text unblock-button'>U</button> </span>");
$('.unblock-button').click(function(){
	$(this).css({'background-color':'#1DA1F2', 'color':'white'});
	$(this).closest('div').find('.dropdown').addClass('open').find('li.block-text.not-blocked button').click();
	$('.block-button').click(); //���
	$('div.dropdown').removeClass('open'); //����ٿ� �ݱ�
	$('button.modal-btn.modal-close.js-close').click(); //����Ʈ��� �ݱ�
	$('button.modal-btn.modal-close.js-close').click(); //Ʈ����� �ݱ�
	$(this).closest('div').find('span.user-actions-follow-button.js-follow-btn.follow-button').find('button.unblock-text').click(); //�������
});
