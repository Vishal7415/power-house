<?php
if (defined('HEADER_INCLUDED')) return;
define('HEADER_INCLUDED', true);
require_once __DIR__ . '/db.php'; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo GYM_NAME; ?> — Train Like A Beast | Sehore's #1 Gym</title>
    <meta name="description" content="The Fitness Empire — Sehore's premium gym. Build strength, burn fat, transform yourself. Modern equipment, certified trainers, affordable plans starting ₹1200.">
    <meta name="keywords" content="gym sehore, fitness empire, best gym sehore, gym membership sehore, weight loss sehore, muscle building">

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Google Fonts: Bebas Neue + Poppins + Montserrat -->
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Font Awesome 6 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* ======================================================
           THE FITNESS EMPIRE — DARK GOLD DESIGN SYSTEM
        ====================================================== */
        :root {
            --gold:         #D4AF37;
            --gold-light:   #F0D060;
            --gold-dark:    #A0820A;
            --gold-glow:    rgba(212,175,55,0.18);
            --gold-border:  rgba(212,175,55,0.25);
            --black:        #0A0A0A;
            --dark:         #111111;
            --dark-2:       #161616;
            --dark-3:       #1C1C1C;
            --dark-4:       #222222;
            --card-bg:      rgba(22,22,22,0.95);
            --text:         rgba(255,255,255,0.87);
            --text-muted:   rgba(255,255,255,0.45);
            --accent-grad:  linear-gradient(135deg, #F0D060 0%, #D4AF37 40%, #A0820A 100%);
            --hero-overlay: linear-gradient(160deg, rgba(0,0,0,0.85) 0%, rgba(10,8,0,0.72) 100%);
            --shadow-gold:  0 8px 40px rgba(212,175,55,0.22);
            --shadow-dark:  0 12px 50px rgba(0,0,0,0.6);
            --radius:       16px;
        }

        /* BASE */
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body {
            background: var(--black);
            color: var(--text);
            font-family: 'Poppins', sans-serif;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }
        h1,h2,h3 { font-family: 'Bebas Neue', sans-serif; letter-spacing:2px; color:#fff; }
        h4,h5,h6 { font-family: 'Montserrat', sans-serif; color:#fff; }
        p { line-height:1.75; }

        /* SCROLLBAR */
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#111; }
        ::-webkit-scrollbar-thumb { background:var(--gold); border-radius:3px; }

        /* UTILITIES */
        .gold { color:var(--gold) !important; }
        .gradient-text {
            background: var(--accent-grad);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .section-pad { padding: 100px 0; }
        .section-label {
            display:inline-block;
            font-family:'Poppins',sans-serif;
            font-size:0.72rem;
            font-weight:700;
            letter-spacing:4px;
            text-transform:uppercase;
            color:var(--gold);
            border:1px solid var(--gold-border);
            padding:6px 18px;
            border-radius:50px;
            margin-bottom:18px;
            background:rgba(212,175,55,0.06);
        }
        .section-heading {
            font-family:'Bebas Neue',sans-serif;
            font-size: clamp(2.2rem, 5vw, 4rem);
            letter-spacing:3px;
            line-height:1.05;
            color:#fff;
            margin-bottom:1rem;
        }
        .section-sub {
            font-size:1rem;
            color:var(--text-muted);
            max-width:560px;
            margin:0 auto;
            line-height:1.8;
        }
        .gold-line {
            width:60px; height:3px;
            background:var(--accent-grad);
            border-radius:3px;
            margin:16px auto 0;
        }

        /* BUTTONS */
        .btn-gold {
            background: var(--accent-grad);
            color:#000 !important;
            font-family:'Montserrat',sans-serif;
            font-weight:800;
            font-size:0.85rem;
            letter-spacing:1.5px;
            text-transform:uppercase;
            border:none;
            padding:14px 36px;
            border-radius:10px;
            transition:all 0.35s cubic-bezier(.175,.885,.32,1.275);
            box-shadow: var(--shadow-gold);
            display:inline-flex;
            align-items:center;
            gap:8px;
            text-decoration:none;
            cursor:pointer;
        }
        .btn-gold:hover {
            transform:translateY(-3px) scale(1.03);
            box-shadow:0 16px 50px rgba(212,175,55,0.4);
            color:#000 !important;
        }
        .btn-outline-gold {
            background:transparent;
            border:2px solid var(--gold);
            color:var(--gold) !important;
            font-family:'Montserrat',sans-serif;
            font-weight:700;
            font-size:0.85rem;
            letter-spacing:1.5px;
            text-transform:uppercase;
            padding:12px 34px;
            border-radius:10px;
            transition:all 0.35s ease;
            display:inline-flex;
            align-items:center;
            gap:8px;
            text-decoration:none;
            cursor:pointer;
        }
        .btn-outline-gold:hover {
            background:var(--gold);
            color:#000 !important;
            transform:translateY(-2px);
            box-shadow:var(--shadow-gold);
        }
        .btn-whatsapp {
            background:linear-gradient(135deg,#25d366,#128C7E);
            color:#fff !important;
            font-family:'Montserrat',sans-serif;
            font-weight:700;
            font-size:0.85rem;
            letter-spacing:1px;
            text-transform:uppercase;
            border:none;
            padding:14px 30px;
            border-radius:10px;
            transition:all 0.35s ease;
            display:inline-flex;
            align-items:center;
            gap:8px;
            text-decoration:none;
        }
        .btn-whatsapp:hover {
            transform:translateY(-2px);
            box-shadow:0 12px 35px rgba(37,211,102,0.35);
            color:#fff !important;
        }

        /* ===== NAVBAR ===== */
        .navbar {
            position:fixed;
            top:0; left:0; right:0;
            z-index:1000;
            padding:20px 0;
            background:transparent;
            transition:all 0.4s ease;
        }
        .navbar.scrolled {
            padding:12px 0;
            background:rgba(10,10,10,0.96);
            backdrop-filter:blur(20px);
            -webkit-backdrop-filter:blur(20px);
            border-bottom:1px solid var(--gold-border);
            box-shadow:0 4px 30px rgba(0,0,0,0.5);
        }
        .navbar-brand {
            font-family:'Bebas Neue',sans-serif;
            font-size:1.7rem;
            letter-spacing:3px;
            background:var(--accent-grad);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            background-clip:text;
            text-decoration:none;
            display:flex;
            align-items:center;
            gap:10px;
        }
        .navbar-brand i { color:var(--gold); -webkit-text-fill-color:var(--gold); font-size:1.4rem; }
        .nav-link {
            color:rgba(255,255,255,0.75) !important;
            font-family:'Poppins',sans-serif;
            font-weight:500;
            font-size:0.9rem;
            letter-spacing:0.5px;
            padding:8px 14px !important;
            position:relative;
            transition:color 0.3s ease;
        }
        .nav-link::after {
            content:'';
            position:absolute;
            bottom:2px; left:50%;
            transform:translateX(-50%);
            width:0; height:2px;
            background:var(--accent-grad);
            transition:width 0.3s ease;
            border-radius:2px;
        }
        .nav-link:hover, .nav-link.active { color:#fff !important; }
        .nav-link:hover::after, .nav-link.active::after { width:60%; }
        .navbar-toggler {
            border:1px solid var(--gold-border);
            padding:6px 10px;
            background:rgba(212,175,55,0.08);
        }
        .navbar-toggler-icon {
            background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(212,175,55,1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        /* ===== CARDS (DARK GOLD) ===== */
        .dark-card {
            background:var(--dark-3);
            border:1px solid var(--gold-border);
            border-radius:var(--radius);
            transition:all 0.4s cubic-bezier(.175,.885,.32,1.275);
            overflow:hidden;
        }
        .dark-card:hover {
            transform:translateY(-8px);
            border-color:var(--gold);
            box-shadow:var(--shadow-gold);
        }

        /* ===== WHATSAPP FLOAT ===== */
        .whatsapp-float {
            position:fixed;
            bottom:30px; right:30px;
            background:linear-gradient(135deg,#25d366,#128C7E);
            width:60px; height:60px;
            border-radius:18px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:28px;
            color:#fff !important;
            box-shadow:0 6px 30px rgba(37,211,102,0.4);
            z-index:9999;
            text-decoration:none;
            transition:all 0.3s ease;
            animation:bounceIn 1s ease 2s both;
        }
        .whatsapp-float:hover {
            transform:scale(1.12) translateY(-4px);
            box-shadow:0 12px 40px rgba(37,211,102,0.5);
            color:#fff !important;
        }

        /* ===== FORMS ===== */
        .form-control, .form-select {
            background:var(--dark-4);
            border:1px solid rgba(255,255,255,0.08);
            color:#fff;
            border-radius:10px;
            padding:13px 16px;
            font-family:'Poppins',sans-serif;
            font-size:0.9rem;
            transition:all 0.3s ease;
        }
        .form-control:focus, .form-select:focus {
            background:var(--dark-4);
            border-color:var(--gold);
            color:#fff;
            box-shadow:0 0 0 3px rgba(212,175,55,0.15);
        }
        .form-control::placeholder { color:var(--text-muted); }
        .form-label {
            color:rgba(255,255,255,0.7);
            font-size:0.8rem;
            font-weight:600;
            letter-spacing:1.5px;
            text-transform:uppercase;
            margin-bottom:8px;
            display:block;
        }
        .form-select option { background:var(--dark-3); }

        /* ===== ANIMATE ON SCROLL ===== */
        .aos {
            opacity:0;
            transform:translateY(40px);
            transition:opacity 0.8s ease, transform 0.8s cubic-bezier(.175,.885,.32,1.275);
        }
        .aos.visible { opacity:1; transform:translateY(0); }
        .aos-left { opacity:0; transform:translateX(-40px); transition:opacity 0.8s ease, transform 0.8s ease; }
        .aos-left.visible { opacity:1; transform:translateX(0); }
        .aos-right { opacity:0; transform:translateX(40px); transition:opacity 0.8s ease, transform 0.8s ease; }
        .aos-right.visible { opacity:1; transform:translateX(0); }

        /* ===== ANIMATIONS ===== */
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-25px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInUp   { from{opacity:0;transform:translateY(35px)} to{opacity:1;transform:translateY(0)} }
        @keyframes bounceIn   { 0%{opacity:0;transform:scale(0.3)} 60%{transform:scale(1.1)} 100%{opacity:1;transform:scale(1)} }
        @keyframes float      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse      { 0%,100%{box-shadow:0 0 0 0 rgba(212,175,55,0.4)} 70%{box-shadow:0 0 0 15px rgba(212,175,55,0)} }
        @keyframes marquee    { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes glow       { 0%,100%{text-shadow:0 0 10px rgba(212,175,55,0.3)} 50%{text-shadow:0 0 30px rgba(212,175,55,0.8),0 0 60px rgba(212,175,55,0.4)} }
        @keyframes starPop    { from{transform:scale(0) rotate(-20deg);opacity:0} to{transform:scale(1) rotate(0);opacity:1} }

        /* ===== FOOTER ===== */
        .footer {
            background:var(--dark-2);
            border-top:1px solid var(--gold-border);
            padding:80px 0 30px;
            position:relative;
        }
        .footer::before {
            content:'';
            position:absolute;
            top:0; left:0; right:0;
            height:3px;
            background:var(--accent-grad);
        }
        .footer-link {
            color:var(--text-muted);
            text-decoration:none;
            display:block;
            padding:5px 0;
            font-size:0.9rem;
            transition:all 0.3s ease;
        }
        .footer-link:hover { color:var(--gold); transform:translateX(5px); }
        .social-icon {
            width:44px; height:44px;
            border-radius:12px;
            display:flex;
            align-items:center;
            justify-content:center;
            border:1px solid var(--gold-border);
            background:var(--gold-glow);
            color:var(--gold);
            font-size:1.1rem;
            text-decoration:none;
            transition:all 0.3s ease;
        }
        .social-icon:hover {
            background:var(--gold);
            color:#000;
            transform:translateY(-3px);
            box-shadow:var(--shadow-gold);
        }

        /* ===== RESPONSIVE ===== */
        @media(max-width:768px) {
            .section-pad { padding:70px 0; }
            .navbar { background:rgba(10,10,10,0.97); }
        }
    </style>
</head>
<body>

<!-- ===== FIXED NAVBAR ===== -->
<nav class="navbar navbar-expand-lg" id="mainNav">
    <div class="container">
        <a class="navbar-brand" href="index.php">
            <i class="fas fa-dumbbell"></i> THE FITNESS EMPIRE
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
            <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                <li class="nav-item"><a class="nav-link" href="index.php#hero">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php#plans">Plans</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php#transformations">Transformations</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php#gallery">Gallery</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php#founder">About</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php#contact">Contact</a></li>
                <li class="nav-item ms-lg-2">
                    <a class="btn-gold" href="membership.php#join" style="padding:10px 24px;font-size:0.8rem;">
                        <i class="fas fa-bolt"></i> JOIN NOW
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<script>
// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
});
// AOS (Animate on scroll)
const runAOS = () => {
    document.querySelectorAll('.aos, .aos-left, .aos-right').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible');
    });
};
window.addEventListener('scroll', runAOS);
window.addEventListener('load', runAOS);
</script>

<?php if (isset($db_error) && $db_error): ?>
<div class="alert alert-danger mb-0 text-center rounded-0">
    <i class="fas fa-exclamation-triangle me-2"></i> <?php echo $db_error; ?>
</div>
<?php endif; ?>
