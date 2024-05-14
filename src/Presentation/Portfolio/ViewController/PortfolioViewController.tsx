import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import { AspectRatio } from "../../../Common/Interface/AspectRatio";

import { Portfolio } from "../../../Domain/Entities/Portfolio";

import LeftLiftData from "./CraneLiftData/LeftLiftData";
import RightLiftData from "./CraneLiftData/RightLiftData";

const dummyData: Portfolio[] = [
  {
    title: "LONG TEXT HAHAHAHAHA",
    field: "Mobile Application",
    framework: [
      { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png", alt: "flutter" },
      { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png", alt: "flutter" },
      { image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png", alt: "flutter" },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1024px-Android_Studio_icon_%282023%29.svg.png",
        alt: "apple",
      },
    ],
    images: [
      { image: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg", alt: "image1" },
      {
        image:
          "data:image/jpeg;base64,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",
        alt: "image1",
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
        alt: "image1",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est. Amet cursus sit amet dictum. Tortor pretium viverra suspendisse potenti nullam ac. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Cursus turpis massa tincidunt dui. Sodales ut etiam sit amet. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Id neque aliquam vestibulum morbi blandit cursus risus at. Ipsum a arcu cursus vitae congue. Euismod elementum nisi quis eleifend quam adipiscing vitae. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Viverra aliquet eget sit amet tellus cras adipiscing enim eu.\n Feugiat nisl pretium fusce id. Risus pretium quam vulputate dignissim suspendisse. Sociis natoque penatibus et magnis dis parturient montes. Ut placerat orci nulla pellentesque dignissim enim. Sed nisi lacus sed viverra tellus in hac habitasse platea. Ut eu sem integer vitae. Mauris nunc congue nisi vitae suscipit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Fermentum iaculis eu non diam phasellus vestibulum lorem. Sit amet cursus sit amet dictum sit. Sit amet purus gravida quis blandit turpis cursus in. Fermentum odio eu feugiat pretium nibh. Dignissim suspendisse in est ante in nibh. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Facilisi cras fermentum odio eu.",
  },
  {
    title: "THIS IS THREE LINES TITLE, LONGEST",
    field: "Mobile Application",
    framework: [
      { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png", alt: "flutter" },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1024px-Android_Studio_icon_%282023%29.svg.png",
        alt: "apple",
      },
      { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png", alt: "apple" },
    ],
    images: [
      { image: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg", alt: "image1" },
      {
        image:
          "data:image/jpeg;base64,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",
        alt: "image1",
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
        alt: "image1",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est. Amet cursus sit amet dictum. Tortor pretium viverra suspendisse potenti nullam ac. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Cursus turpis massa tincidunt dui. Sodales ut etiam sit amet. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Id neque aliquam vestibulum morbi blandit cursus risus at. Ipsum a arcu cursus vitae congue. Euismod elementum nisi quis eleifend quam adipiscing vitae. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Viverra aliquet eget sit amet tellus cras adipiscing enim eu.\n Feugiat nisl pretium fusce id. Risus pretium quam vulputate dignissim suspendisse. Sociis natoque penatibus et magnis dis parturient montes. Ut placerat orci nulla pellentesque dignissim enim. Sed nisi lacus sed viverra tellus in hac habitasse platea. Ut eu sem integer vitae. Mauris nunc congue nisi vitae suscipit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Fermentum iaculis eu non diam phasellus vestibulum lorem. Sit amet cursus sit amet dictum sit. Sit amet purus gravida quis blandit turpis cursus in. Fermentum odio eu feugiat pretium nibh. Dignissim suspendisse in est ante in nibh. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Facilisi cras fermentum odio eu.",
  },
  {
    title: "Hunting App 3",
    field: "Mobile Application",
    framework: [
      { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png", alt: "flutter" },
      { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png", alt: "apple" },
    ],
    images: [
      { image: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg", alt: "image1" },
      {
        image:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PEhAQEhAPDw8NDw8PDw8NDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHR0tLS0tLS0tLS0tKy0rLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rLS0rLS0rLS0tLS0tLf/AABEIALQBGAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgADBAUHBv/EAEAQAAICAQIEBAQDBAYKAwAAAAECAAMRBBIFITFBBhNRYQcicYEykaEUUnLRQlOCkrHBIzM0YnOisrPD0hUXdP/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAyEQACAQMCBAUDAwMFAAAAAAAAAQIDERIEIRMxQVEFYXGx8CKBkUKh4TPB0RQjMjRS/9oADAMBAAIRAxEAPwDHYGIRLRqQeo/KQOh9ROU7rmjsLGXUogMysJ2aTaOxEV1LDqmYmIAJlbR7RxXBxQ8K5jKssWoy9UjiK6rYypIpTTky5dL7yxcRg49JXKUmWxUUVmkRlwO0t8z2ilpU4SY+cVyCtuOwjG3MqzIAYOEPxRifaAw+WYQhjJJC3bKsQhZd5XvIKwJHJESZjMIvl5mWVHpK3Q9oVMDiY5qEi8o3lmTZGyXcWz7GTQ47zMRVM1YUzJqciZasb8maacu6MxtODMe3RzIpvz1l+8TJnUiy6yfQ1LaKUWaEzeYERkEeOommK6UX0PPPoCZr79AfSescCY1irNVLV1ImerpKcjx9umI7THZJ6jU0AzW3aadOlq8uZzK2ktyNLtkxM26vExbFm1TTMMqbQMSQAQyxSKnBnpSg7Q7fWCWLOW2dhITygYBTiXhYQJU5sdQRT5MIQ+syAsIiZsswRWqH1j4jw4hTYGkUwqTL9gkCiWKSEcWVgGQLLgshEFyWAqRhgSYMDIfWDFdRsizdBuiBfeLiDBE4jLciTcvpKoQIHBDRm2WeYPSVtY3YQ4kwZTKy6FybfUrKsYRSO5loEIVRFz+IOPxirjsJGELWjsJSxYyJb3I2QvjvF80+sG2ArLk4lTyGTUEd5m0ape5mtKwqIJ04zQYVJRNqzBukRqYumeZQMwTvB2RthaSuzX26czDt059Ju2EocQwryQsqMWeb1OmmrtE9ZqdPkTS6rRTqabUJ83uczU6drkjUgSTKOmMM3cVdzBwWbvbCFmT5cgrnNdU6aplIUxgkyFrjisSvMdQMYCNsmSKxG8qTLcNjE8uEJMny5NkfMTEpCywCN5Yh8qHNExYmIdkbZJgwZroNiL5XvD5YjQGTMGK7A2CTaJMRhA5hURNsJSWRCwivIbYXbJiHeIpeLhJhzigMDKiPaNZdtBLEADqSQAPvMC3jOmXk2poHsbqs/wCMaNGQsqse5mbpicT4pRp13W2BQeg5l2/hUczNbxLxTo6kZltW1wDtrqO8lscskcgPecy4jr7L7GtsbczfkB2VR2A9Jso6PN3lsjHX1qhtHdns9X8QFBIqoyOzWvtJ/sqD/jNd/wDYGpz/AKqjH0s/9p5GCbVpKK/T7mB6ys/1e3+D3/DvHwLgXUhVPLfWWbafUqe305/WeySwMAykFWAZWUghgehBnEMz2PgTj5rddJZzrsbFR/q7D/R/hJ/U+8pr6WKWVNcuho02rk3jUfPk/P5+D3wYy6q1s9ZFIlioJy5TVt0dWMXfZmXXZ6mOcTD2e8evA6mYZwXNM1xmXMkw7tNmZgvEsyDKlOUGM0pGht0uO0k3j1gyS+OsaRS9OrmMqxlSXrWI4rl2SK8WUhJNkyBXCaYOIkNjcwyshMymqieVLFVRW6bMXJjDMv8AKk8uPxExMGitRGAj4iERLj8kAyQ5jSMiYu0QYEfEUwIICsUiOZTYZbErkAtKyZ4jxF4xuq1FlNK1haiEZ3DOzNgE4GQAAcjv0mht8X6xrK3LqDUWIVVKI+7kQ6g/MOU3w0s2r9zBPVwTa7HUzBmc6p8e6oD5kobvna6n6cml1HxDt3fPp62H+47If1Bhemqdv3AtVS7/ALHteJaQX020k4FiMmfQkcj9jOM6vTvU71upV0YqynsR/lOh1+OtNYjq6XUsysqsgW7blcBgcqcg+33nP+InNrf6Y3DIxa28FxjlkNzHp9pfpYzjkpKxn1coSxcdzFzITBCBNZjFzJCRAJCWDLaLSjK6nDIyup9GByP1EqMZBkgevLmcD85CHbOG65L6a71HKxQ2PQ9Cv2II+0zVYzm3w84rsuOmdjstBNS5+UW9T9MgfoJ0YCee1On4c3Hp0PRabUcWCl16+pfmELK1U+ojj6iZHTNKkExQWli4lq1AyttLZosV2Y3msJJe9HtJEvF9ifUjKVI4WPiTEjkyAgxHxDiFMlyvEMJEQqYySYrbJiI6w84QDLFGwt7lWIMS2AxsgWEKxdssMkKkBoWKwkJgLRgXKmlDmZTNKHEaLFkjinGSTqtV76nUf9xpg/yntPFXhR0bUaxHQ1ktc6HIdSx547EZOe08Y879GpGUFi72PP1YSjJ5KwhMWs85seF8G1Gq3+RX5nl7S/zImN2cfiIz0P5Rtf4f1WnTzLaSibgm4tWfmOcDkT6GPnG+N1ft1Ewk1lZ2722/JriZWZuOH8Btv09+oQ17dPk2IWYWYC7sgbcHlnv2mnYRlJO6XQDi0k31DWhO7HZdx+mRCI1D4Dj95dv65/yijlCwIUwSEySEbJLdPeUJK4yVZMkZwGGCR6HGecokhFMnSXmuxLB1R1cfY5nbaH3KrfvAMPuJwtZ2XwlqxbpKW/pBAjfUd/v1nO8QulGSOj4e95RNmqGWBPUyM5iTl2lI6d0i4ECQagCUlZNsDpRfMZVX0Mn9rkmNtkicCA3Fkb2HEGIczAXkkghxCiEkxGkjZMguINseCTIgm2TbGMOIcgFRERllpEQrHRGVMBK2EtKxSsdSYljHeUsZkusqZPaPmhHFmFrdOt1dlLfhsRqz9GGMziuoqKMyN+JGZGHowOD+oncGE5Z410i1ayzaMCwLdj/ef8X/ADAn7zp+HVbycO+5ztfT2jLtt+TL8CaPU2DUfs+r/ZyDVvHlJb5g+faefTHP85u+KeF9fqECW69bEDBwppCDcAQD8vsT+c1fwztxfqE7tSrD+y+D/wBYnvzmLqq04Vnjbp0XbuHTUoTorK/Xq+/bka/w7wJNHS1W4ubG32MwAVjjGAvYYnPPF3h1tJYWUZ09jHymzkoevlt3yOx7gfWdTFk0Hjtx/wDH3ZHVqQPr5qn/AABlel1FRVrvfJ7/ADy9tizU0abpbbYrb5833OTYnT/BnANPfoK2v0yMzNZhypV2r3HByME98Gcyae74X48NGiWo17tRX/oq+QFXlKAELYPXqMDrjqMzp6tVJQSp8797HP0rpxm3Plbtc2niDwpwynT2OQaWCko4sssO/sNrEg56YnLGmbxDiV17FrbXck7vmY7QfZeg+0wpZRpyhH6pZMqrTjN/THEEkMEvKBgZ0T4a6vKWUk/hbK/Qjp+YP5znU9R4D1wq1QU/hsBU/Uc+XvM+pjlSZo0ssaiZ1QCMFig/T6jvG3ThuR2kkTbGCQBpMxG5MfYm2SKWkgxbJlE3ZWTEJcRN05tmabjSZMXcIwMDuEnOHEIMMdK4LgxAWjExeUtSQBd0OY22HbC2kRCGDEs2w7YmRLlJSKa5eYhMGYTHeuUukzIhAgyY1ka+yuc3+JNGNRU/79OP7rt/OdRtxOe/FGr/AGVv+Mv/AEH+c6Ph07V4rvf2Zg18U6Mvt7nnfBGq8vX056W7qD/aHy/8wWdXdZwyq0oyuvJkZXU+jKcj9RO36HVLdVXcv4bUWwe2RzH2OR9pr8Ti4yjNddvn2M/h8k4yg+m/z7gKTyfxJs26WpO9l+ceyI3+bCem4lxOjSpvucKD+FerufRVHMzmPi3xF+2uhCbK6gyoCdzNuIyzdgeQ5D8zK9FSnOpGdvpQ+sqQjBxvuzzpiEwmCd447BDBJIIyQwSSBIJkaW81sHXqp3DMxowMjQE7HcuE2+ZSjEbWZVYr9R1BmWVnEeFcWu0z+ZU5B6EH5lYehE7To9R5lVVn9ZXXZy6fMoPL85xtRQ4TTvszr0K/E2tyHxDiLv7RgJnui8IEkMES4+5tsQR9kISc51UarFeIQJcK43lxVNE2KhmPzjiuMKzDmBtFIBjbZb5cnlw5guioLGEcrEOIrmG5MyZilouTFdRMaxC8BEOIdsS4eQhWIwlm2KRDcJS4njPiXp92kR/6q5Sf4WUj/HbPasPaafxPoTdo9RXjmamZf4l+Zf1E1aWeFaEm+TRVqI505R8mcPaek4B4vs0mmsoCB23bqGY/LXu/ECO4zzA9SZ5p4s9XUpwqRxmro85TqSg8ouzMjW62y5zZY7O7dWY5P09h7DlMYmQxDLEuwgpghIkjCtgkgkhASSSSQBIRBCJAoIM3us8S6iymnTqxrqpqSrFbFTYVGNzkcz9Ok0UERxi7NrkNGTV7dTacE15o1VN+T8lilz1JrPJx/dJnZf2qvzPKFiGzZ5uwMC3l5GHx6HInCAZm6HiVtFgtrcq45bupK8vlOeo5Dl7TPqdNxd72aNFDUcNWtsztpaSaXwlxwa2klgFtrIWwL+Eg/hcDqAcH7gyTizbpycZLdHUjaaUk9me2EOcSFDAapxtjc2Mt6yxbV9ZV5AjCoSZLoLZFof0jc/SVA4gN5hTbBiXHMX7zHNxg82HGRLF5x6xeUq3So6tQ5rJ+YLvP0hVKT6ByS6mST7QMwHM8prbuO6dCAzgEnH05ZzNN4m4qrUGyuxNi5UMSQS/09JdDSzk1dWuVyrQSbW56db1O35h834feWGcaXxVcGB38kyqhcbQD1xPSa3xUv7FTathFobBQ/iP1muXhs4teZnjroO/ke/LiL5s0nCuO03+WqtksuQfUjqJtiDMkqOLtJWNUaikroZrJTZYZCDEYQqmgObRxXxNwltNqrK9p2Mxek45NWTkAeuM4P0mJpeD6m0gV6e5s9xW+3+8RgfnO5MDF5zsrxKailir+v8HNehjk3fY4zxbwzqdLQt9wRQ9gqCB91mSrNk45Y+U9+4moGncobNrFFYKXCkoGPRS3QH2nZvFHBzrNM1IIDhhZWT0DrkYPsQSPvPO6Twvr7dFXoGWnT1Je1r27/Me0cyBsXkcE92HQek0UtenC82r336bd1zb9CmppHlaCdrbdd/7HO9SuCB6Ko/SUTf8AHuF+RfdWTnYxUMRjdg7c4+00TCb6c1JJoxzi0yuGCSWFZJJJJCEhEEkgUMZBJBAQIhEWFZAnt/hl/tF//wCcf90SRfhrYBfdnlup2j3PmKZJ57xBSdd28vY7WjceCr+fud5/YxA2jGOsff7+8xdZqtg5EEjqMgHE5GyVyxObdrlracRGpmj4zxk1MBub5h8taLl2b69pfTxpN6I25SUB+YcgfQn1h5q9tixXXU2DUys0TH1/FRWFIGVZtgIIySfQd5z3iPjJ69UMgjyvMoZicqx7HaOkalQdVvhok6vDV5Ox0aupXGVIIyRkHPMRvIAnLr/iEU0/lVJtcMCtmcg88sSPzmRb4+B0bqXP7SpV6mK8icjkf1l70GoX6etv59Cv/V0//Xz/ACek4lxpHdaK3O8kq1af6wEdZ4bjnHHdwQdtlRspIJKsVHQt7zzN3Gbm1DaneVtLFty/LzPLlKtJcrXBrmJVmLOepJPc/edehoOFu3ey9Xfr6ow1dXxNltv+3T7mx01zkV7OZyQ7HopJ6zL8TaysCtEBI62H+izY7DtNfSXQlVwFbLLnmrKO01d9jOS5HInt0B9JqjTympdF+9+5mc7Rt3IbATnHLPSRrCfp2zKYQZqsUm44ZxJqlGxitituRuwB6zsXAtV5umqcsCxUE8xnn6zg6tPf/D5n3qquCpHmvWc826YnM8Rop081s1ubtFVanj3OiFvaKTNdo9cTqbK+TK2SDnow6qBNk6n0nEd4vc6iae5UcytiZaVMQ/WMpWA0VktCjN6yGwDvCLR6x8vIS3meD+IukI8u/HV7KHP9s2J+jN+U5289p8ReLNZqTphyqp2kj9+1kB3H6AgD7+s8U09Fo4yVKN+pydQ06jsJJDBNZkJJJJIQkkkkhBoJMQSBDCsWMICLmex+HmuppvsFrBfNQV1lvw79wOM9s47yTRcDFf7RQLQTWbk3qoGTk4Ax3GcZ9syTlayinUv9W66WOlpZvC223f8AJ3/i/HhVUjqBhiE9NvuZoOL8fCqUsSpy4Gzym3WMfcCef45xVlWoOw8sjO1VHI9iR3M8wOInzTdWAVVtxzhT+U5tDQuSyfzsvIvqahR2ie20XFE06C5qrXycF7ObgdwvoJiazxzSrMr6dyBk1tnBOeh5zxuv4vZZz3EKcnGSRk+00dlpPUk/U5m2n4ZCW9Td+rM8tZJbQ5fY33GfFOo1DVkts8li1Wzlt9/czSX6hnZmZiWYlmJ7k95SWikzp06MKatFWMUpyk7t3G3SFsxMyEy2wBiY1FgDKWG5Qclc4zKsyDHPOYbAubF9eX25JQIpWvHYehmE9pPLPy5zjtn1inG3r82entAWz26coqilyI22MLO0BMQmCNYCZdPUeBdZXVqVe19qIGyMkbsjE8qGliOcAdpTWp8SDg9rllOeElJdDsPhnjC6i12rqGDawDbSQqj0PqZ6p0J7zwHw04nsotDuBXUd2CoBIPcHvznu9FrUvXchyM4zPI66Lp1pJLZbdzv6aWVNNvmI+lP70x30XvNptiFJmVea6l+EWaZ9D7xBp8euBzP0m4dBPM+N1c6DUCo89oNnY+SCPMx9v0zL6VadSUYt2uyudOMYuSXI5PxziTam+y9gAXPIAYCqAAq+5AA5zVmWPEM9rFJKyPOSd9xJIYI5USEDMEbPaQgMRokkJB8RJJICEhEiyCQKPY/DnS12apmdSWpq82r90NuCkn3+bl94ZmfC1M2ar/h1D82b+UE8t4pK+pavyS9rnd0O1FWXf3NPdXvtKsWIA5DMOj0aHT6hiOaY2nPSCSd1t2/HucbqaYudpHbMpkkmhCgkkkjEYpimGSEAI0kkgBTLVb5WGByHLlzkkgYSswSSQgYRLkHP7ySQMKM8MVrOCR8xHU9J2vwngaWsAADC8gMDpDJOB4x/Tj6nU8P/AOb9DbxpJJ5w65S88B8VdbYlVNKsVS4v5mORYKisFJ9MnOPYSSTf4Yk9VC/f+zKNZ/QkcreIZJJ7RHnGSCSSEVkkkkkASEySQkAJJJICEEYySSEOi/CZRu1n8On/APJJJJPI+Kf9qf29kej0S/2I/f3Z/9k=",
        alt: "image1",
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
        alt: "image1",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est. Amet cursus sit amet dictum. Tortor pretium viverra suspendisse potenti nullam ac. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Cursus turpis massa tincidunt dui. Sodales ut etiam sit amet. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Id neque aliquam vestibulum morbi blandit cursus risus at. Ipsum a arcu cursus vitae congue. Euismod elementum nisi quis eleifend quam adipiscing vitae. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Viverra aliquet eget sit amet tellus cras adipiscing enim eu.\n Feugiat nisl pretium fusce id. Risus pretium quam vulputate dignissim suspendisse. Sociis natoque penatibus et magnis dis parturient montes. Ut placerat orci nulla pellentesque dignissim enim. Sed nisi lacus sed viverra tellus in hac habitasse platea. Ut eu sem integer vitae. Mauris nunc congue nisi vitae suscipit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Fermentum iaculis eu non diam phasellus vestibulum lorem. Sit amet cursus sit amet dictum sit. Sit amet purus gravida quis blandit turpis cursus in. Fermentum odio eu feugiat pretium nibh. Dignissim suspendisse in est ante in nibh. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Facilisi cras fermentum odio eu.",
  },
];

const CRANE_SKELETON_ASPECT_RATIO: AspectRatio = {
  small: { width: 100, height: 250 }, // height = width + 150
  med: { width: 150, height: 350 }, // height = width + 200
  big: { width: 200, height: 450 }, // height = width + 250
};

const CRANE_LIFT_ASPECT_RATIO: AspectRatio = {
  small: { width: 120, height: 160 },
  med: { width: 180, height: 240 },
  big: { width: 240, height: 290 },
};

const CRANE_DATA_ASPECT_RATIO: AspectRatio = {
  small: { width: 300, height: 70 },
  med: { width: 700, height: 100 },
  big: { width: 1100, height: 120 },
};

const color = ["yellow", "red", "grey"];

const CRANE_SKELETON_HEIGHT = [
  CRANE_SKELETON_ASPECT_RATIO.small.height,
  null,
  CRANE_SKELETON_ASPECT_RATIO.med.height,
  null,
  CRANE_SKELETON_ASPECT_RATIO.big.height,
];

const CRANE_SKELETON_WIDTH = [
  CRANE_SKELETON_ASPECT_RATIO.small.width,
  null,
  CRANE_SKELETON_ASPECT_RATIO.med.width,
  null,
  CRANE_SKELETON_ASPECT_RATIO.big.width,
];

const CRANE_LIFT_HEIGHT = [CRANE_LIFT_ASPECT_RATIO.small.height, null, CRANE_LIFT_ASPECT_RATIO.med.height, null, CRANE_LIFT_ASPECT_RATIO.big.height];

const CRANE_LIFT_WIDTH = [CRANE_LIFT_ASPECT_RATIO.small.width, null, CRANE_LIFT_ASPECT_RATIO.med.width, null, CRANE_LIFT_ASPECT_RATIO.big.width];

const CRANE_DATA_WIDTH = [CRANE_DATA_ASPECT_RATIO.small.width, null, CRANE_DATA_ASPECT_RATIO.med.width, null, CRANE_DATA_ASPECT_RATIO.big.width];

const PortfolioViewController: React.FC = () => {
  useEffect(() => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Box w="100%" height="110em" bg="skyblue" display="flex" justifyContent="center">
      {/* Land */}
      <Box w="100%" bg="green" height={[16, null, 20, null, 24]} sx={{ position: "absolute", bottom: 0 }}></Box>
      {/* Crane Skeleton */}
      {dummyData.map((data, index) => {
        return (
          <Box
            bg={color[index]}
            key={index}
            height={CRANE_SKELETON_HEIGHT}
            w={CRANE_SKELETON_WIDTH}
            position="absolute"
            bottom={[
              index === 0 ? 10 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.small.height - 210,
              null,
              index === 0 ? 14 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.med.height - 294,
              null,
              index === 0 ? 24 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.big.height - 354,
              null,
            ]}
          />
        );
      })}

      {/* Crane Lift */}
      {dummyData.map((data, index) => {
        return (
          <Box
            bg="white"
            key={index}
            height={CRANE_LIFT_HEIGHT}
            w={CRANE_LIFT_WIDTH}
            sx={{
              position: "absolute",
              bottom: [
                (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
                null,
                (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
                null,
                (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
              ],
            }}
          />
        );
        return <Box />;
      })}

      {/* Crane Left Lift Data */}
      {dummyData.map((data, index) => {
        return (
          <Box
            p={2}
            key={index}
            display="flex"
            flexDirection="row"
            position="absolute"
            justifyContent="center"
            height={CRANE_LIFT_HEIGHT}
            left={[15, null, 100, null, 260]}
            bottom={[
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
              null,
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
              null,
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
            ]}>
            <LeftLiftData data={data} />
          </Box>
        );
      })}

      {/* Crane Right Lift Data */}
      {dummyData.map((data, index) => {
        return (
          <Box
            p={2}
            key={index}
            display="flex"
            flexDirection="row"
            position="absolute"
            justifyContent="center"
            height={CRANE_LIFT_HEIGHT}
            right={[0, null, 10, null, 100]}
            bottom={[
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
              null,
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
              null,
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
            ]}>
            <RightLiftData data={data} />
          </Box>
        );
      })}
    </Box>
  );
};

export default PortfolioViewController;

const craneLiftArchived = () => {
  return dummyData.map((data, index) => {
    return (
      <Box
        p={2}
        key={index}
        bgColor="green"
        w={CRANE_DATA_WIDTH}
        height={CRANE_LIFT_HEIGHT}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{
          position: "absolute",
          bottom: [
            (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
            null,
            (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
            null,
            (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
          ],
        }}>
        <LeftLiftData data={data} />
        {/* <RightLiftData data={data} /> */}
      </Box>
    );
  });
};
