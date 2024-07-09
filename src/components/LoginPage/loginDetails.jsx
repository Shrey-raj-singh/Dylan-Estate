import '../css/loginPage/loginDetails.css'

const LoginDetails = () => {
    return <section>
        <div class="form top heading bg-red h-60 scroll pdl-20 pdt-10 pdr-30">
            <p><span class="required">*</span>I am</p>
            <div class="block">
                <div class="options radio-group"><input type="radio" name="user-type" id="owner" checked /><label
                    for="owner">Owner</label>
                </div>
                <div class="options radio-group"><input type="radio" name="user-type" id="builder" /><label
                    for="builder">Builder</label>
                </div>
            </div>
            <div class="block2">
                <p>YOUR NAME<span class="required">*</span></p>
                <input type="text" name="user-type" id="your-name" placeholder="NAME" />
            </div>
            <div class="country-selector">
                <p class="mgt-10">Country<span class="required">*</span></p>
                <select id="countries" name="countries">
                    <option value="af">Afghanistan</option>
                    <option value="al">Albania</option>
                    <option value="dz">Algeria</option>
                    <option value="as">American Samoa</option>
                    <option value="ad">Andorra</option>
                    <option value="ao">Angola</option>
                    <option value="ao" selected>India</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="gb">United Kingdom</option>
                    <option value="au">Australia</option>
                </select>
            </div>
            <div>
                <p class="mgt-10">Phone<span class="required">*</span></p>
                <div class="block3">
                    <select id="countriesCode" name="countries">
                        <option value="af">+1</option>
                        <option value="al">+2</option>
                        <option value="dz">+3</option>
                        <option value="as">+922</option>
                        <option value="ad">+10</option>
                        <option value="ao">+89</option>
                        <option value="ao" selected>+91</option>
                        <option value="us">+1</option>
                        <option value="ca">+90</option>
                        <option value="gb">+78</option>
                        <option value="au">+65</option>
                    </select>
                    <input type="number" name="phone" placeholder="000-000-0000" />
                </div>
            </div>
            <h4 class="mgt-10">OR</h4>
            <div class="block4">
                <p class="mgt-10">Email<span class="required">*</span></p>
                <input type="email" name="Email" class="end" placeholder="email" />
            </div>
        </div>
    </section>
}

export default LoginDetails;