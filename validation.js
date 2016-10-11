 $(document).ready(function(){
        $('#send_message').click(function(e){
            
            //��ֹ���ύ�ͼ����֤
            e.preventDefault();
            
            // ��������
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();
            
         	// ���ֶε���֤
            if(name.length == 0){
                var error = true;
                $('#name_error').fadeIn(500);
            }else{
                $('#name_error').fadeOut(500);
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email_error').fadeIn(500);
            }else{
                $('#email_error').fadeOut(500);
            }
            if(message.length == 0){
                var error = true;
                $('#message_error').fadeIn(500);
            }else{
                $('#message_error').fadeOut(500);
            }
            
            // ���û����֤����,�����ʼ��Ĺ���
            if(error == false){
               // �����ύ��ť�������1�γɹ���
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
                
				/* ���ӵ�jQuery Ajax�����õ����е����ݾ����ύ������ʽ����email.php��ֵ*/
                $.post("email.php", $("#contact_form").serialize(),function(result){
                    //�ӵ����ʼ����������php�ļ���
                    if(result == 'sent'){
                        //��������ʼ��ɹ�����,ɾ��submit��ť
                         $('#submit').remove();
                        //��ʾ�ɹ���Ϣ
                        $('#mail_success').fadeIn(500);
                    }else{
                        //��ʾ�������Ϣ
                        $('#mail_fail').fadeIn(500);
                        // ʹ�ٴ��ύ��ť
                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        });    
    });