import Image from "next/image";

export default function Home() {
  return (
   <div>
    <div id="content">
      <Image src="/webSite.png" alt="content" width={5000} height={5000} id="contentİmage" />
      <input type="button" value="Get Started" className="button" />
      <input type="button" value="Buy A Website" className="button" />
    </div>
    <aside id="aside">
      <Image src={"/asideBg.png"} width={1000} height={1000} alt="resim"></Image>
      <p>Neden Bir Web Sitesine Sahip Olmalısınız?</p>
      <p>Siz bir Websitesine sahip olmadığınız sürece sadece yakınınızdaki bireylere ulaşabilirsiniz.
         Bu sorunu çözmek için bir sosyal medya hesabı ve ya bir web sitesine ihtiyaç duyarsınız.
         Sosyal medya hesabı ilk olarak mantıklı gelse de kitle sayısının az olması , herkesin bu sosyal
         medya platformunu kullanmaması gibi nedenlerle büyük bir kitleye ulaşamazsınız. Ve kazandığınız gelirin çoğunu 
         bu platforma vermeniz gerekir. Bu sorunların hiçbiri websitelerinde bulunmaz. Genel ağa (internet) erişimi olan 
         herkes bu siteye erişebilir. Siteye koyacağınız reklamlar sayesinde size maddi destekte de bulunur</p>
    </aside>
   </div>
  );
}
