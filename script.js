document.addEventListener('DOMContentLoaded', function() {
    const levels = document.querySelectorAll('.level');
    let currentIndex = 0;
    
    // Set the first level as active by default
    levels[currentIndex].classList.add('active');
    
    // Handle keyboard navigation (left/right arrows and B button for selection)
    document.addEventListener('keydown', function(event) {
        // Left arrow key
        if (event.key === 'ArrowLeft') {
            navigateLeft();
        }
        // Right arrow key
        else if (event.key === 'ArrowRight') {
            navigateRight();
        }
        // B button (using 'b' key as substitute)
        else if (event.key === 'b' || event.key === 'B') {
            selectLevel();
        }
    });
    
    // Variables for gamepad state tracking
    let gamepadInterval;
    let previousGamepadState = {};
    
    function startGamepadDetection() {
        gamepadInterval = setInterval(checkGamepad, 100);
        console.log('Gamepad detection started');
    }
    
    function checkGamepad() {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        
        for (let i = 0; i < gamepads.length; i++) {
            const gamepad = gamepads[i];
            
            if (gamepad) {
                console.log('Gamepad detected:', gamepad.id);
                
                // Initialize previous state if needed
                if (!previousGamepadState[gamepad.index]) {
                    previousGamepadState[gamepad.index] = {
                        buttons: Array(gamepad.buttons.length).fill(false),
                        axes: Array(gamepad.axes.length).fill(0)
                    };
                }
                
                // Check D-pad (could be buttons or axes depending on the controller)
                // D-pad as buttons (common for many controllers)
                if (gamepad.buttons.length >= 15) { // Make sure we have enough buttons
                    // D-pad left (usually button 14)
                    if (gamepad.buttons[14] && gamepad.buttons[14].pressed && 
                        !previousGamepadState[gamepad.index].buttons[14]) {
                        navigateLeft();
                        console.log('D-pad left pressed');
                    }
                    
                    // D-pad right (usually button 15)
                    if (gamepad.buttons[15] && gamepad.buttons[15].pressed && 
                        !previousGamepadState[gamepad.index].buttons[15]) {
                        navigateRight();
                        console.log('D-pad right pressed');
                    }
                }
                
                // D-pad as axes (common for many controllers)
                if (gamepad.axes.length >= 1) {
                    // Left on axis 0 (horizontal axis)
                    if (gamepad.axes[0] <= -0.5 && previousGamepadState[gamepad.index].axes[0] > -0.5) {
                        navigateLeft();
                        console.log('Left on axis');
                    }
                    
                    // Right on axis 0 (horizontal axis)
                    if (gamepad.axes[0] >= 0.5 && previousGamepadState[gamepad.index].axes[0] < 0.5) {
                        navigateRight();
                        console.log('Right on axis');
                    }
                }
                
                // NES B button (could be different buttons depending on the controller)
                // Try common mappings
                const possibleBButtons = [1, 0, 2]; // Different possible B button mappings
                
                for (const buttonIndex of possibleBButtons) {
                    if (gamepad.buttons.length > buttonIndex && 
                        gamepad.buttons[buttonIndex] && 
                        gamepad.buttons[buttonIndex].pressed && 
                        !previousGamepadState[gamepad.index].buttons[buttonIndex]) {
                        selectLevel();
                        console.log('B button pressed (button ' + buttonIndex + ')');
                        break;
                    }
                }
                
                // Update previous state
                gamepad.buttons.forEach((button, index) => {
                    previousGamepadState[gamepad.index].buttons[index] = button.pressed;
                });
                
                gamepad.axes.forEach((axis, index) => {
                    previousGamepadState[gamepad.index].axes[index] = axis;
                });
            }
        }
    }
    
    // Navigation functions
    function navigateLeft() {
        levels[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + levels.length) % levels.length;
        levels[currentIndex].classList.add('active');
    }
    
    function navigateRight() {
        levels[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % levels.length;
        levels[currentIndex].classList.add('active');
    }
    
    function selectLevel() {
        const selectedLevel = levels[currentIndex].getAttribute('data-level');
        // Open the selected level in fullscreen
        window.location.href = `level.html?level=${selectedLevel}`;
    }
    
    // Start gamepad detection
    startGamepadDetection();
    
    // Listen for gamepad connections
    window.addEventListener('gamepadconnected', function(e) {
        console.log('Gamepad connected:', e.gamepad.id);
        // Force a refresh of the gamepad detection
        if (gamepadInterval) {
            clearInterval(gamepadInterval);
        }
        startGamepadDetection();
    });
    
    window.addEventListener('gamepaddisconnected', function(e) {
        console.log('Gamepad disconnected:', e.gamepad.id);
        // Remove from previous state
        if (previousGamepadState[e.gamepad.index]) {
            delete previousGamepadState[e.gamepad.index];
        }
    });
    
    // Add debug info for gamepad
    const debugInfo = document.createElement('div');
    debugInfo.style.position = 'fixed';
    debugInfo.style.bottom = '10px';
    debugInfo.style.right = '10px';
    debugInfo.style.backgroundColor = 'rgba(0,0,0,0.7)';
    debugInfo.style.color = 'white';
    debugInfo.style.padding = '10px';
    debugInfo.style.borderRadius = '5px';
    debugInfo.style.fontSize = '12px';
    debugInfo.style.fontFamily = 'monospace';
    debugInfo.style.zIndex = '1000';
    document.body.appendChild(debugInfo);
    
    // Update debug info
    setInterval(function() {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        let info = 'Controller info:<br>';
        
        let gamepadFound = false;
        for (let i = 0; i < gamepads.length; i++) {
            if (gamepads[i]) {
                gamepadFound = true;
                info += `Controller ${i}: ${gamepads[i].id}<br>`;
                info += `Buttons: ${gamepads[i].buttons.length}<br>`;
                info += `Axes: ${gamepads[i].axes.length}<br>`;
                
                // Show first 4 buttons state
                info += 'Buttons: ';
                for (let j = 0; j < Math.min(gamepads[i].buttons.length, 4); j++) {
                    info += `${j}:${gamepads[i].buttons[j].pressed ? '1' : '0'} `;
                }
                info += '<br>';
                
                // Show axes state
                info += 'Axes: ';
                for (let j = 0; j < Math.min(gamepads[i].axes.length, 2); j++) {
                    info += `${j}:${gamepads[i].axes[j].toFixed(2)} `;
                }
                info += '<br>';
            }
        }
        
        if (!gamepadFound) {
            info += 'No gamepad detected.<br>Press any button on your controller to connect.';
        }
        
        debugInfo.innerHTML = info;
    }, 100);
    
    // Add click event listeners to levels
    levels.forEach((level, index) => {
        level.addEventListener('click', function() {
            // Update the active level
            levels[currentIndex].classList.remove('active');
            currentIndex = index;
            levels[currentIndex].classList.add('active');
            
            // Select the level
            selectLevel();
        });
    });
});
