function ExperienceBar() {
    return (
        <div className="ExperienceBar">
            <span>0 XP</span>
            <div className="progress-bar">
                <div style={ { width: '50%' } } />
                <span className="current-experience" style={{ left: '50%' }} >
                    300 XP
                </span>
            </div>
            <span>600 XP</span>
        </div>
    );
}