import React from 'react';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { setNavbarBg, setSidebarBg, setTheme, setSidebarPos, setHeaderPos, setLayout } from '../../../redux/settings/action';


const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    setNavbarBg: (payload) => dispatch(setNavbarBg(payload)),
    setSidebarBg: (payload) => dispatch(setSidebarBg(payload)),
    setTheme: (payload) => dispatch(setTheme(payload)),
    // setSidebarHeaderPos: (payload) => dispatch(setSidebarHeaderPos(payload)),
    setSidebarPos: (payload) => dispatch(setSidebarPos(payload)),
    setHeaderPos: (payload) => dispatch(setHeaderPos(payload)),
    setLayout: (payload) => dispatch(setLayout(payload))
});

class Customizer extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        window.addEventListener("load", this.defaultSettings);
    }

    toggle() {
        document.getElementById("customizer").classList.toggle("show-service-panel");
    }
    render() {
        return (
            <aside className="customizer" id="customizer">
                {/*--------------------------------------------------------------------------------*/}
                {/* Toggle Customizer From Here                                                    */}
                {/*--------------------------------------------------------------------------------*/}
                <span className="service-panel-toggle text-white" onClick={this.toggle}><i className="fa fa-spin fa-cog"></i></span>
                <PerfectScrollbar>
                    <div className="customizer-body">
                        <div className="mt-3 border-bottom px-3">
                            <h5 className="font-medium m-0">Theme Color</h5>
                            <div className="btn-group btn-group-toggle mt-2 mb-3" data-toggle="buttons">
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeTheme === "light" ? 'active' : '')}>
                                    <input type="radio" name="theme-color" id="theme-light" onClick={() => { this.props.setTheme('light') }} /> Light
                                </label>
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeTheme === "dark" ? 'active' : '')}>
                                    <input type="radio" name="theme-color" id="theme-dark" onClick={() => { this.props.setTheme('dark') }} /> Dark
                                </label>
                            </div>
                        </div>
                        {/* <div className="mt-3 border-bottom px-3">
                            <h5 className="font-medium m-0">Menu & Header Position</h5>
                            <div className="btn-group btn-group-toggle mt-2 mb-3" data-toggle="buttons">
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeSidebarHeaderPos === "fixed" ? 'active' : '')}>
                                    <input type="radio" name="sidebar-position" id="sidebar-fixed" onClick={() => { this.props.setSidebarHeaderPos('fixed') }} /> Fixed
                                </label>
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeSidebarHeaderPos === "absolute" ? 'active' : '')}>
                                    <input type="radio" name="sidebar-position" id="sidebar-absolute" onClick={() => { this.props.setSidebarHeaderPos('absolute') }} /> Not Fixed
                                </label>
                            </div>
                        </div> */}
                        <div className="mt-3 border-bottom px-3">
                            <h5 className="font-medium m-0">Sidebar Position</h5>
                            <div className="btn-group btn-group-toggle mt-2 mb-3" data-toggle="buttons">
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeSidebarPos === "fixed" ? 'active' : '')}>
                                    <input type="radio" name="sidebar-position" id="sidebar-fixed" onClick={() => { this.props.setSidebarPos('fixed') }} /> Fixed
                                </label>
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeSidebarPos === "absolute" ? 'active' : '')}>
                                    <input type="radio" name="sidebar-position" id="sidebar-absolute" onClick={() => { this.props.setSidebarPos('absolute') }} /> Not Fixed
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 border-bottom px-3">
                            <h5 className="font-medium m-0">Header Position</h5>
                            <div className="btn-group btn-group-toggle mt-2 mb-3" data-toggle="buttons">
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeHeaderPos === "fixed" ? 'active' : '')}>
                                    <input type="radio" name="header-position" id="header-fixed" onClick={() => { this.props.setHeaderPos('fixed') }} /> Fixed
                                </label>
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeHeaderPos === "absolute" ? 'active' : '')}>
                                    <input type="radio" name="header-position" id="header-absolute" onClick={() => { this.props.setHeaderPos('absolute') }} /> Not Fixed
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 border-bottom px-3">
                            <h5 className="font-medium m-0">Layout</h5>
                            <div className="btn-group btn-group-toggle mt-2 mb-3" data-toggle="buttons">
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeLayout === "full" ? 'active' : '')}>
                                    <input type="radio" name="theme-layout" id="theme-full" onClick={() => { this.props.setLayout('full') }} /> Full
                                </label>
                                <label className={"btn btn-outline-secondary " + (this.props.settings.activeLayout === "boxed" ? 'active' : '')}>
                                    <input type="radio" name="theme-layout" id="theme-boxed" onClick={() => { this.props.setLayout('boxed') }} /> Boxed
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 border-bottom px-3">
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Change NAVBAR Background                                                       */}
                            {/*--------------------------------------------------------------------------------*/}
                            <h5 className="font-medium m-0">Navbar Backgrounds</h5>
                            <ul className="theme-color mt-2 mb-3">
                                <li className="theme-item"><span className="theme-link" data-navbarbg="skin1" onClick={() => { this.props.setNavbarBg('skin1') }}>&nbsp;&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-navbarbg="skin2" onClick={() => { this.props.setNavbarBg('skin2') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-navbarbg="skin3" onClick={() => { this.props.setNavbarBg('skin3') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-navbarbg="skin4" onClick={() => { this.props.setNavbarBg('skin4') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-navbarbg="skin5" onClick={() => { this.props.setNavbarBg('skin5') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-navbarbg="skin6" onClick={() => { this.props.setNavbarBg('skin6') }}>&nbsp;</span></li>
                            </ul>

                        </div>
                        <div className="mt-3 border-bottom px-3">
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Change SIDEBAR Background                                                      */}
                            {/*--------------------------------------------------------------------------------*/}
                            <h5 className="font-medium m-0">Menu Backgrounds</h5>
                            <ul className="theme-color mt-2 mb-3">
                                <li className="theme-item"><span className="theme-link" data-sidebarbg="skin1" onClick={() => { this.props.setSidebarBg('skin1') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-sidebarbg="skin2" onClick={() => { this.props.setSidebarBg('skin2') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-sidebarbg="skin3" onClick={() => { this.props.setSidebarBg('skin3') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-sidebarbg="skin4" onClick={() => { this.props.setSidebarBg('skin4') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-sidebarbg="skin5" onClick={() => { this.props.setSidebarBg('skin5') }}>&nbsp;</span></li>
                                <li className="theme-item"><span className="theme-link" data-sidebarbg="skin6" onClick={() => { this.props.setSidebarBg('skin6') }}>&nbsp;</span></li>
                            </ul>

                        </div>
                    </div>
                </PerfectScrollbar>
            </aside >
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customizer);
