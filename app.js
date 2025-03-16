document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    const player = videojs('my-video', {
        fluid: true,
        autoplay: false,
        controls: true,
        preload: 'auto',
        playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
            children: [
                'playToggle',
                'volumePanel',
                'currentTimeDisplay',
                'timeDivider',
                'durationDisplay',
                'progressControl',
                'liveDisplay',
                'remainingTimeDisplay',
                'customControlSpacer',
                'playbackRateMenuButton',
                'fullscreenToggle'
            ]
        }
    });

    const channelsContainer = document.querySelector('.channels-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const closeSearchButton = document.getElementById('close-search');
    const searchResultsContainer = document.querySelector('.search-results-container');
    const currentChannelName = document.getElementById('current-channel-name');
    const currentCategory = document.getElementById('current-category');

    // Function to create channel cards
    function createChannelCard(channel) {
        const channelCard = document.createElement('div');
        channelCard.className = 'channel-card fade-in';
        channelCard.dataset.id = channel.id;

        // Create channel card content
        channelCard.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name}" class="channel-thumbnail">
            <div class="channel-details">
                <div class="channel-name">${channel.name}</div>
                <div class="channel-category">${channel.category}</div>
            </div>
            ${channel.isLive ? '<div class="live-badge">EN VIVO</div>' : ''}
        `;

        // Add click event to play the channel
        channelCard.addEventListener('click', () => {
            playChannel(channel);
            // If search overlay is open, close it
            if (!searchResults.classList.contains('hidden')) {
                searchResults.classList.add('hidden');
            }
        });

        return channelCard;
    }

    // Function to play a channel
    function playChannel(channel) {
        // Update player source
        player.src({
            src: channel.streamUrl,
            type: channel.streamUrl.includes('.m3u8') ? 'application/x-mpegURL' : 'application/dash+xml'
        });

        // Update channel info
        currentChannelName.textContent = channel.name;
        currentCategory.textContent = channel.category;

        // Start playing
        player.play().catch(error => {
            console.error('Error playing video:', error);
        });

        // Highlight the selected channel card
        document.querySelectorAll('.channel-card').forEach(card => {
            if (card.dataset.id == channel.id) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
    }

    // Function to display channels in rows (10 per row)
    function displayChannels(channelsToDisplay = channels) {
        channelsContainer.innerHTML = '';
        
        // Create rows with 10 channels each
        for (let i = 0; i < channelsToDisplay.length; i += 10) {
            const rowChannels = channelsToDisplay.slice(i, i + 10);
            const row = document.createElement('div');
            row.className = 'channel-row slide-up';
            
            // Add a small delay for each row to create a staggered animation effect
            row.style.animationDelay = `${i * 0.05}s`;
            
            rowChannels.forEach(channel => {
                row.appendChild(createChannelCard(channel));
            });
            
            channelsContainer.appendChild(row);
        }
    }

    // Function to handle search
    function handleSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            searchResults.classList.add('hidden');
            return;
        }
        
        // Filter channels based on search term
        const filteredChannels = channels.filter(channel => 
            channel.name.toLowerCase().includes(searchTerm) || 
            channel.category.toLowerCase().includes(searchTerm)
        );
        
        // Display search results
        searchResultsContainer.innerHTML = '';
        
        if (filteredChannels.length === 0) {
            searchResultsContainer.innerHTML = '<p class="no-results">No se encontraron canales</p>';
        } else {
            filteredChannels.forEach(channel => {
                searchResultsContainer.appendChild(createChannelCard(channel));
            });
        }
        
        // Show search overlay
        searchResults.classList.remove('hidden');
    }

    // Event listeners
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    closeSearchButton.addEventListener('click', () => {
        searchResults.classList.add('hidden');
        searchInput.value = '';
    });

    // Initialize the app
    displayChannels();

    // Play the first channel by default (optional)
    if (channels.length > 0) {
        // Find the first live channel
        const firstLiveChannel = channels.find(channel => channel.isLive);
        if (firstLiveChannel) {
            playChannel(firstLiveChannel);
        } else {
            playChannel(channels[0]);
        }
    }

    // Add CSS class for selected channel
    const style = document.createElement('style');
    style.textContent = `
        .channel-card.selected {
            border: 2px solid #ff4081;
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(255, 64, 129, 0.5);
        }
    `;
    document.head.appendChild(style);
});