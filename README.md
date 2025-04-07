# Setup With Custom Domain

You can follow the following article to attach github pages to your domain:
https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages

TLDR simply goto your domain DNS settings and add the following 'A' records as '@'
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

and then create a CNAME which points 'www' to USERNAME.github.io

After this you can simply go to your github page settings -> pages and add your domain e.g eqanahmad.com as the custom domain

This should fix the issue

Other than that you can check this particular issues for help:
https://github.com/isaacs/github/issues/1675
