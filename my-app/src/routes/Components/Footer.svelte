<script>
    const socialLinks = [
      {
        name: 'Discord',
        url: 'https://discord.gg/bzmWNvRnJG',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>`
      },
      {
        name: 'Twitter',
        url: 'https://x.com/CsFallout',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>`
      },
    ];
  
    const legalLinks = [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Contact', href: '/contact' }
    ];
  </script>
  
  <footer class="bg-skyblue-1 py-10">
    <div class="container mx-auto px-10">
      <div class="grid gap-10 md:grid-cols-4">
        <!-- Logo & Description -->
        <div class="md:col-span-2">
          <img src="/Logo.webp" class="h-10" alt="GrowGG" />
          <p class="text-white-2 ">
            Level up your CS gameplay with professional-grade demo analysis and insights.
          </p>
        </div>
  
        <!-- Social Links -->
        <div>
          <h4 class="font-header text-2xl text-white-1 mb-4">Connect</h4>
          <div class="flex gap-4">
            {#each socialLinks as { name, url, icon }}
             <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-white-2 hover:text-NeonBlue-1 transition-colors duration-200"
                aria-label={name}
              >
                {@html icon}
              </a>
            {/each}
          </div>
        </div>
  
        <!-- Legal Links -->
        <div>
          <h4 class="font-header text-2xl text-white-1 mb-4">Legal</h4>
          <ul class="space-y-2">
            {#each legalLinks as { name, href }}
              <li>
                <a
                  {href}
                  class="text-white-2 hover:text-NeonBlue-1 transition-colors duration-200"
                >
                  {name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
  
      <!-- Bottom Bar -->
      <div class="mt-10 pt-8 border-t border-white-5/20">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white-3 text-sm">
            © {new Date().getFullYear()} GrowGG. All rights reserved.
          </p>
          <p class="text-white-4 text-sm">
            Made with ❤️ for the CS community
          </p>
        </div>
      </div>
    </div>
  </footer>