import { Component, OnInit, ViewChild } from '@angular/core';
import { IPopupConfigs, IPopupCpmmands, ISliderConfig } from 'src/app/ds-components/ds-types';

@Component({
  selector: 'app-enter-screen',
  templateUrl: './enter-screen.component.html',
  styleUrls: ['./enter-screen.component.scss']
})
export class EnterScreenComponent implements OnInit {

  sliderData: ISliderConfig[];
  popupData: IPopupConfigs[];
  customPopupContents: IPopupConfigs[];
  showDialogUI: boolean = false;
  currentPopopWindowIdx: number = 0;
  currentPopupPage: IPopupConfigs;
  showTearms: boolean = false;
  showPrivacyPolicy: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.sliderData = [
      {
        header: "Header 1",
        content: "Content 1",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        }
      },
      {
        header: "Welcome to",
        header2: 'Our Auction Center',
        content: "This is where Auction Houses are posted by our administration team. When one room closes another one opens for our multi-room Houses. When a room is ready to close, it means that the room is full and the timer will be activated to conclude the bidding session. Any addtional rooms will open automatically with a 21 day timer until it conculdes.",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        },
        default: true
      },
      {
        header: "Header 3",
        content: "Content 3.",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        }
      }
    ]

    this.popupData = [
      {
        header: 'DreamStakes Rules & Regulation',
        contentHeader: 'DreamStakes Contract',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus et lacus at maximus. Vivamus dignissim tincidunt turpis, eu lacinia justo tempor eu. Morbi aliquam nulla non porta tincidunt. Vivamus at ultricies enim, eget tempus quam. Etiam nisi felis, ultricies ut eros nec, accumsan luctus lectus. Donec justo enim, venenatis ac tellus quis, congue ultrices arcu. In feugiat nec dolor non vehicula. Proin id tincidunt erat.<br><br>
        Nullam consectetur interdum mollis. Morbi in lacus sapien. Vivamus aliquet massa sed lacus pretium lacinia. Maecenas quis leo sed tortor maximus eleifend. Sed sit amet facilisis neque. Proin tempus massa sit amet lorem sagittis, at ultricies quam auctor. Suspendisse quis nulla commodo, elementum felis vel, pellentesque justo. In mi sem, fringilla at fermentum at, vulputate suscipit sapien. Vivamus at tincidunt libero, id rutrum nulla. Curabitur auctor lectus sit amet ex imperdiet consequat. Donec tempor magna sapien, tempus ultricies neque ultricies sed.<br><br>
        Proin nec magna justo. Proin vel pretium enim, eget sollicitudin nisi. Proin mattis rutrum lorem ut consequat. Quisque eget magna ex. Proin vestibulum, metus eu dictum congue, lorem lectus ultricies enim, quis semper orci lacus sit amet dui. Pellentesque eget neque lobortis, tincidunt lectus eu, hendrerit orci. Etiam at risus tristique ante hendrerit consequat. Sed eleifend erat sed auctor blandit. Curabitur vehicula sapien bibendum odio malesuada, vitae egestas nunc dictum. Cras bibendum egestas neque. Donec imperdiet eget nisi ut semper. Sed eu tempor enim.<br><br>
        Duis magna sapien, malesuada sit amet felis eu, convallis rhoncus elit. Donec hendrerit urna non eros rutrum efficitur. Quisque a luctus diam. Sed vel laoreet odio. Cras accumsan tristique mauris et faucibus. Praesent sit amet dapibus dolor. Nam facilisis lacus at lectus volutpat imperdiet. Etiam tincidunt eros erat, id rutrum risus venenatis non. Aliquam ornare semper lacus at tempor. Suspendisse potenti. Curabitur tempus, nisi eget vehicula fermentum, justo tortor venenatis turpis, ac cursus nunc tortor eget augue. Duis finibus, arcu vel condimentum auctor, lectus eros placerat massa, ut facilisis odio lacus pulvinar tortor. Vivamus dictum vulputate fermentum. Integer vitae egestas mi. Etiam a tellus eu leo laoreet hendrerit.<br><br>
        Sed condimentum odio in dolor cursus consequat. Nam auctor suscipit nisi, sed egestas arcu bibendum nec. Nullam quis nibh sit amet massa interdum sollicitudin. Sed lorem nisi, iaculis placerat massa at, placerat semper sapien. Nulla dictum dapibus arcu ut condimentum. Vivamus at dapibus tellus. Duis ut augue maximus, mattis nisi ut, elementum enim. Maecenas sed aliquet lacus, eget condimentum nisi. Fusce suscipit consequat risus consequat scelerisque. Donec sodales, turpis nec scelerisque suscipit, magna ipsum eleifend magna, id aliquam sapien arcu quis urna. Cras vel mattis sapien. Etiam scelerisque venenatis fermentum. Donec at turpis a lorem vulputate sodales sed in tellus. Donec volutpat libero vitae gravida molestie. Ut sed ante neque.`,
        bckButton: false,
        nxtButton: true,
        showFooter: true
      },
      {
        header: 'DreamStakes Rules & Regulation',
        contentHeader: 'Non-Refundable $100 Entry Fee',
        content: ``,
        bckButton: true,
        nxtButton: true,
        customContents: 'agreement',
        showFooter: true
      },
      {
        header: 'DreamStakes Rules & Regulation',
        contentHeader: 'Choose Your Payment Method',
        content: ``,
        bckButton: true,
        nxtButton: false,
        customContents: 'payments',
        customFooterButton: 'submit',
        showFooter: true
      },
      
    ]

    this.customPopupContents = [
      {
        header: 'Terms and conditions',
        contentHeader: 'Terms and conditions ',
        content: `These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Dreamstakes.com accessible at www.dreamstakes.com.<br><br>
        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator.<br><br>
        Minors or people below 18 years old are not allowed to use this Website.<br><br>
        Your Privacy<br>
        Please read Privacy Policy.<br><br>
        No warranties<br>
        This Website is provided "as is," with all faults, and Dream stakes express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.<br><br>
        Limitation of liability<br>
        In no event shall Dream stakes, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Dream stakes, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.<br><br>
        Indemnification<br>
        You hereby indemnify to the fullest extent Dream stakes from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.<br><br>
        Severability<br>
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.<br><br>
        Variation of Terms<br>
        Dream stakes is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.<br><br>
        Assignment<br>
        The Dream stakes is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.<br><br>
        Entire Agreement<br>
        These Terms constitute the entire agreement between Dream stakes and you in relation to your use of this Website, and supersede all prior agreements and understandings.<br><br>
        Governing Law & Jurisdiction<br>
        These Terms will be governed by and interpreted in accordance with the laws of the State of af, and you submit to the non-exclusive jurisdiction of the state and federal courts located in af for the resolution of any disputes.
        `,
        bckButton: false,
        nxtButton: false,
        showFooter: true
      },
      {
        header: 'Privacy Policy',
        contentHeader: 'Privacy Policy',
        content: `

          Last updated: 2020-11-06 11:35:26<br>

          We value your privacy very highly. Please read this Privacy Policy carefully before using the www.theloremipsumco.com Website (the "Website") operated by The Lorem Ipsum Company, a(n) Corporation formed in California, United States ("us," "we," "our") as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you.
          <br>
          Your access to and use of the Website is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including, but not limited to: visitors, users, and others, who wish to access or use the Website.
          <br>
          By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree with any part of the Privacy Policy, then you do not have our permission to access or use the Website.
          <br>
          We collect any and all information that you enter on this Website. We collect the following information about you:
          <br>

          Category of information	Specific piece of information
          <ul>
            <li>Identifying information	Name</li>
            <li>Identifying information	Phone number</li>
            <li>Identifying information	IP address</li>
            <li>Identifying information	Email address</li>
            <li>Internet or other electronic activity	Browsing history</li>
            <li>Internet or other electronic activity	Search history</li>
            <li>Internet or other electronic activity	Information regarding your interaction with our website or application</li>
            <li>How we may use your information</li>
          </ul>
          <br>

          We may use the information that you provide us for the following:
          <ul>
            <li>Marketing and advertising;</li>
            <li>Participation in surveys and contests;</li>
            <li>Performing services;</li>
            <li>Providing customer service;</li>
            <li>Resolving disputes;</li>
            <li>Verifying customer information;</li>
            <li>Analytics.</li>
            <li>With whom we share your information</li>
          </ul>

          <br>

          We share your personal information with the following categories of third parties:
          <ul>
            <li>Content management systems;</li>
            <li>Customer management systems;</li>
            <li>Email marketing vendors;</li>
            <li>Parties that need to operate the website;</li>
            <li>Subsidiaries;</li>
            <li>Data analytics providers;</li>
            <li>Social networks.</li>
          </ul>
        `,
        bckButton: false,
        nxtButton: false,
        showFooter: true

      }
    ]

    this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];

  }

  showDialog(){
    this.showDialogUI = true;
  }

  recieveFromPopupDialog(e){
    
    switch(e.command){

      case IPopupCpmmands.close:
        if(!e.customCommand){
          this.currentPopopWindowIdx = 0;
          this.showDialogUI = false; 
        }
        else{

          if(e.customCommand === 'closeTearms'){
            this.showTearms = false;
          }
          else{
            this.showPrivacyPolicy = false;
          }
        }


      break;
      case IPopupCpmmands.next: this.currentPopopWindowIdx++; break;
      case IPopupCpmmands.back: this.currentPopopWindowIdx--; break;
      case IPopupCpmmands.showTearms: this.showTearms = true; break;
      case IPopupCpmmands.showPrivacyPolicy: this.showPrivacyPolicy = true; break;
      case IPopupCpmmands.submit:
        this.currentPopopWindowIdx = 0;
        this.showDialogUI = false;
      break;

    }

    if(e.command !== IPopupCpmmands.showTearms || e.command !== IPopupCpmmands.showPrivacyPolicy)
      this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
    

  }

}
