import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  CircleArrowUp,
  Clock3,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MoveUpLeft,
  Play,
  Send,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { toast } from "sonner";

const assets = {
  hero: "/manus-storage/A11_3cff2ae0.jpg",
  studio: "/manus-storage/A11_3cff2ae0.jpg",
  fruit: "/manus-storage/AYSHA44_55076069.jpeg",
  mood: "/manus-storage/AYSHAH 33_2f609ab5.jpg",
  card: "/manus-storage/ss2_9b9be401.jpg",
  sketch: "/manus-storage/a3_16a52ccf.jpeg",
  detail: "/manus-storage/a5_92964832.jpeg",
};

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "التدريب الإبداعي",
    description: "جلسات عملية تساعدك على تحويل الفكرة الأولى إلى مشروع واضح، جذاب، وقابل للتنفيذ.",
    tags: ["بناء الفكرة", "التفكير التصميمي"],
  },
  {
    number: "02",
    icon: UsersRound,
    title: "ورش العمل الجماعية",
    description: "تجارب تدريبية تفاعلية للفرق والطالبات تجمع بين التطبيق، النقاش، وصناعة الأثر.",
    tags: ["ورش حضورية", "تعلّم تعاوني"],
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "تطوير المشاريع",
    description: "مرافقة مخصصة لصقل مشروعك، ترتيب مراحله، وتجهيز مخرجاته بثقة واحتراف.",
    tags: ["استشارة", "ملف الإنجاز"],
  },
];

const projects = [
  { title: "مساحة تُلهم", category: "تجربة مكانية", image: assets.studio, color: "sage" },
  { title: "لغة بصرية مرحة", category: "هوية بصرية", image: assets.fruit, color: "orange" },
  { title: "من الفكرة إلى الأثر", category: "تطوير مشروع", image: assets.mood, color: "peach" },
  { title: "صناعة التفاصيل", category: "تدريب عملي", image: assets.card, color: "lilac" },
  { title: "بدايات مرسومة", category: "توجيه إبداعي", image: assets.sketch, color: "blue" },
  { title: "أثر ملموس", category: "ورشة تطبيقية", image: assets.detail, color: "yellow" },
];

const filters = ["الكل", "تجربة مكانية", "هوية بصرية", "تطوير مشروع", "تدريب عملي"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("الكل");
  const [submitted, setSubmitted] = useState(false);

  const visibleProjects = useMemo(
    () => (filter === "الكل" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("وصلت رسالتك بنجاح", { description: "سأعود إليكِ خلال يومي عمل." });
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="العودة إلى البداية">
            <span className="brand-mark"><MoveUpLeft size={18} strokeWidth={2.4} /></span>
            <span className="brand-copy"><strong>Ayshah</strong><small>Training Task</small></span>
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="التنقل الرئيسي">
            <button onClick={() => scrollTo("about")}>عن عائشة</button>
            <button onClick={() => scrollTo("services")}>خدمات التدريب</button>
            <button onClick={() => scrollTo("portfolio")}>حقيبة الأعمال</button>
            <button onClick={() => scrollTo("contact")}>تواصل</button>
          </nav>
          <div className="header-actions">
            <button className="header-link" onClick={() => scrollTo("contact")}>لنبدأ معًا <ArrowLeft size={16} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section section-pad">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="eyebrow-dot" /> تدريب يصنع فرقًا</div>
            <h1>نحوّل شغفكِ إلى <em>أثر</em> يُرى.</h1>
            <p className="hero-lede">رحلة تدريبية إنسانية وعملية، نرتّب فيها أفكارك، نكشف قوتك، ونمنح مشروعك مساحة ليكبر بثقة.</p>
            <div className="hero-buttons">
              <button className="button button-primary" onClick={() => scrollTo("services")}>اكتشفي الخدمات <ArrowLeft size={17} /></button>
              <button className="button button-quiet" onClick={() => scrollTo("portfolio")}><span className="play-icon"><Play size={13} fill="currentColor" /></span> شاهدي الأعمال</button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span className="avatar avatar-one">س</span><span className="avatar avatar-two">ن</span><span className="avatar avatar-three">ل</span><span className="avatar avatar-more">+</span></div>
              <div><strong>أكثر من 120 متدربة</strong><span>خطون أولى أكثر وضوحًا</span></div>
            </div>
          </div>
          <div className="hero-visual reveal-up reveal-delay">
            <div className="hero-image-wrap"><img src={assets.hero} alt="مساحة عمل إبداعية مضيئة" /></div>
            <div className="floating-note note-top"><Sparkles size={17} /><span>فكرة<br /><strong>تنمو هنا</strong></span></div>
            <div className="floating-note note-bottom"><span className="note-number">03</span><span>مراحل عملية<br /><strong>نتائج ملموسة</strong></span></div>
            <span className="visual-arch" />
          </div>
        </section>

        <div className="marquee-strip" aria-label="كلمات ملهمة">
          <div className="marquee-track"><span>تعلّمي</span><i>✳</i><span>جرّبي</span><i>✳</i><span>طوّري</span><i>✳</i><span>أثّري</span><i>✳</i><span>تعلّمي</span><i>✳</i><span>جرّبي</span><i>✳</i><span>طوّري</span><i>✳</i><span>أثّري</span><i>✳</i></div>
        </div>

        <section id="about" className="about-section section-pad">
          <div className="section-intro">
            <div className="eyebrow"><span className="eyebrow-dot" /> عن التجربة</div>
            <h2>التدريب ليس معلومات فقط،<br /><em>بل مساحة لتتغيّري.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p className="lead-text">أؤمن أن لدى كل شخص فكرة تستحق أن ترى النور. دوري أن أكون معكِ في المسافة بين «أريد أن أبدأ» و«أنا فخورة بما صنعت».</p>
              <p>بأسلوب يجمع البساطة والعمق، نصنع خطة قريبة منكِ، ونحوّل التعلم إلى خطوات صغيرة لها معنى ونتيجة.</p>
              <button className="text-link" onClick={() => scrollTo("contact")}>تعرّفي على طريقة العمل <ArrowLeft size={17} /></button>
            </div>
            <div className="about-stats">
              <div className="stat-card stat-card-accent"><span>+</span><strong>8</strong><p>سنوات من التعلم<br />وصناعة التجارب</p></div>
              <div className="stat-card"><strong>94%</strong><p>من المتدربات<br />أكملن مشاريعهن</p><CircleArrowUp size={28} /></div>
              <div className="quote-card"><span className="quote-mark">“</span><p>أقرب طريق لفكرة كبيرة هو خطوة صغيرة محسوبة.</p><span className="quote-line" /></div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-pad section-dark">
          <div className="section-heading-row">
            <div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> خدمات التدريب</div><h2>ما الذي يمكن أن<br /><em>نصنعه معًا؟</em></h2></div>
            <p>اختاري المساحة الأقرب لاحتياجك، وسأصمم لكِ تجربة تدريبية واضحة، دافئة، ومليئة بالتطبيق.</p>
          </div>
          <div className="services-list">
            {services.map(({ number, icon: Icon, title, description, tags }) => (
              <article className="service-row" key={number}>
                <span className="service-number">{number}</span><div className="service-icon"><Icon size={23} /></div><div className="service-content"><h3>{title}</h3><p>{description}</p><div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpLeft className="service-arrow" size={24} />
              </article>
            ))}
          </div>
          <div className="services-footer"><span>كل تجربة تبدأ بسؤال جيد</span><button onClick={() => scrollTo("contact")}>احجزي جلسة تعارف <ArrowLeft size={17} /></button></div>
        </section>

        <section id="portfolio" className="portfolio-section section-pad">
          <div className="portfolio-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> حقيبة الأعمال</div><h2>أفكار خرجت من الورق<br /><em>وصارت أثرًا.</em></h2></div><p>نماذج من رحلات وتجارب صممتها بعناية لتمنح كل فكرة شكلها الخاص.</p></div>
          <div className="filter-row" role="tablist" aria-label="تصفية الأعمال">{filters.map((item) => <button key={item} className={filter === item ? "filter-button active" : "filter-button"} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div>
          <div className="portfolio-grid">{visibleProjects.map((project) => <article className={`project-card project-${project.color}`} key={project.title}><div className="project-image"><img src={project.image} alt={project.title} /><span className="project-view"><ArrowUpLeft size={19} /></span></div><div className="project-info"><div><span>{project.category}</span><h3>{project.title}</h3></div><ChevronLeft size={20} /></div></article>)}</div>
          <div className="portfolio-bottom"><span>مجموعة مختارة من المشاريع والتجارب</span><button className="button button-outline" onClick={() => toast("نعمل على تحديث الحقيبة باستمرار")}>شاهدِي الحقيبة كاملة <ArrowLeft size={17} /></button></div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-card">
            <div className="contact-intro"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> لنتحدث</div><h2>جاهزة لخطوتك<br /><em>القادمة؟</em></h2><p>اكتبي لي عن فكرتك، وسأعود إليكِ لنحدد معًا أفضل بداية ممكنة.</p><div className="contact-details"><a href="mailto:hello@ayshah.training"><Mail size={17} /> hello@ayshah.training</a><a href="#contact" onClick={(event) => { event.preventDefault(); toast("سيتم تفعيل واتساب قريبًا"); }}><MessageCircle size={17} /> واتساب التدريب</a></div></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>الاسم الكريم<input name="name" required placeholder="اكتبي اسمك هنا" /></label>
              <label>البريد الإلكتروني<input name="email" type="email" required placeholder="name@email.com" /></label>
              <label>ما الذي يمكنني مساعدتكِ فيه؟<textarea name="message" required placeholder="أخبريني قليلًا عن فكرتك أو احتياجك..." rows={4} /></label>
              <button className="button button-light" type="submit">{submitted ? <><Check size={17} /> تم الإرسال</> : <>أرسلي رسالتك <Send size={16} /></>}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-inner"><div className="brand"><span className="brand-mark"><MoveUpLeft size={18} strokeWidth={2.4} /></span><span className="brand-copy"><strong>Ayshah</strong><small>Training Task</small></span></div><p>نصنع مساحة تنمو فيها الأفكار.</p><div className="footer-socials"><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:hello@ayshah.training" aria-label="البريد الإلكتروني"><Mail size={18} /></a></div><span className="footer-copy">© 2026 Ayshah Training Task</span></div></footer>
      <button className="back-top" onClick={() => scrollTo("top")} aria-label="العودة للأعلى"><ArrowLeft size={17} className="back-top-icon" /></button>
    </div>
  );
}
