# Risk Register

| # | Risk | Owner | Likelihood | Impact | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|

R1| Quote form not keeping customer data after they submit the button for Quote Premium in index.html | Ajit | H | H | This is a customer convience. Every time he do not need to fill the details to request a premium | Request Sponser on his view on this and proceed to mitigate this asap|

07-15-2026 : This is working fine after JS integration. Risk is remidiated.

R2 | Unable to perform validation because of First and Last name field in Index.html |Ajit |M |M | Keep the field as is for now and avoid validating name . Allow Submit button to function without validation | Request Project sponser to Approve this scope change|

07-15-2026: Instead of 2 (first and last name), system is validating only first name and expecting a value now. The risk is reduced to Low now. 

R3| Reusing the HTML header instead of recoding it in all pages of the navigation bar| Ajit | H | L | Reusing the code will reduce complexity in the document, Reduce tech debt and increase maintainability of the code | Request project sponser for advide"

R4| Page header and Page Info - Text has to be streamlined | Ajit|L|L| While the content of multiple pages has to be streamlined and approved by business, this can go as is for MVP| Request project sponser for approval|

R5 | Unable to put footer at bottom of screen. It shows up in few pages at middle | Ajit |L |L | As this is a MVP, Leave footer as is. If needed, adjust with future release | Request Sponser to approve this change|

## How I'll use this register

I'll re-read it at the start of every daily check-in. If a risk fires, I'll move it to the top of the status update that day. The register lives in the repo so peers reviewing my work Friday can see what I was watching for — not just what went wrong.
