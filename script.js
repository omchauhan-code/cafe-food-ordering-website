// Data for categories and food items
  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
     { id: 'fries', name: 'fries' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pizza', name: 'pizza' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const foods = {
    coffee: [
      { id: 'Royal_Brew_(Hot_Coffee)', name: 'Royal Brew (Hot Coffee)', price: 99, desc: 'A bold and aromatic house-blend filter coffee.', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgaGBgYGBcXGxoYGhgXFhgYGB4aHSggGBslHRcXIjEhJSkrLi4uGCAzODMsNygtLisBCgoKDg0OFxAQGisgHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABKEAABAgQDBAYGBggDBwUAAAABAhEAAxIhBDFBBSJRYQYTMnGBkUKhscHR8CNSYnKC4QcUFTM0U5KTssLxVGRzg9LT4hZDoqOz/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwQF/8QAIhEBAQEBAAIDAAMAAwAAAAAAAAERAiExAxJBE1FhIjJx/9oADAMBAAIRAxEAPwDyjaOLVMWVKPdyGgEa7ZCQnCSwj0t9XNeV+7KKLGdHpgNmI4/PfDMHttUhJlUBYDtdmJudC4ePF8vP8nEnDN8+gu1iTNU5+RcQPhlgOVbzZDR318IfUqasqPaN/YIHTY3sDny5+Ed+ec5kQxbAA1NUTZrWb4w9KFcj5e+CsTgfopb8FX5lRHj2RAkhS0LAUH4HkOHwMYl2eAtMBNWOPlGnwk6vtAVWZQABI4Fs2fWKfZ1IzNlBtHvl4u0W4xiEJ3piEhNxcE+qPNzOr3sXnUs3DjOkwHPlDJoFxPSuWDapfcGHrgjA4/r5ZmKFABs5j6Gx10LPw8VkyUQbtFtjE6pLgxVzZKtYmoFmoHjEWFmFBY5GJFlOpiGYpJsIBV1LU8PlzGMVWDxYenWLElxGktcBiKFfZOcaHqgzjIxkMPNeNDsHGX6tWWnwjfPWeGOoPRh30ghOEfSDJUli2kGS5Qjf2YxWDAhsrww4HlF2JcPEoQWrFHLwBg6TgoskyxHVi0ZaZHpMsBaE8A8AnaKUoppSbve94P2rsSZPxBUVUosABcmLbZ3R6Wi4S54quYylKcPMxCUzEAoORSbDvEWeB6PixmKKzwyEX8vDgROBDiVn7Hlfy0wotWhRJ86ftqdTSVDLNg/w9UACWVHvNz744UNnDjkFZipmy56Rz+vM/wCsS72VgEmaqkuES1Ekal0BLd5MVu1pNK8sw8X/AEYxSQVqloZxS3rz8YrNtSFVXIIc5Pbj8iOX3n3sZ/ROxVmbLCTcy7N9kkkH2jwixwGzt9lAqSSygA5A48iPdGd2Rjzh5yZibtmDkocPzjbnpNhgiqUClRF+L3LZXv8A6xz7ll8ehZ5UWMkKqVKSBU7ACzseeXjFUuSq6aFEi1gS3lDcRjStaiovUSX4XyPHvifA7UmyFfRzCkHMDIxvnnPZkRSdkz5igBKmc90xpU9H5y6esT1cpLUoe574GR0ixDlpin1NohxW38R/NJ8mh+8t9VqVfT8OBYt3RUTpJc8IO2XPVOAWtqolmyM2jtMs2NysziABZoHUAGi2xsglTU2itxEsg9nKLDoSabuM4ssDiqg+usVuISc2hkqYUmqIa0ILbwg6TMyIziswy6kuNYJlliITW92FtATU0q7Qi5lHQ5x51hcQUKCkm4jd7PxYnICkm4z74ZWFimHgRDJW4icQg4CHUxwQ+FGiWBpDo60daJOAQ4QgIc0CcjsJoUSfM65fNPnHOp3e2k6tzgpEhIuoC2nxjkqSqb2Q5fkAAwADm2kcPsJTdnYhUtVsjza8TYjELmGlSSA92uW4iJZmx1hCj2iMqSC/Fxn5RXJUTrGJOer9ohEvZ8193jrb2wZh9hLW9ShLYBnuFHle0BIqSWUCPnOLPCTmzcpZiDrB131z/qVqsCtMsTGdJJFtCLX4QzBSySB4vwjXbI2OFSxvqIPaFVn5iKDFPJmrSbgKZsraGN9W2eGsGiVmQH4teIMHsebMJZJpdyTbwvEmBnMs3s3+kXCMceJbiI8vPX1udA7A4ahQcM2QgubMI0hxkgtv3zgSdKVlVHt+PmcTI3iDFy1EvAGJk8TBpUfSJeKzFgu4Ma04CxBADPEBUCLGGzkPAy08IhR+DxVBubH1ReJU4sYyCkxcbFxnoHPSFSrzDzdDFzsbaJkrf0TmIo5iSQ4ibCqJd4lXp8uYCBMRcGC0F4xXRra3Vq6tZ3D6jGwTun7J9X5RqMCkiHiGIiRMKOEdaOx2JAdqYlctIKQGdlKN6R9ZtYX6vNZ0znOYdIpPleDSkGxyMAScLNluiWU9XmkqclPFIGo4QxIv1nFfykf1GFEn7LX/ALQvyEKHwHhE/CBmCiX+yznzMRzd0BKT2Rc8VXy9Q8IJxk+ngVaNkOQ+PsiKRgVFqjc3pPz8tHg4vjelD8AWUliUnM+WnN2MV0+UyyFZvc84P2irq1JoNw9WRblyLRHPUmcUmyFjM+irx0PfDzc8/ikqbAorSULFjYKGdsn4iO4KWoilssjy4c4AxGGmJClGoAEZF0t3i3CLfZ+MC0vkrUe8cox3smzyrFpgUKQCGVe9mIgPbOE60hSUKSciVMxEGYPHrSoUhzwZwYvJmIVMYhAAAuOcb+O/aY6c+WcRsYpkukuRnzHKINnYZaiEMQNXjVfraBurSzZQ7ZeAmzpg6pBU2ug7zF/DL7P1D4TAO4YvEG0MKQbAgD2x6fgeixACpywOSbevM+AEWCMJIlDdlj7x+JvHbxIteM/sWfMDokzD+EgeZh//AKLxiv8A2FeaPjHqmN6RS02Ck/hFXsinxPS9Id1m3JI9pjH8nP8Abp9e7+POcX0GxgFpCj4o/wCqKbFdHsTKuvDTW+4S3iHj0sdMgosFkd9J9kPHS1QzI8Q0M75F46n48hmSvs98RjDqDKyOkewYjaeFn2nyEK+0wJ8CLiKTafQuTOFWDn0q/lzDUnuCu0nxeN6x/wCszs3FBY5jOLCXaM5jsJiMHNpnSyg+pQ4pIsqL3CzgpIIyMK9igY1/Rfa1Y6mYb+ifdGPESSphSQoWIhjNeoySxpPgeMEpik2HtIT0NktMXElb9+saZTiOw0GEp2tno8KOaOxWrRMKyhalXDy1JDAEaKHfxzEIYKYspMyYzZpsb/DI8oEPqV9X1iFCo+0fVCiTw3ZeyaTWu6tOAiTb06UmSnq5lU1RdZSTYEGz+Vovdm4JOJSpIXa6dwh317rRb4rorhDKCVhMu+aSbx8/4eOuv+XS533XkyZRp8R7D8IsMNhw17A+33HmIv8Aa2yZUhYloUVpAcEs976RWBSWKVWfXgdCIu/kt2f0jJMohQSlYckBrjO17MRHFYVCJhUUsXy4aG2l3jS9HdglKk4iek9Ukgp+1wJ5axfbf6MysUUql1S1kZs6Vd+oPONz4us2NYoOjSyVbiRMbNDgKbil84v1rw5WxTOB+qUlPugbYfQabInImqnDdLskEE8iToY2kuR1y+qawus8tEjmfZ3x245snlSqvZ3RwYtSVqTTLTr9bu5c/LjGuXNkYRACaUAWHEngkakw3auPRh5WgYWGXzpHk+1+k9SiqorUrxABJNJSWAyHEMp87RnrvL9Y7cfH9pt9NrtjpBOUn6NpKVOa15lAYE3DJN7C5scjGG2l0pUakha17wNZIG6Q5YF8iCMuHFozuLxq5hdR8cyXLm5JIvpyEDAW0vlfw88459Zf9ejmZ6TYjaUxaqlKJFrFTvxyyvwaK/FTypXBxkHazD1m7cwInVn6vhDFjyilhpkmaCAFatc3IGW7D/136qSkcyom3MGz++OqAORsPy1jgl6EP79HfLJ8o1sYxxG0FpNjd+fANfXMRYYDbynFVsmIN78YqlyrZv5X07r284GWkjM346OXGsbmfjn1/r1HB7YlYiX1GLQJktWpzB0IOaVcxeM9tjo3MwKwpCjNwsw7q9UH6q214HI8jGa2btMoIB7L6x6Z0V2oiak4acy5M0FLHn7DwOhEbl/K5WfsZdJhyYj2lglYTErwqy9LKlqPpy1dlXfmDzBhmJUQktnGmastn41UpYWnx5x6FgcamagTEeI9seU7OxomJfIixHAxoejO0VSpoSHKV2IjXpl6KgveHw7B4M5mwOmsWEuWBkPGEBJchR0Yc4IRhR3xOGjtcOIz9WT9UQofWYUWJ4WjYqwVTJEylae0gln+MaTo8jElIRMlFIcmpVKkn1v6oG2ZjZE2W0wFMwFypOajxEXOz8SoMrrVqR9UpvHn+PmZs9N3/EO0+jSMQzllDOmxbxtEJ6B4VDHfWp/SU48gwi7VjFguEhueccVtZTsJSjxPCN/XkI6VFpalEjgAAGGkTzcFMQj6JXck+6I8XtGliUKJ0tx5xFK2lPfdk7nMsqHwhsqWoSzUVZXOsW3RuSJUitRuRUonPx8LRQTsdMWhYKKAxBch8mtFh0lxFGzlEFnSB5sIz31k2Ncc71I856V9JVzphpUUh7MSC4f1Nb/WMsqHTFbxhr93n83+bR5ZMe+1yrJvbDT4Q8AcfHxhEfPz4Qhxo5SI6R4w9Q5fPn3xBDLAJUkFyl3Gefg3H5vEgG8LgDUMH0pAL2z9UPBzAc3DnL4AsGhJR7rjM6X8G/KHVgZMtRUVFICrpSxewdyQctOcQTJLAOXPE29mQ9loPI7r+GX5BohUgt3l8h5e28anTN58Kuam5tl8+MaDorjiN3UXEUs9Nteet+DxJsNTT0tzfyMdb6ef9x6Z+lHD9ZgsLjQDXLUEKI+pMD37lJA/EYxaJ3WyyAbt649I6Tyj+wV8foW/uy/dHkWGqlmpwBqI25wXs1RQOyxBIVzI1jd9AcOF4pJOSUlXjkPbGPWyxUm8eg/oxkb0xfAJT74VXoRhAw145VG2D4RMRlUciSWuFEbwok8j2bKoO6HHMRay9olPoKPMQ1RZgxMPWsszt3DSOUmTI2HTjVqU4RMF+Pui2qmtkGOd2ipxGMSk0lagW8POAxtpbshaSBm5LtFpzV0mStYdKmvmCffAwws0qKVTlIJOhd/hA2C20FqJAVTkW48QOEHSbVAqqD2D3A74R6GL2e5qqUSkZva0WO2Emds6YlN1JTU33blvBzFUJUsHcUsE5gHOD9iY6ggHKM9zxh56yyvJFNVoc7VAZG+nujq5iXIdJU43QaSBmdDUWvGk6bdHDh5nWSwTImE0kFqFH0T7uItGXljeDtkzqF+Tq0HhHDM9vXLvmHF6mpFJGbl37svOOomAkgaFi4IHha/hAsiapS1bpChZyVFBYsX0fgbwQT5eIOduDC0HUxrm6eb/AD3Qqsmhlfz5X90PAy5/PyIy06D884eBr4/Pzxjjc89Dr8vDmH5+XCImqGvz4WgaZzORJ114ROtXy/PlAkyaLn54GNcsd+guKUbu35aeOcWXQrZyp+KSlIyueWnz3RWS5S5q0oQklSiwAuTHvH6OuhwwcquYxmKuT7AOQj0SPJ1cd/SHgT+zepQWNUs/0qB9rR4Vj5dKqZr24fnH0J0zl9ZJbiocMg517o8p230ZC98FktdyCX11jbEZXZeLCDS5pOROh4R6/wDo0H0Uw/a90eXzNgEJ3atDcARsOg+3hhZapcxKlEnMNBKbLj1KqFVGPn9NBvAIKSB2iHEUs/b05ZTWpapZepSWTZsmjWsZW7nbakJNJmAq+qnePqikx/SyYFFEvDrqZ73txYRicYpKVjq3Qg9pRS5VxFoZ1dCwsKWSrspDuOSgcotOL/8A9ZYv6h/t/nCiv/asv+Sv1/CFBp+qTGYwBLFbPkcoAxO2paWFZfkHETrQNVHxaK/F4WtQ37DIMG/OMa1JBeCnKmpqrUz2cCJpISlRI7TX0Bisn4ZZH7y40G6D3xGnDzFJ7SbHVzFKcWqErSorqSX0ZmHhCGPUpVN24pYt5xUr65LCsHua/nA84TAeyH4JJHneHRjRjbAqCN4O+YL/AAi0kqsDqwjDK2yoABiKcy8bDZc2qUhXFKT6hBasX2D2gkpMqckKQoMQbhucZrbnQMj6TCGtGfVksocknJQt398HLh+G2iuWbFxwgslPPV59PN5uHUg0qCkqTalQIbvBFjEevPMfHuj16bjsLiQE4iWk8CoXHccxFZiugGFm3kzVIfQstPrv6453466z5p+vNgp768LjUQ8LI77Dh458/XyjZT/0az70TZS++pPseBFfo7xrN9Efx/8AjGfpf6dJ8nP9swFanjy0fIRxc1o1sv8ARrjFZqkp/Eo/5eZi1wX6KCWM7EW4ISB61P7Ip8dv4L83M/Xms6cz558fUIs9hdEsXjCOrllKPrqDJ7x9bwj2DZPQXAYchVAWoeks1n12HlGjTiQLISANDHbnjPbh18u+mf6IdBZGBTWrfmnNRAfuSNBGlXNq5DhEVzcl4c8dHL2znTqbTIGV1pA7yCxjAY7AYh09Yk0tmCgHyjedOJC5kpKUUvW+8zMxHvEefJlYlLhQLg3pNmzflA1ylQyUrUqWSD2d45AekQdYAkzUNUEKBcuHBAfvEdx2NqSxFRFmBTYjyvFphMZ9CxVpcOn2tnFsWUJIxKUmkgGoEVNkO6K9U+QEqSUlgbGoguDnazRaJKSqp0NzUp24M14uMLhag5kJZixLMzaBniiqgx8pExCClbFQBzAY/CHySU3BK1EMSlQBBFszFzOwkyYFIlS5RCSyiDSW0awh+GlTJQYolqbQVKI5DjDg1RVTv5yv60Qo0DH+X/8AAfGFFi157jJh0UruJJHnEX7SVqAfq5lmhIMsIAcv3uIglhNSXsBnd/KObosZO2SbZ8bNEw2qlSgkDVn0ipGLQldgWJvxI48Ieia62IoSMkgXV6s4ULmLZVaiHGjF/bnDeuUN8Ba3fkG7ojRKlkKUp1vkFBomSZjAslk2yNuVoEDmTlOApFgL/IjbdHFPh5eVgR5Exh8RNmJNQuH0T7meNf0SnlUnezqPuPviC7VECxE5iJYiiCLLAknK8TSJihkSPGGkR1EIq0w2PmjJZixk7RnfWimkmD8OYWVtLx00+lBMuYs5qMV8owbJMOgbKRxgqVygVEEoMSTAx0mGiE8QZXp7NZEsOkOo9pm7J+MYTcBNarapSX8bRqP0mzUHqZanc1KtpdIdvPyjCSAHKSEqPFyD5DOM1159D0mQ7oAbIuQ584YiQtZNKU29EPU3NnfuhYWUhL1Eto1I9xh/WUEFKlAk/WD350weGvIvZuz8SFViWBSbFRCfaDF1hMNPJqxGIZN6QBQx79RFDKdR3utVnkq49xgpS5y0hkrdJDFZDEMxsRY5RqY59SrvB4NKaj+s5m9LX5ZkxZyVlRZIULZslQHMh3jKCcpJprmqU3ZSAkeq8QJnYhSykFYRZ3cqA4hzk/KNaMbX9Um/zk/2R8YUZ+j/AHib/wDX8YUWjGDVQN0oQDxBsBDcNKloSXKX47xHqiLEYZb3l5lywLNw7oIVgDQ4QnN6efOOcdUUmkNSKuDjV847iJqpa3MxyTkBUU8WhkrDFSgQgAk7yqbDuzHlDMXhiDXUatH3X5i8KST0oUWHWKckgEU+2JeppRvFQbMXY/PGG4bGrpAWUgccz5HSJziAGClBhll8Ykrp2KJFW8M2BU48YvOieLSlfV1PWkK/GBcDi4v+GKPHTwrJWR3WsGPGIcRNUkpUkspJcEeYL6xCvTiIiUPbAGwNspxCHsJg7afeOIixJ8IEgUIQhxEICFCJY4wdIgBBg2TEwsZRg2QdIr5Jg6QrSED0GCBcNl3WgTDJAAADAZCC0RJMlUMmTAl1KUAkDWzM5JJ+coVXk1z7PfHmnTnpamdVh5BeWn94sekfqp+zxOvdnGQV+2TOmzJwSspJCUEJCtxLtYixLk/igDE4ckmmRSeIDEPqG1hdHErTKQUy0rrOtTgsM2GUHYkrRMClypQ+6o1cLX90JBSMCpaQFSgsAsx0I47wtDMZg10tQlk5BAlpbxJJPnBWI2qnIy1h1MkBu5r3MJS0zCQiQkML1LFQ4m6hfwg04r5expxJZJSD9tKQ3neDcOrEyQwoNgHqSTl96xiJMhNTqloXwHWJHmQYKlBwapEtN+1UlJP3XBDRRVyaFqWlKxJJUASusi7ZFlOT3RoJCKQHIBAuEFwfAxnOvkhRJwyVnj1iCPg/OGKkYgzSJUsywQLJU6bjIkBnaHRYvf1tX8s+f5Qog6jFfy1f3EfCFDrOMDjcWaUhJUx1SGEQiTMSkqBsfF/VaLVSCBqOe82fDSGdWlqaiRdzwPAM94w6qMSVM5DB/TUR5AQKjDgm8wAvk7lXK2UaLFIoAFBPAkP3vFOMIsklKcnbdazwUxNgJN1fR5camPFnPuiWfszgEN4v5wVJwuRIYjvMMnJKVXBbike0NDgVOJ2cvMJDcrtA07DqCSTppeLVSAXJUoAZhwPzEATJaF9gKfWzjLjrElfLxKkLCkEpUMiPnLlG02P0rRMATO3FfW9A/wDT425xh5mbEXh0qNZrG49XzDi4OohqT3+Meb4PaU2V+7WU8sx5G0XeG6XKDdZKSriUmk+t3gynWylDWDZRjJyemEj0kzE+APsMFp6ZYUar/pOcWBrMPxKnHzrrB8s6Rgpn6QcMLCXMV4JA9ZgSf+kxWUqQkHQqUT6gB7YsD1WSYB2v0nw2FB6yYK/qJ3lHwGXeY8fx/S3GTwyppSPqoZA9Vz4mKVNy5+TDixr+k/TedinRLHVSjmkHeXpvnuAsLd8Z9BaSOKlexhAtGpLRPV2AOPtMTTeYA0SpYKZz3YIBIIKi3pAcmMGoxi3pTKmqABdggAZtl8YKl7UkIpTWCwYslSjYcreuAsZisPNSVJBJe6mKPA3BHdCyhGJWHeSSQD2gVtdrAm0V4SokshTHMIdL9+fOLGVhUTA9ckOAwoquC4epTB+fGANqJly5gCyQkgtSCQXFgDmb8MozjUqykYgGl5RSlI7RSWcHRk71oIwE9RJ+jtelpVL3zct5CKEYZyGXMZgz0ly+jKLZ5QXOE8pTKSHSHIppSCGzJKiXyNwIZRYKxEycub+4mJIDVVTGA/ADCeaoprlzlKGot49i/rgnA4lZBBmzAQAzKdvEsDE+0dpLQlTlZtrSCL52UD64vC8oa8ZwV5f+MKK39rTeI/qT/wByFFsOVBNwVIIpTd7lQa9+8HzgmThWSGKCOZYjkCBFYZtLBQUo8gWHM3v4QPhsYrJcqoObE97FzdvXHOdR0vNWG0EJctc6t4G9oiVKSgOQKuDtY/eMQKKlqYJT1Ytv3IOpTx5REtkpJWalKYA8DfgzjvjX2Z+ojrHDgAcd4eoiA8Xj0ptnyd4gRhk6KIf7I+OUP/VpYvWpznuH58oPtWvqDxGMBbsDgCCP8t4FTiQ+6kDxIhxw4JUSSkDU3J4ECzQOEAEXexuQA3ri8gFjnqcgAkZD84kwBGoe49/MQp8oMXPMZe4xFh7Ka3zeNxzvsdNkAlwGuzEhm4vEasMq1i3HO40ics3w72N4JlKYZt2SBqHD7wPoAE27sjGgq1yiMwfEQyXK4xbhG6Q6i5JIVUlg9ms4fhrDJYBNg3aHfk7td2iWK1YA05Q2VIdVn7ucWSVEkO7NcHO3mwu9m9UPOVvY5tk5e99YkEThib2Z78oQlAE68Dy4xMvR72sSR7Gt74iXMfzt3REyYqCMMh1A6Dk7qziLCYRc1TIa2ZJAA5OSA/KNDOwkuWlIDKIayVEhRObsXDHVhGa1Ha1EJdbX3iyQAOCdfZHMZiVKU9bDmVEjWzEnhfnDsKpDMtDXORL6mneLNfO+UGJEguSVJSMhSlV75CoH2wSLQE2etgBMWUm5ckjn6V8xnEcmaRcAE2a1Ts/lpBeOUglFDDQ7iE+JuTybK8cxEhAQGWjuZKSQXJdVnDswPsEGVbDF4lWe6ksBZASGd2FjD/2ktw6iBYPkW5MRb4RJKwCCJZM1G64YEXOhJfTiBpBnUSWSEzElVgbyiSA5N6RfmeAvFJVbEMielRJmM9xUlTkjS5VfnYw1ODw7WJcPSEkEEtmo6AcGeHyJKK2V1aiTY1u3ggl/OJ5dJDJ6okqLDdQ6auRY2fhlEsCdQjgP60/GFE/6n/u6P6pXxjkWU+EUnDEpXMK1JCSkHdIcggZM4OfeIu/ourM1aQlHNJqL6Bj83iBclS1LloKytZYlLKASA7c345w/ZsxNPUqUqtJ4JZw9nuAA1+b3ghqDZp6xmCEAki4N08gom4NnMU02Ua1gqISFKSRYaWPCxa7xrcJiKZSK1sVKLEUgF2sDcO1mYv3xTLw8tS1qKhdQUFF6SQbAgh0vfjrDVz+m4To0JiV3U9IHadnuRvAhxa4teKefsJUr/wBuUQFU1KS7m3BXPgMo3OFHVp3VJVKSgHNZIJAYCkORbVmHjFVtLZyVS907wmApJIb6QBRIBz5C55xXmWCdeWWnYGnOXLuCUqZSQQOTmI9pbBoUEkJAKaiqhQYcQ5vfSNxK2ejrAlSV1FJT1YUEoZwCoBJJSCX8og2hIE2ZKqllIpKVJUpKSocAlzSk/WsYvpF97XnxwbSgtrqLJACt4DNwz24wKZX0SipLbwYhLt5nKPSsVsAiSEj6IJYhyLVWWmp97U30eKXC7Frw8yoOQu5LKYWpAS9yX14Q5g2VjSmi5JKXZ8r5eI7oNSoEBQAsGsxPi9msCIu8X0a6yUkoBSVKZACVkrJ1FYTutezwBiuiU1MxqgBSFZ29t9dM41rKGfMIqUzEm5KQTTYJBYm9uGsKc4cPle9nysb30EFS+jOLKmRSaWBSw3X471j5xybsHEpLKQwdvTpBIsbAp9cK1WzJakv3O2fgm3z64SJzg93deLo9FZpKQtJBVo6khv6Sxyzg3C9HEM61oUHANyprtZkgmxBuGiDKqW+6AVE6AZniIN2fsdUwVqBKQSSlJAJADklWQb13i02NscFS5jy1dWsgpRfMgORZgDq7MD3xpMHsuYEshqFntEqSGUbJTSCNbAaa6RFm8RPCKpacEh0gUvLKnHMilzq4Ed2SRMqUZQcEshOr8BSWI4kxeTtiGcqpISqlkMglS0XuTcO/B7DQxY7N2CMOlYWvcJcsVJDA8E9mzanLXKDFqkwkqUJSVqRUpQFgQkvcEUpvTzF+UOk4SSZ4lrloCFpdIBSpQOlw3F3IOQixnbGSsFYngSizKSupvshkswVyjux+jYpaYuZmpIG6g7zkuHLu5OmWWcODU03o7LAIoC3cAs7Zm+8PbnFZhdhEoIKZalZ2IJptlSvQ82trGkTgQsmT1oUhKboIKlvYBRNhY3uDcwDicGnDpSp07qqXCcw3pggAOQCWILjiYsg2s7Nw0mXPTLSgFI7QKiAbZ3JU44ZROEirelBlKWkqYpyekgV3GdtaXiSdsVp6FBQVKUXc0EVOVZKNQOmebRcYcpQiozSkU1KDVqJPapzZiQWDkRYdZbHTqcPUjDkKKyFKoNICSbJBJZxfhbODRKkvKAllpiEuoZ1XJ9nri7xmxQuRN6te7N3wLAAkOO0Re2RbM8XgE7EWOoWqYKZKDdWoG65SUlhfN8haDFon9hSvqK/oTHINY/zR/ZX8I7DgBpwy5KQsy7tYhyQMzm7ljpwOUGycHLUVTglRffChQzFN0ANckalr+cF4fGLdSp7NY0tUEO1iaQA4OZVZxEez8bPJP0RCMsykJu+6EpJJYgZtwjGRu2o0YMMAmtMtIKi6QtL3XeoOzDRu8QLszZMmYDQmUtJSXuayu4Bd7JdrPmM4s8ZNmqUUJVbdKh1SgGa4KlO4N9PGI17JExJN957BSkZZABTWHEjTWEOHZyUlpaE1JQlJ+jUz6gnssxdheCkYJ1KqAKXSAQKQlSd05AWLEZ2t3xLgigS8i43d5ExSgeBs5D8LQ5GHmOylp13UAjmW+lBc90LIRWFQtQpKc03N7AMlYcgg3ULAgtziCemUreCpe4FIIJSXCmAJFVhUOPkRBe0MNNFKJM2ksd1Rqq7nBCWPuhY3ZS1y6ZnVlQLhTUg2ukhJfx9URLGz5SUlK1JDBIIZWbAhizk3Fx7oaqbJlhSps2WBSSUulg190EXGWhYwbhJVKQFqQhkCyEk3GoKh2e8PnA+0pcmYAgKKSlLqCJYJKSLBqSUw0Q3YkhKpKSmaZzEsSbsb0rF8nyI8ordubOoJmCamRTLWa01LUBcrsckhwagLFn59wM0S+rKJ81lqZYXvGpiAwSSyuRBGUXO2Z6UJroUogkXSpQZwd4OAzgM/hFL4Nl1h9mYxMqelcyQqpRulklq+pKbhJA6tEyQM3KpsxRb0p5PSnDqWkIlLoUoAAzFCWUEpaYCQ7hMx6BbdVqA+olypc1X6x1S3mpoIqQAKXSJgcgoWzh0HJndgxeF2ZLlhMpGHHVgEBQZ3UVFRORuSSSDrDGWJxeMJkSCrfnzFWYoFCVstgSQmYZUpSRUqxWUXNwBkbYkYdKVfq6FLWJahvpSEibXOSh1VVJEtPbF1EB+1baTujmHEs04dAchJCySFBwSDvtSeBOgsWEE7Q2Kgp3JctRSklIWApLgWSCpykd1hEmZ2HiMPiSZqcGJYCBMUrrEhJKgVGsWCmKSC7kZtcRdS9myFqSpC94XaVNS19SHa41HuEW2EwCJaQJaEIBBcISAHI5W48Y6jAoZurlMdKE3NwbM0WLWLxuzJiZ6VS0TAEkFSlBAqEs1KWVKWeVyA5MaJalFIqExcwouEKlNSo7pKCoaascjeDtp4wS6aQ5JCSykppTbef6o15Q3FpKgoyzTc0spBSsqDpqqBpuzNfeB1MGHWawWMRIoaVPEkVuKUUrKt6rtXPbyLEaWsRjtrYdC5cxUmYgqSFpISkOD2UmkkLzJzs4iXB4OWkLTOlKJK7JMoTE1eir6MCxsd7IHMOYZt3BCZ1UsdWGWgJrqzAyCWUFBje4enVoPJ8FI6VyVVnq5qSAHdUkEWNkgrdXcx7oEx21sPiBKD0tMcdYWJbtPcJzIs490S/sKWhNR6sLSk1FWHNGblTAunI9zxULwEuavqkTpDgpW4lkFSQN57s13KQXi8rw0Ura8qYAkKUi1gtns13SVEZ6tnFDO2olaJiJAKS+6AV0hmLklQSFOCq4ZgYZN2VIUtKkLRNq3WShSUmw3kstlEOCxVccxE+0NklEhYQmSoJdVahvAMFOhQUSQ+iwBB5XgbsXFTVplhTpKQaprIoqFV7kk2Z2IFjBm1sdJQgy5s+la05pSTnmo2UB/rGZ6PYBBkkqEsKUWlzFLAKVjeAUCciwuA/kDB20pCEoSZyUUFhXKStbMagEzCrduSWpY3hl8KzyL/AFc/7QP7B/7UKM91eH/3v+5K/wCqORacX4/gvxD/ABGCOjuU3vHsMKFGGr+jdh/xE/vR/hEG+mrvHsEKFG56c77Nwn7xX3TGa2b/ABMz8UKFA1PVRSv4gffX7TGs2J+7V98+2FCg59rv0tjn4GIMJ2Ed3whQo6sHY3L/AJkv/EmHy9O5XtjsKAoMZ2B+H2Rw/vEdw98KFCFdh/4f/nf5xFntDszP+HM/wiFCiR8nsp+77hEqc/KOQogcv0u6GYnJPf8A5oUKAsTiP4+V/wANfsMa85o/FChRQ06R6P3T/ljLYj+Im/cP+EQoUHS5N6N/vF/eV/gVEe0P41PfI/8A0hQovxfq+w/71P44r9udqR95X+WFChA+FChRJ//Z' },
      { id: 'Choco_Ice_Drip_(Cold_Coffee)', name: 'Choco Ice Drip (Cold Coffee)', price: 139, desc: 'Chilled cold coffee with a creamy chocolate swirl.', img: 'https://media.istockphoto.com/id/1371303553/photo/coffee-and-chocolate-cocktail-with-whipped-cream.jpg?s=612x612&w=0&k=20&c=O3ZIVpWd6ADADg0ELcjkqD1qkWPJsvKE4AU_yoLdm5Y=' },
      { id: 'Frosty_Mocha_Shake ', name: 'Frosty Mocha Shake ', price: 159, desc: 'A rich blend of espresso, milk, cocoa, and vanilla ice cream.', img: 'https://lowcarbyum.com/wp-content/uploads/2020/09/keto-chocolate-frosty-recipe-sq.jpg' }
    ],
    tea: [
      { id: 'Desi_Kadak_Chai', name: 'Desi Kadak Chai', price: 59, desc: 'Strong, spiced Indian tea brewed with ginger, cardamom, and milk.', img: 'https://i.ytimg.com/vi/fq96QqdJ7Wo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUCRUwkoNuiU5svl02NSjKedqX2Q' },
      { id: 'Zesty_Lemon_Green', name: 'Zesty Lemon Green', price: 89, desc: 'A refreshing green tea infused with lemon and mint.', img: 'https://www.bmc.org/sites/default/files/tea.jpg' },
      { id: 'Masala_Magic_Chai ', name: 'Masala Magic Chai ', price: 79, desc: 'Traditional masala chai with a house-made blend of spices.', img: 'https://media.istockphoto.com/id/1253001045/photo/cup-of-tea-on-wooden-table.jpg?s=612x612&w=0&k=20&c=V1so2uwHey9Y9CVHheZZ_Fl7BKu5QyzC5SawxUvEbR4=' }
    ],
    fries: [
      { id: 'Golden_Sticks', name: 'Golden Sticks', price: 89, desc: 'Crispy, golden-cut potato fries.', img: 'https://miro.medium.com/v2/resize:fit:1400/1*b0_dei6HqiMPAWP1ETFCPQ.jpeg' },
      { id: 'Cheese_Burst_Stix', name: 'Cheese Burst Stix', price: 129, desc: 'Fries drenched in a rich cheddar cheese sauce.', img: 'https://i0.wp.com/jestersfastfood.com/wp-content/uploads/2022/02/IMG_0968.jpeg?fit=600%2C450&ssl=1' },
      { id: 'Peri_Peri_Blaze ', name: 'Peri Peri Blaze ', price: 119, desc: 'Spiced with our signature peri peri seasoning.', img: 'https://delifry.in/wp-content/uploads/2025/01/air-fryer-spicy-french-fries_-2-rotated.jpg' }
    ],
    burgers: [
      { id: ' Royal_Veggie_Crunch', name: ' Royal Veggie Crunch', price: 129, desc: 'A crispy vegetable patty layered with lettuce, onions, tomatoes.', img: 'https://4.imimg.com/data4/JJ/JJ/GLADMIN-/images-upload-our_cafe-big-big-crunch-veg-burger.jpg' },
      { id: 'Cheesy_Overload', name: 'Cheesy Overload', price: 159, desc: 'Stuffed with double cheese slices and a cheesy patty.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WD9-k6jN7FEPiFIwEE5EUxTkog_JooVtFA&s' },
      { id: 'Spicy_Volcano_Burger', name: 'Spicy Volcano Burger', price: 149, desc: 'Packed with a spicy bean patty, peri-peri sauce, and hot jalapeños.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pbrzz_YsHedByEcd9MR_JoSY9B79-pp-xKroyxjfK89ajSU7CFbzFaiV27JZ0VttNsY&usqp=CAU' }
    ],
    pizza: [
      { id: 'Classic_Margherita', name: 'Classic Margherita', price: 159, desc: 'A timeless favorite topped with fresh mozzarella, tangy tomato sauce, and basil on a thin, crispy crust.', img: 'https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg' },
      { id: 'Veggie_Supreme', name: 'Veggie Supreme', price: 199, desc: 'Loaded with capsicum, onions, tomatoes, sweet corn, olives, and jalapeños, finished with mozzarella and a dash of herbs.', img: 'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png' },
      { id: 'Spicy_Paneer_Treat', name: 'Spicy Paneer Treat', price: 219, desc: 'Tandoori-style spiced paneer cubes, with bell peppers, red onions, and spicy sauce.', img: 'https://blog.eatfit.in/wp-content/uploads/2022/10/original-1024x683.jpg' }
    ],
    desserts: [
      { id: 'Choco_Lava_Bliss ', name: 'Choco Lava Bliss ', price: 129, desc: 'A warm, soft chocolate cake with a gooey molten center that flows out with every bite.', img: 'https://www.warmoven.in/media/catalog/product/cache/31bd8dbd686c1a4f8d6b9e7414b2f5e1/image/14046aaf/choco-lava-choco-brownie-combo.png' },
      { id: 'Vanilla_Ice_Cream_Sundae', name: 'Vanilla Ice Cream Sundae', price: 99, desc: 'Classic vanilla scoops topped with chocolate syrup, nuts, and a cherry.', img: 'https://storage.googleapis.com/dam-cub-prd-9400d55.cub.prd.v8.commerce.mi9cloud.com/recipes/easy-vanilla-ice-cream-sundae.jpg' },
      { id: 'Oreo_Cream_Delight', name: 'Oreo Cream Delight', price: 149, desc: 'Layers of crushed Oreos, whipped cream, and soft brownie chunks in a cup.', img: 'https://thebestblogrecipes.com/wp-content/uploads/2021/03/Oreo-Delight-REC.jpg' }
    ]
  };

  const ownerPhone = '916356872608'; // Owner WhatsApp phone number (change this!)

  const landingSection = document.getElementById('landing-section');
  const startOrderBtn = document.getElementById('startOrderBtn');
  const foodSection = document.getElementById('food-section');
  const categoriesDiv = document.getElementById('categories');
  const foodItemsDiv = document.getElementById('food-items');
  const backToCategoriesBtn = document.getElementById('backToCategories');
  const orderSummaryPre = document.getElementById('order-summary');
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  const confirmationModal = document.getElementById('confirmationModal');
  const modalOrderDetails = document.getElementById('modalOrderDetails');
  const confirmOrderBtn = document.getElementById('confirmOrderBtn');
  const cancelOrderBtn = document.getElementById('cancelOrderBtn');

  // State: Selected category, order object {foodId: quantity}
  let selectedCategory = null;
  const order = {};

  // Show categories on food section
  function showCategories() {
    foodItemsDiv.style.display = 'none';
    backToCategoriesBtn.style.display = 'none';
    placeOrderBtn.style.display = 'none';
    categoriesDiv.style.display = 'flex';
    selectedCategory = null;
    renderCategories();
    updateOrderSummary();
  }

  // Render categories dynamically
  function renderCategories() {
    categoriesDiv.innerHTML = '';
    categories.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'category';
      div.tabIndex = 0;
      div.role = 'button';
      div.setAttribute('aria-label', `Category ${cat.name}`);
      div.textContent = cat.name;
      div.addEventListener('click', () => {
        selectedCategory = cat.id;
        showFoodItems(cat.id);
      });
      div.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          selectedCategory = cat.id;
          showFoodItems(cat.id);
        }
      });
      categoriesDiv.appendChild(div);
    });
  }

  // Show food items of category
  function showFoodItems(categoryId) {
    categoriesDiv.style.display = 'none';
    foodItemsDiv.style.display = 'flex';
    backToCategoriesBtn.style.display = 'block';
    placeOrderBtn.style.display = Object.values(order).some(q => q > 0) ? 'inline-block' : 'none';
    renderFoodItems(categoryId);
  }

  // Render food items of category
  function renderFoodItems(categoryId) {
    foodItemsDiv.innerHTML = '';
    foods[categoryId].forEach(food => {
      const div = document.createElement('div');
      div.className = 'food-item';
      div.tabIndex = 0;
      div.setAttribute('aria-label', `Food item ${food.name}, price ₹${food.price}`);

      // Image
      const img = document.createElement('img');
      img.src = food.img;
      img.alt = food.name;
      div.appendChild(img);

      // Name
      const nameEl = document.createElement('h4');
      nameEl.textContent = food.name;
      div.appendChild(nameEl);

      // Description
      const descEl = document.createElement('p');
      descEl.textContent = food.desc;
      descEl.style.fontSize = '0.9rem';
      descEl.style.color = '#555';
      descEl.style.minHeight = '38px';
      div.appendChild(descEl);

      // Price
      const priceEl = document.createElement('p');
      priceEl.textContent = `₹${food.price}`;
      priceEl.style.fontWeight = 'bold';
      priceEl.style.marginTop = '6px';
      div.appendChild(priceEl);

      // Quantity input
      const qtyInput = document.createElement('input');
      qtyInput.type = 'number';
      qtyInput.min = '0';
      qtyInput.max = '20';
      qtyInput.value = order[food.id] || 0;
      qtyInput.setAttribute('aria-label', `Quantity of ${food.name}`);
      qtyInput.addEventListener('input', () => {
        const val = parseInt(qtyInput.value);
        if (isNaN(val) || val < 0) {
          qtyInput.value = 0;
          order[food.id] = 0;
        } else if (val > 20) {
          qtyInput.value = 20;
          order[food.id] = 20;
        } else {
          order[food.id] = val;
        }
        updateOrderSummary();
        placeOrderBtn.style.display = Object.values(order).some(q => q > 0) ? 'inline-block' : 'none';
      });
      div.appendChild(qtyInput);

      foodItemsDiv.appendChild(div);
    });
  }

  // Update order summary text
  function updateOrderSummary() {
    const lines = [];
    let total = 0;
    for (const categoryId in foods) {
      foods[categoryId].forEach(food => {
        const qty = order[food.id] || 0;
        if (qty > 0) {
          const itemTotal = qty * food.price;
          total += itemTotal;
          lines.push(`${qty} × ${food.name} (₹${food.price} each) = ₹${itemTotal}`);
        }
      });
    }
    if (lines.length === 0) {
      orderSummaryPre.textContent = 'No items selected yet.';
      placeOrderBtn.style.display = 'none';
    } else {
      lines.push('\nTotal: ₹' + total);
      orderSummaryPre.textContent = lines.join('\n');
    }
  }

  // Open modal to confirm order
  function openConfirmationModal() {
    const lines = [];
    let total = 0;
    for (const categoryId in foods) {
      foods[categoryId].forEach(food => {
        const qty = order[food.id] || 0;
        if (qty > 0) {
          const itemTotal = qty * food.price;
          total += itemTotal;
          lines.push(`${qty} × ${food.name} (₹${food.price}) = ₹${itemTotal}`);
        }
      });
    }
    lines.push('\nTotal amount: ₹' + total);
    modalOrderDetails.textContent = lines.join('\n');
    confirmationModal.classList.add('active');
    confirmOrderBtn.focus();
  }

  // Close modal
  function closeConfirmationModal() {
    confirmationModal.classList.remove('active');
  }

  // Send order via WhatsApp
  function sendOrderWhatsapp() {
    let message = 'Hello Royal Café, I would like to place an order:\n\n';
    for (const categoryId in foods) {
      foods[categoryId].forEach(food => {
        const qty = order[food.id] || 0;
        if (qty > 0) {
          message += `${qty} × ${food.name} (₹${food.price} each)\n`;
        }
      });
    }
    let total = 0;
    for (const categoryId in foods) {
      foods[categoryId].forEach(food => {
        const qty = order[food.id] || 0;
        if (qty > 0) total += qty * food.price;
      });
    }
    message += `\nTotal: ₹${total}\n\nPlease confirm. Thank you!`;
    // Encode URI component for URL
    const encodedMessage = encodeURIComponent(message);
    // Open WhatsApp chat link in new tab
    window.open(`https://wa.me/${ownerPhone}?text=${encodedMessage}`, '_blank');
  }

  // Event Listeners
  const gallerySection = document.getElementById('gallery-section');
  startOrderBtn.addEventListener('click', () => {
    landingSection.style.display = 'none';
    foodSection.style.display = 'block';
    showCategories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backToCategoriesBtn.addEventListener('click', () => {
    showCategories();
    window.scrollTo({ top: foodSection.offsetTop, behavior: 'smooth' });
  });

  placeOrderBtn.addEventListener('click', () => {
    openConfirmationModal();
  });

  confirmOrderBtn.addEventListener('click', () => {
    sendOrderWhatsapp();
    closeConfirmationModal();
  });

  cancelOrderBtn.addEventListener('click', () => {
    closeConfirmationModal();
  });

  // Accessibility: close modal on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && confirmationModal.classList.contains('active')) {
      closeConfirmationModal();
    }
  });
