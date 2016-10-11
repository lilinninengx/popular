 $(document).ready(function(){
        $('#send_message').click(function(e){
            
            //阻止表单提交和检查验证
            e.preventDefault();
            
            // 变量声明
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();
            
         	// 表单字段的验证
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
            
            // 如果没有验证错误,处理邮件的功能
            if(error == false){
               // 禁用提交按钮后表单处理1次成功。
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
                
				/* 帖子的jQuery Ajax函数得到所有的数据尽快提交表单的形式发送email.php的值*/
                $.post("email.php", $("#contact_form").serialize(),function(result){
                    //从电子邮件检查结果集。php文件。
                    if(result == 'sent'){
                        //如果电子邮件成功发送,删除submit按钮
                         $('#submit').remove();
                        //显示成功消息
                        $('#mail_success').fadeIn(500);
                    }else{
                        //显示错误的信息
                        $('#mail_fail').fadeIn(500);
                        // 使再次提交按钮
                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        });    
    });