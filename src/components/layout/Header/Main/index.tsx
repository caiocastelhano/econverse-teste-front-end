import styles from './styles.module.scss';

export default function Main() {
  return (
    <div className={styles.mainbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="images/logo.png" alt="Econverse" />
        </div>

        <form className={styles.search} role="search">
          <input
            type="text"
            placeholder="O que você está buscando?"
            aria-label="Campo de busca"
          />
          <button type="submit" aria-label="Buscar">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1316)">
            <path d="M12.6875 21.875C17.7616 21.875 21.875 17.7616 21.875 12.6875C21.875 7.61338 17.7616 3.5 12.6875 3.5C7.61338 3.5 3.5 7.61338 3.5 12.6875C3.5 17.7616 7.61338 21.875 12.6875 21.875Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.1837 19.1843L24.4994 24.5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_1316">
            <rect width="28" height="28" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </button>
        </form>

        <nav className={styles.actions} aria-label="Ações do usuário">
          <button aria-label="Meus pedidos"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8896 0.900391H3.4707L3.33984 0.911133C3.0814 0.955874 2.84902 1.13229 2.73633 1.36914L2.69043 1.49219V1.49316L0.925781 8.20996L0.924805 8.21094C0.908061 8.27652 0.90026 8.34442 0.900391 8.41211V24.2939C0.900434 24.7188 1.28125 25.0996 1.70605 25.0996H24.2939C24.7188 25.0996 25.0996 24.7188 25.0996 24.2939V15.8232C25.0994 15.3985 24.7187 15.0176 24.2939 15.0176H14.8643V13.3525C14.8673 12.9642 14.5565 12.6025 14.1719 12.5479H14.1699C13.9828 12.5247 13.7888 12.5698 13.6309 12.6729L9.74805 15.1436C9.51333 15.2929 9.40242 15.5634 9.40234 15.8232C9.40234 16.0832 9.51325 16.3545 9.74805 16.5039L13.6299 18.9736L13.6309 18.9746C13.8815 19.1316 14.191 19.0988 14.4307 18.9668C14.6703 18.8348 14.863 18.5906 14.8643 18.2949V16.6289H23.4883V23.4883H2.51172V9.21777H23.4883V12.293L23.4912 12.3721C23.5296 12.7682 23.8919 13.1103 24.2939 13.1104C24.7226 13.1104 25.1055 12.7216 25.0996 12.293V8.41113C25.0992 8.317 25.0825 8.22303 25.0498 8.13477L22.5791 1.41797V1.41699C22.4722 1.13572 22.1981 0.927801 21.8984 0.900391L21.8896 0.899414V0.900391ZM13.2529 16.832L11.6758 15.8232L13.2529 14.8145V16.832ZM12.5469 7.60547H2.75098L4.08789 2.51172H12.5469V7.60547ZM23.1357 7.60547H14.1592V2.51172H21.2578L23.1357 7.60547Z" fill="#9F9F9F" stroke="#9F9F9F" stroke-width="0.2"/>
            </svg>
            </button>
          <button aria-label="Favoritos"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1268)">
<path d="M16 27C16 27 3.5 20 3.5 11.5C3.50025 9.99768 4.02082 8.5418 4.97318 7.37991C5.92555 6.21801 7.25093 5.42181 8.72399 5.12669C10.197 4.83156 11.7269 5.05572 13.0533 5.76105C14.3798 6.46638 15.421 7.60935 16 8.99564L16 8.99565C16.579 7.60936 17.6202 6.46639 18.9467 5.76106C20.2731 5.05572 21.8029 4.83156 23.276 5.12669C24.7491 5.42181 26.0745 6.21801 27.0268 7.3799C27.9792 8.5418 28.4997 9.99768 28.5 11.5C28.5 20 16 27 16 27Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_1268">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
          <button aria-label="Minha conta"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1254)">
<path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#9F9F9F" stroke-width="2" stroke-miterlimit="10"/>
<path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="#9F9F9F" stroke-width="2" stroke-miterlimit="10"/>
<path d="M7.97485 24.9218C8.72812 23.4408 9.8765 22.1971 11.2929 21.3284C12.7093 20.4598 14.3384 20 16 20C17.6615 20 19.2906 20.4598 20.707 21.3284C22.1234 22.1971 23.2718 23.4407 24.0251 24.9217" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_1254">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
          <button aria-label="Carrinho"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1261)">
<path d="M23 23H8.72727L5.2402 3.82112C5.19831 3.5907 5.07688 3.3823 4.89708 3.23225C4.71728 3.08219 4.49052 3 4.25633 3H2" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 28C24.3807 28 25.5 26.8807 25.5 25.5C25.5 24.1193 24.3807 23 23 23C21.6193 23 20.5 24.1193 20.5 25.5C20.5 26.8807 21.6193 28 23 28Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.81818 18H23.5127C23.981 18 24.4346 17.8356 24.7942 17.5355C25.1538 17.2354 25.3966 16.8186 25.4804 16.3578L27 8H6" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_1261">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
        </nav>
      </div>
    </div>
  );
}
