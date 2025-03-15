const t="[a-fA-F\\d:]",d=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${t})|(?<=${t})(?=\\s|$))`:"",r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",$="[a-fA-F\\d]{1,4}",c=`
(?:
(?:${$}:){7}(?:${$}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${$}:){6}(?:${r}|:${$}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${$}:){5}(?::${r}|(?::${$}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${$}:){4}(?:(?::${$}){0,1}:${r}|(?::${$}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${$}:){3}(?:(?::${$}){0,2}:${r}|(?::${$}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${$}:){2}(?:(?::${$}){0,3}:${r}|(?::${$}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${$}:){1}(?:(?::${$}){0,4}:${r}|(?::${$}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${$}){0,5}:${r}|(?::${$}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),n=new RegExp(`(?:^${r}$)|(?:^${c}$)`),s=e=>e&&e.exact?n:new RegExp(`(?:${d(e)}${r}${d(e)})|(?:${d(e)}${c}${d(e)})`,"g");function g(e){if(typeof e!="string")throw new TypeError("Expected a string");return s({exact:!0,includeBoundaries:!0}).test(e)}export{g as i};
