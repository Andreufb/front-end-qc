export class FormFieldService {
    takeInfo_(evt: MouseEvent, show, message1, message2, message3, message4, user_input, selected_endpoint, selected_method, introduced_data) {
        show = "circle;";
        message1 = "Data sent correctly!";
        message2 = "Type: " + selected_endpoint;
        message3 = "Method: " + selected_method;
        message4 = "Additional data: " + introduced_data;
    
        user_input = [selected_endpoint, selected_method, introduced_data];
      }

}