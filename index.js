import docReady from "./utils/docReady";

docReady(() => {

      const addAttribute = (element, attributes) => {
            Object.entries(attributes).forEach(([key, values]) => element.setAttribute(key, values))
      }

      // DOM is loaded and ready for manipulation here
      // TODO: write your code here
      const root = document.getElementById("root");

      // creating elements
      const container = document.createElement('div'),
            main = document.createElement('main'),
            markUpDiv = document.createElement('div'),
            login = document.createElement('h2'),
            form = document.createElement('form'),
            firstField = document.createElement('div'),
            emailLabel = document.createElement('label'),
            emailInput = document.createElement('input'),
            secondField = document.createElement('div'),
            passwordLabel = document.createElement('label'),
            passwordInput = document.createElement('input'),
            buttonField = document.createElement('div'),
            submitBtn = document.createElement('button');

      // styling elements and adding text

      container.classList = 'container';

      main.classList = 'row justify-content-center';

      markUpDiv.classList = "col-md-7 col-lg-5 py-5";

      login.classList = "text-center";
      login.textContent = 'Login';

      form.classList = "row g-3";

      firstField.classList = "col-12";

      emailLabel.classList = "form-label";
      emailLabel.innerHTML = 'Email<span class="text-muted"></span>';

      emailInput.classList = "form-control";
      addAttribute(emailInput, { 'type': 'email', 'placeholder': "you@example.com", 'id': 'email' })

      secondField.classList = 'col-12'

      passwordLabel.classList = 'form-label';
      passwordLabel.innerHTML = 'Password <span class="text-muted"></span>';
      addAttribute(passwordLabel, { 'for': 'password' });


      passwordInput.classList = "form-control";
      addAttribute(passwordInput, { 'type': 'password', 'id': 'password' });

      buttonField.classList = 'col-12';

      submitBtn.className = "w-100 btn btn-primary btn-lg";
      submitBtn.textContent = 'Submit';
      addAttribute(submitBtn, { 'type': 'submit' });

      // appending elements to the root

      firstField.appendChild(emailLabel);
      firstField.appendChild(emailInput);
      form.appendChild(firstField);

      secondField.appendChild(passwordLabel);
      secondField.appendChild(passwordInput);
      form.appendChild(secondField);

      buttonField.appendChild(submitBtn);
      form.appendChild(buttonField);

      markUpDiv.appendChild(login);
      markUpDiv.appendChild(form);

      main.appendChild(markUpDiv);
      container.appendChild(main);
      root.appendChild(container);

      // Submit listener

      form.addEventListener('submit', (e) => {
            e.preventDefault();

            markUpDiv.removeChild(form);
            login.innerText = `You are logged in successfully as ${emailInput.value}`;
      });
});
