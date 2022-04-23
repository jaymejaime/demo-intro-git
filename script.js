 const title = document.getElementById('title');
            const text = "Intro to Git and Github";
            const animateText = (text, element, intervalDuration) => {
              let count = 0;
              const interval = setInterval(() => {
                const part = text.substring(0, ++count);
                requestAnimationFrame(() => {
                  element.textContent = part;
                });
                if (count === text.length) {
                  clearInterval(interval);
                }
              }, intervalDuration);
            };

            animateText(text, title, 100);