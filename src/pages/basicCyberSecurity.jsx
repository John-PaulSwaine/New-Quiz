import '../App.css'

const EasyCyberSecurity =()=>{
    return (
        <div>
            <h1>Easy Cyber Security Quiz</h1>
            <h5>Rules:</h5>
            <p>You will be asked 10 questions.</p>
            <p>You will be given upto 4 potential answers, with only 1 being correct.</p>
            <p>You only get ONE chance to answer.</p>
            <br /><br /><br />
            <p>Here will contain basic cyber security questions. Each question will have 4 options with only 1 correct answer.</p>
            <div>
                <h5>Question 1:</h5>
                <p>What is cyber security?</p>
                <button>The protection of all things within the digital world, including, but not limited to computers, smartphnes and networks.</button>
                <button>Protecting a service user's information.</button>
                <button>The process of testing for weaknesses.</button>
                <button>Developing a new piece of software for use across the business.</button>
                <p>Cyber security is used in order to protect anything and everything that is digital from cyber threats, mitigating cyber attacks. This includes things such as system/network access controls to limit who can access what within a network or system. (Same process as setting up parental controls on a child's profile on a shared family desktop computer by restricting access for certain people).</p>
            </div>
            <div>
                <h5>Question 2:</h5>
                <p>Should you use the same password for everything?</p>
                <button>Yes. I may forget passwords otherwise.</button>
                <button>No. I may forget but I can use a password manager.</button>
                <p>You should absolutely not use the same password for everything. This is because if one service suffers a cyber attack and they get your log-in credentials, then the cyber criminal(s) will then be able to access other accounts you hold such as Amazon, Facbook, eBay etc. Companies such as Google have password managers which can not only store passwords for you but can also recommend strong passwords as well, which ensures that the password isn't something that relates to you and your interests such as a football fan using the name of their favourite football team like Arsenal, Liverpool or Manchester City. This could be easily guessed with a quick social media search if that same information (what football club is supported) is open on social media platforms, which often these things are.</p>
            </div>
            <div>
                <h5>Question 3:</h5>
                <p>Why shouldn't you download from untrusted sources?</p>
                <button>The download may contain malware including viruses or spyware.</button>
                <button>What do you mean I shouldn't?.</button>
                <button>Because doing so may prevent a company, such as McAfee from taking money for the same service.</button>
                <button>There is no such thing as untrusted sources.</button>
                <p>You should not download from untrusted sources. While these may appear genuine, and very well could be, the risks far outweigh the potential positives. This is because material downloaded from untrusted sources may be riddled in malicious software such as spyware which can track your activity including keystrokes.</p>
            </div>
            <div>
                <h5>Question 4:</h5>
                <p>In Cyber Security terms, what is a firewall?</p>
                <button>A literal wall of fire</button>
                <button>A piece of software to regulate traffic on a network and/or system to aid in protecting against unauthorised access.</button>
                <button>A method of security designed by Leonardo Da Vinci</button>
                <p>A firewall is a piece of protective software and can be applied either to a system or a network. You can also have a network firewall work in conjunction with a system firewall. They aid in restricting access through access control methods, track who is accessing the system/network and logs activity. Firewalls are also the first line of defence against a potential cyber attack and as such it is important you have one active on your devices, even if they are personal devices.</p>
            </div>
            <div>
                <h5>Question 5:</h5>
                <p>What does VPN stand for?</p>
                <button>Visual Public Nuisance</button>
                <button>Virtual Portfolio Notification</button>
                <button>Virtual Private Network</button>
                <button>Virtual Public Network</button>
                <p>A VPN or Virtual Private Network is a piece of software that masks your IP address generating a random IP for you to use whilst using a VPN. This can be beneficial particularly if you are dealing with extremely sensitive or classified/top secret material that could result in catastrophic consequences if that material got out. </p>
            </div>
        </div>
    )
}
export default EasyCyberSecurity