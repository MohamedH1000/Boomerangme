"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SideBar = ({ currentUser }: any) => {
  const pathname = usePathname();
  const activeHome = pathname === "/";
  const activeCards = pathname?.includes("/cards");
  const activeClients = pathname?.includes("/clients");
  const activeMailings = pathname?.includes("/mailings");
  const activeLocations = pathname?.includes("/locations");
  const activeManagers = pathname?.includes("/managers");
  const activeSettings = pathname?.includes("/settings");
  return (
    <div
      className="fixed md:top-[64px] md:left-0 
    md:min-h-screen md:w-[56px] bg-[#EAEAED] 
    max-md:bottom-0 max-md:w-full"
    >
      <div
        className="flex md:justify-start gap-2 
      md:flex-col md:items-center md:mt-20 max-md:flex 
      max-md:justify-start max-md:items-center max-md:p-2 "
      >
        <Link href={"/"}>
          <div
            className={`
              ${
                activeHome
                  ? ` bg-[#454545] fill-white`
                  : ` hover:bg-[#454545] hover:fill-white`
              } w-[40px] h-[40px] duration-500
              rounded-md flex justify-center items-center
              cursor-pointer `}
          >
            <svg
              height="18"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path d="m22.6666 10.3146v10.3521c0 1.8409-1.4923 3.3333-3.3333 3.3333h-4c-.3682 0-.6666-.2985-.6666-.6667v-8c0-.3682-.2985-.6666-.6667-.6666h-4c-.36819 0-.66666.2984-.66666.6666v8c0 .3682-.29848.6667-.66667.6667h-3.99999c-1.84095 0-3.33333-1.4924-3.33333-3.3333v-10.3521l-.24286.2c-.284218.2341-.704364.1934-.938425-.0908-.2340604-.2842-.1934012-.70436.090815-.93842l11.33332-9.333333c.2462-.2027292.6014-.2027292.8476 0l11.3333 9.333333c.2842.23406.3249.65422.0908.93842-.234.2842-.6542.3249-.9384.0908zm-1.3243-1.09067-9.3423-7.69363-9.34225 7.69363c.00587.0356.00893.07214.00893.1094v11.33337c0 1.1045.89543 2 2 2h3.33333v-7.3334c0-1.1045.89543-2 1.99999-2h4c1.1046 0 2 .8955 2 2v7.3334h3.3333c1.1046 0 2-.8955 2-2v-11.33337c0-.03726.0031-.0738.009-.1094z"></path>
            </svg>
          </div>
        </Link>
        <Link href={"/cards"}>
          <div
            className={`
            ${
              activeCards
                ? ` bg-[#454545] fill-white`
                : ` hover:bg-[#454545] hover:fill-white`
            } w-[40px] h-[40px] duration-500
            rounded-md flex justify-center items-center
            cursor-pointer `}
          >
            <svg
              height="24"
              viewBox="0 0 14 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path d="m0 3c0-1.65685 1.3046-3 2.91391-3h8.17219c1.6093 0 2.9139 1.34315 2.9139 3v18c0 1.6569-1.3046 3-2.9139 3h-8.17219c-1.60931 0-2.91391-1.3431-2.91391-3zm1.16556 0v18c0 .9941.78276 1.8 1.74835 1.8h8.17219c.9656 0 1.7483-.8059 1.7483-1.8v-18c0-.99411-.7827-1.8-1.7483-1.8h-8.17219c-.96559 0-1.74835.80589-1.74835 1.8zm4.66226 17.4c0-.6624.52217-1.2 1.16556-1.2s1.16556.5376 1.16556 1.2-.52217 1.2-1.16556 1.2-1.16556-.5376-1.16556-1.2zm-3.49669-15c0-.33137.26092-.6.58278-.6h8.15899c.3218 0 .5827.26863.5827.6v6c0 .3314-.2609.6-.5827.6h-8.15899c-.32186 0-.58278-.2686-.58278-.6zm1.16556.6v4.8h6.99341v-4.8zm-.58278 8.4c-.32186 0-.58278-.2686-.58278-.6s.26092-.6.58278-.6h8.15899c.3218 0 .5827.2686.5827.6s-.2609.6-.5827.6zm0 2.4c-.32186 0-.58278-.2686-.58278-.6s.26092-.6.58278-.6h5.82782c.32186 0 .58278.2686.58278.6s-.26092.6-.58278.6z"></path>
            </svg>
          </div>
        </Link>
        <Link href={"/clients"}>
          <div
            className={`
            ${
              activeClients
                ? ` bg-[#454545] fill-white`
                : ` hover:bg-[#454545] hover:fill-white`
            } w-[40px] h-[40px] duration-500
            rounded-md flex justify-center items-center
            cursor-pointer `}
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path d="m7.04247 11.1586-4.86629 2.5049c-.59943.3085-.97618.9262-.97618 1.6004v.9361c0 .9941.8059 1.8 1.80008 1.8.33138 0 .6.2686.6.6s-.26862.6-.6.6c-1.65692 0-3.00008-1.3431-3.00008-3v-.9361c0-1.1237.627916-2.1531 1.62697-2.6674l4.0293-2.074c-1.28603-1.12135-2.05627-2.75573-2.05627-4.5225 0-3.31371 2.68629-6 6-6 2.0119 0 3.8559.998337 4.9655 2.63106.1863.27406.1151.64723-.1589.8335-.2741.18627-.6473.1151-.8335-.15896-.8886-1.30742-2.3629-2.1056-3.9731-2.1056-2.65097 0-4.8 2.14903-4.8 4.8 0 1.69406.88417 3.23481 2.30432 4.1011.2829.1726.37233.5418.19977.8247-.0646.1059-.15675.1847-.26162.2328zm4.91103 5.1216-4.89835 2.2265c-.64259.2921-1.05515.9328-1.05515 1.6387v.8546c0 .9941.80589 1.8 1.8 1.8h13.2c.9941 0 1.8-.8059 1.8-1.8v-.8546c0-.7059-.4126-1.3466-1.0552-1.6387l-4.8983-2.2265c-.7472.3341-1.5751.5198-2.4465.5198s-1.6993-.1857-2.4465-.5198zm-1.2469-.7514c-1.40409-1.0982-2.3066-2.8081-2.3066-4.7288 0-3.31371 2.6863-6 6-6s6 2.68629 6 6c0 1.9207-.9025 3.6306-2.3066 4.7288l4.148 1.8855c1.071.4868 1.7586 1.5547 1.7586 2.7311v.8546c0 1.6569-1.3431 3-3 3h-13.2c-1.65685 0-3-1.3431-3-3v-.8546c0-1.1764.68761-2.2443 1.75859-2.7311zm3.6934.0712c2.651 0 4.8-2.149 4.8-4.8 0-2.65097-2.149-4.8-4.8-4.8s-4.8 2.14903-4.8 4.8c0 2.651 2.149 4.8 4.8 4.8z"></path>
            </svg>
          </div>
        </Link>
        <Link href={"/mailings"}>
          <div
            className={`
           ${
             activeMailings
               ? ` bg-[#454545] fill-white`
               : ` hover:bg-[#454545] hover:fill-white`
           } w-[40px] h-[40px] duration-500
           rounded-md flex justify-center items-center
           cursor-pointer `}
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path d="m4.54823 15.6476c.15889-.0454.32946-.0233.47149.0612 1.19449.7104 2.55891 1.0907 3.98046 1.0907 4.30752 0 7.79952-3.4921 7.79952-7.79978s-3.492-7.79976-7.79952-7.79976c-4.30755 0-7.79952 3.49208-7.79952 7.79976 0 1.42158.38031 2.78608 1.09066 3.98058.08447.142.10661.3126.06122.4715l-.87828 3.0741zm13.06587-9.26204c3.756 1.1377 6.3852 4.61604 6.3852 8.61394 0 1.5495-.3927 3.0428-1.1284 4.3664l1.1053 3.8686c.1293.4526-.2891.871-.7417.7417l-3.8685-1.1053c-1.3235.7357-2.8167 1.1284-4.3662 1.1284-3.9939 0-7.47413-2.6248-8.61371-6.3855-.60844-.1844-1.1953-.4332-1.75211-.7427l-3.868459 1.1053c-.452584.1293-.871011-.2892-.7417018-.7418l1.1052708-3.8685c-.735719-1.3236-1.12835495-2.8169-1.12835495-4.36638 0-4.97041 4.02919495-8.99972 8.99944495-8.99972 4.06112 0 7.49392 2.69007 8.61392 6.38556zm.3012 1.37684c.0556.40449.0843.81755.0843 1.23732 0 4.97038-4.0292 8.99968-8.99942 8.99968-.41722 0-.83038-.0284-1.23724-.0844 1.17027 2.9075 4.01026 4.8843 7.23686 4.8843 1.4216 0 2.786-.3803 3.9805-1.0907.142-.0845.3126-.1066.4715-.0612l3.0739.8783-.8782-3.0741c-.0454-.1589-.0233-.3294.0612-.4715.7103-1.1945 1.0906-2.559 1.0906-3.9806 0-3.2295-1.9799-6.06818-4.884-7.2371z"></path>
            </svg>
          </div>
        </Link>
        <Link href={"/locations"}>
          <div
            className={`
             ${
               activeLocations
                 ? ` bg-[#454545] fill-white`
                 : ` hover:bg-[#454545] hover:fill-white`
             } w-[40px] h-[40px] duration-500
             rounded-md flex justify-center items-center
             cursor-pointer `}
          >
            <svg
              height="24"
              viewBox="0 0 18 24"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path d="m9 14.6667c-2.84032 0-5.14286-2.3878-5.14286-5.33337 0-2.94552 2.30254-5.33333 5.14286-5.33333 2.8403 0 5.1429 2.38781 5.1429 5.33333 0 2.94557-2.3026 5.33337-5.1429 5.33337zm0-1.3334c2.1302 0 3.8571-1.7908 3.8571-3.99997 0-2.20914-1.7269-4-3.8571-4-2.13024 0-3.85714 1.79086-3.85714 4 0 2.20917 1.7269 3.99997 3.85714 3.99997zm.43604 10.4899c-.24626.2357-.62582.2357-.87208 0-5.69061-5.4474-8.56396-10.2609-8.56396-14.48987 0-5.15465 4.02944-9.33333 9-9.33333 4.9706 0 9 4.17868 9 9.33333 0 4.22897-2.8734 9.04247-8.56396 14.48987zm7.27826-14.48987c0-4.41827-3.4538-8-7.7143-8-4.26048 0-7.71429 3.58173-7.71429 8 0 3.66907 2.55421 8.04717 7.71429 13.08847 5.1601-5.0413 7.7143-9.4194 7.7143-13.08847z"></path>
            </svg>
          </div>
        </Link>
        <Link href={"/managers"}>
          <div
            className={`
             ${
               activeManagers
                 ? ` bg-[#454545] fill-white`
                 : ` hover:bg-[#454545] hover:fill-white`
             } w-[40px] h-[40px] duration-500
             rounded-md flex justify-center items-center
             cursor-pointer `}
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path d="m24 19.2802c-.0008-.7008-.2031-1.3865-.5828-1.9758-.3797-.5892-.9208-1.057-1.559-1.3478l-5.4683-2.4889.1974-.1517c1.2275-.9496 2.127-2.2588 2.5727-3.74452.4457-1.48567.4154-3.0734-.0869-4.54097-.5022-1.46756-1.4511-2.74151-2.714-3.64354-1.2628-.90202-2.7763-1.38697-4.3287-1.38697s-3.06593.48495-4.32877 1.38697c-1.26284.90203-2.21178 2.17598-2.71401 3.64354-.50223 1.46757-.5326 3.0553-.08687 4.54097.44573 1.48572 1.34525 2.79492 2.57267 3.74452l.19747.1517-5.52912 2.4889c-.63817.2908-1.179297.7586-1.558994 1.3478-.379698.5893-.58197892 1.275-.582776 1.9758v1.0775c.00399853.9648.389368 1.8889 1.07218 2.5711.68281.6822 1.60776 1.0672 2.57339 1.0712h16.70883c.9657-.004 1.8906-.389 2.5734-1.0712s1.0682-1.6063 1.0722-2.5711zm-18.22785-11.82222c0-1.23064.36526-2.43364 1.04958-3.45688.68433-1.02324 1.65698-1.82076 2.79498-2.29171 1.13799-.47094 2.39019-.59416 3.59829-.35408 1.2081.24009 2.3178.8327 3.1888 1.70289.8709.8702 1.4641 1.97889 1.7044 3.18589.2403 1.20699.117 2.45807-.3544 3.59504s-1.2696 2.10877-2.2938 2.79247-2.2282 1.0486-3.46 1.0486c-1.6505-.004-3.23224-.6608-4.39932-1.8269-1.16708-1.166-1.82452-2.74631-1.82853-4.39532zm7.59495 11.12412-1.3215 1.3203-1.4127-1.3203v-.091l1.276-2.7014zm9.4177 1.7756c0 .644-.256 1.2616-.7118 1.717s-1.074.7112-1.7186.7112h-16.70883c-.64458 0-1.26275-.2558-1.71854-.7112-.45578-.4554-.71184-1.073-.71184-1.717v-1.0775c.00115-.467.13626-.924.38932-1.3167.25306-.3926.61346-.7046 1.03853-.899l6.25823-2.8379c.70158.3029 1.44353.5022 2.20253.5918h.2127l-1.64055 3.6575c-.04235.0895-.05632.1898-.04003.2874s.06205.188.13117.2589l1.88351 1.8819c.0438.044.0959.079.1532.1028.0574.0239.1189.0362.181.0362s.1236-.0123.181-.0362c.0574-.0238.1094-.0588.1532-.1028l1.9139-1.8819c.0691-.0709.1149-.1613.1312-.2589s.0023-.1979-.04-.2874l-1.7165-3.5968h.2127c.7658-.0973 1.5131-.307 2.2177-.6222l6.2582 2.8379c.4318.1833.8017.4868 1.0657.8742.2639.3875.4107.8427.4229 1.3112z"></path>
            </svg>
          </div>
        </Link>
        <Link href={"/settings"}>
          <div
            className={`
             ${
               activeSettings
                 ? ` bg-[#454545] fill-white`
                 : ` hover:bg-[#454545] hover:fill-white`
             } w-[40px] h-[40px] duration-500
             rounded-md flex justify-center items-center
             cursor-pointer `}
          >
            <svg
              height="24"
              viewBox="0 0 23 24"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path d="m17.3255 4.69111 1.7806-.36438c.759-.15532 1.5323.19248 1.9197.86346l.9351 1.61962c.3874.67098.3019 1.51456-.2121 2.09425l-1.2047 1.35854c.1041.5692.1569 1.15.1569 1.7374s-.0528 1.1682-.1569 1.7374l1.2047 1.3585c.514.5797.5995 1.4233.2121 2.0943l-.9351 1.6196c-.3874.671-1.1607 1.0188-1.9197.8635l-1.7806-.3644c-.8878.7567-1.9065 1.3472-3.0079 1.7388l-.5739 1.7215c-.245.735-.9328 1.2308-1.7076 1.2308h-1.8702c-.77474 0-1.46259-.4958-1.70759-1.2308l-.57384-1.7215c-1.10143-.3916-2.12011-.9821-3.00788-1.7388l-1.78061.3644c-.75905.1553-1.53233-.1925-1.91972-.8635l-.935084-1.6196c-.387388-.671-.3019597-1.5146.21208-2.0943l1.204694-1.3585c-.10411-.5692-.15692-1.15-.15692-1.7374s.05281-1.1682.15692-1.7374l-1.204694-1.35854c-.5140397-.57969-.599468-1.42327-.21208-2.09425l.935084-1.61962c.38739-.67098 1.16067-1.01878 1.91972-.86346l1.78061.36438c.88777-.75676 1.90645-1.3472 3.00788-1.73881l.57384-1.72151c.245-.735016.93285-1.23079 1.70759-1.23079h1.8702c.7748 0 1.4626.495774 1.7076 1.23079l.5739 1.72151c1.1014.39161 2.1201.98205 3.0079 1.73881zm-3.6653-.69432c-.1824-.05828-.3261-.20013-.3866-.38181l-.6683-2.00472c-.0816-.245-.3109-.41026-.5692-.41026h-1.8702c-.25822 0-.4875.16526-.56917.41026l-.66824 2.00472c-.06056.18168-.2042.32353-.38662.38181-1.14707.36646-2.19977.97713-3.08946 1.78595-.14167.1288-.33631.18225-.52389.14386l-2.07312-.42423c-.25302-.05177-.51078.06416-.6399.28782l-.93509 1.61962c-.12913.22366-.10066.50485.07069.69808l1.40246 1.58157c.12688.14309.17795.33804.1375.52494-.12593.582-.19003 1.1795-.19003 1.7856s.0641 1.2036.19003 1.7856c.04045.1869-.01062.3819-.1375.5249l-1.40246 1.5816c-.17135.1932-.19982.4744-.07069.6981l.93509 1.6196c.12912.2237.38688.3396.6399.2878l2.07312-.4242c.18758-.0384.38222.0151.52389.1439.88969.8088 1.94239 1.4194 3.08946 1.7859.18242.0583.32606.2001.38662.3818l.66824 2.0047c.08167.245.31095.4103.56917.4103h1.8702c.2583 0 .4876-.1653.5692-.4103l.6683-2.0047c.0605-.1817.2042-.3235.3866-.3818 1.147-.3665 2.1998-.9771 3.0894-1.7859.1417-.1288.3364-.1823.5239-.1439l2.0732.4242c.253.0518.5107-.0641.6399-.2878l.935-1.6196c.1292-.2237.1007-.5049-.0706-.6981l-1.4025-1.5816c-.1269-.143-.178-.338-.1375-.5249.1259-.582.19-1.1795.19-1.7856s-.0641-1.2036-.19-1.7856c-.0405-.1869.0106-.38185.1375-.52494l1.4025-1.58157c.1713-.19323.1998-.47442.0706-.69808l-.935-1.61962c-.1292-.22366-.3869-.33959-.6399-.28782l-2.0732.42423c-.1875.03839-.3822-.01506-.5239-.14386-.8896-.80882-1.9424-1.41949-3.0894-1.78595zm-2.5592 12.80321c-2.65094 0-4.79998-2.149-4.79998-4.8 0-2.65097 2.14904-4.8 4.79998-4.8 2.651 0 4.8 2.14903 4.8 4.8 0 2.651-2.149 4.8-4.8 4.8zm0-1.2c1.9883 0 3.6-1.6118 3.6-3.6s-1.6117-3.6-3.6-3.6c-1.9882 0-3.59997 1.6118-3.59997 3.6s1.61177 3.6 3.59997 3.6z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
